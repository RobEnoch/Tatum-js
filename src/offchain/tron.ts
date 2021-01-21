import {validateOrReject} from 'class-validator';
import {getAccountById, getVirtualCurrencyByName} from '../ledger';
import {Currency} from '../model/request';
import {TransferTrxOffchain} from '../model/request/TransferTrxOffchain';
import {TrcType} from '../model/request/TrcType';
import {
    prepareTronSignedTransaction,
    prepareTronTrc10SignedTransaction,
    prepareTronTrc20SignedTransaction
} from '../transaction';
import {generatePrivateKeyFromMnemonic} from '../wallet';
import {offchainBroadcast, offchainCancelWithdrawal, offchainStoreWithdrawal} from './common';
import {CONTRACT_ADDRESSES} from '../constants';

/**
 * Send Tron transaction from Tatum Ledger account to the blockchain. This method broadcasts signed transaction to the blockchain.
 * This operation is irreversible.
 * @param testnet mainnet or testnet version
 * @param body content of the transaction to broadcast
 * @returns transaction id of the transaction in the blockchain
 */
export const sendTronOffchainTransaction = async (testnet: boolean, body: TransferTrxOffchain) => {
    await validateOrReject(body);
    const {
        mnemonic, index, fromPrivateKey, ...withdrawal
    } = body;
    const {amount, address} = withdrawal;

    let fromPriv: string;
    if (mnemonic && index !== undefined) {
        fromPriv = mnemonic && index ? await generatePrivateKeyFromMnemonic(Currency.TRON, testnet, mnemonic, index) : fromPrivateKey as string;
    } else if (fromPrivateKey) {
        fromPriv = fromPrivateKey;
    } else {
        throw new Error('No mnemonic or private key is present.');
    }

    withdrawal.fee = withdrawal.fee || '1.5';
    const account = await getAccountById(withdrawal.senderAccountId);
    let txData;
    if (account.currency === Currency.TRON) {
        txData = await prepareTronSignedTransaction(testnet, {amount, fromPrivateKey: fromPriv, to: address});
    }
    if (account.currency === Currency.USDT_TRON) {
        txData = await prepareTronTrc20SignedTransaction(testnet, {
            amount,
            fromPrivateKey: fromPriv,
            to: address,
            tokenAddress: CONTRACT_ADDRESSES[Currency.USDT],
            feeLimit: parseFloat(withdrawal.fee),
        });
    } else {
        const vc = await getVirtualCurrencyByName(account.currency);
        if (vc.trcType === TrcType.TRC10) {
            txData = await prepareTronTrc10SignedTransaction(testnet, {
                amount,
                fromPrivateKey: fromPriv,
                to: address,
                tokenId: vc.erc20Address as string,
            });
        } else if (vc.trcType === TrcType.TRC20) {
            txData = await prepareTronTrc20SignedTransaction(testnet, {
                amount,
                feeLimit: parseFloat(withdrawal.fee),
                fromPrivateKey: fromPriv,
                to: address,
                tokenAddress: vc.erc20Address as string
            });
        } else {
            throw new Error('Unsupported account.');
        }
    }
    const {id} = await offchainStoreWithdrawal(withdrawal);
    try {
        return {...await offchainBroadcast({txData, withdrawalId: id, currency: Currency.TRON}), id};
    } catch (e) {
        console.error(e);
        await offchainCancelWithdrawal(id);
        throw e;
    }
};

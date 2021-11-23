import { generateMnemonic, mnemonicToSeed } from 'bip39'
// @ts-ignore
import hdkey from 'hdkey'
import { QTUM_DERIVATION_PATH, QTUM_NETWORK_MAINNET, QTUM_NETWORK_TESTNET } from '../constants'
import { TESTNET_DERIVATION_PATH } from '@tatumio/tatum-core'
import { WalletWithMnemonic } from '@tatumio/tatum-ledger'

/**
 * Generate Qtum wallet
 * @param testnet testnet or mainnet version of address
 * @param mnem mnemonic seed to use
 * @returns wallet
 */
export const generateQtumWallet = async (testnet: boolean, mnem: string): Promise<WalletWithMnemonic> => {
  const hdwallet = hdkey.fromMasterSeed(await mnemonicToSeed(mnem), testnet ? QTUM_NETWORK_TESTNET.bip32 : QTUM_NETWORK_MAINNET.bip32)
  return {
    mnemonic: mnem,
    xpub: hdwallet.derive(testnet ? TESTNET_DERIVATION_PATH : QTUM_DERIVATION_PATH).toJSON().xpub,
  }
}

/**
 * Generate wallet
 * @param options.testnet testnet or mainnet version of address
 * @param options.mnemonic mnemonic seed to use. If not present, new one will be generated
 * @returns wallet or a combination of address and private key
 */
export const generateWallet = (options: { testnet?: boolean; mnemonic?: string }) => {
  const mnemonic = options.mnemonic
  const mnem = mnemonic ? mnemonic : generateMnemonic(256)
  return generateQtumWallet(options.testnet as boolean, mnem)
}

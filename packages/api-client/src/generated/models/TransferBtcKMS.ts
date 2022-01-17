/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransferBtcKMS = {
    /**
     * Sender account ID
     */
    senderAccountId: string;
    /**
     * Blockchain address to send assets to. For BTC, LTC, DOGE and BCH, it is possible to enter list of multiple recipient blockchain addresses as a comma separated string.
     */
    address: string;
    /**
     * Amount to be withdrawn to blockchain.
     */
    amount: string;
    /**
     * Compliance check, if withdrawal is not compliant, it will not be processed.
     */
    compliant?: boolean;
    /**
     * Fee to be submitted as a transaction fee to blockchain. If none is set, default value of 0.0005 BTC is used. Minimum fee is 0.00001 BTC.
     */
    fee?: string;
    /**
     * For BTC, LTC, DOGE and BCH, it is possible to enter list of multiple recipient blockchain amounts. List of recipient addresses must be present in the address field and total sum of amounts must be equal to the amount field.
     */
    multipleAmounts?: Array<string>;
    /**
     * Used to parametrize withdrawal as a change address for left coins from transaction. XPub or attr must be used.
     */
    attr?: string;
    /**
     * Signature hash of the mnemonic, which will be used to sign transactions locally.
     * All signature Ids should be present, which might be used to sign transaction.
     * Tatum KMS does not support keyPair type of off-chain transaction, only mnemonic based.
     *
     */
    signatureId: string;
    /**
     * Extended public key (xpub) of the wallet associated with the accounts. Should be present, when mnemonic is used.
     */
    xpub: string;
    /**
     * Identifier of the payment, shown for created Transaction within Tatum sender account.
     */
    paymentId?: string;
    /**
     * Note visible to owner of withdrawing account
     */
    senderNote?: string;
}

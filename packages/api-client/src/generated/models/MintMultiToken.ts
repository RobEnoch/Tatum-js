/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MintMultiToken = {
    /**
     * Chain to work with.
     */
    chain: MintMultiToken.chain;
    /**
     * ID of token to be created.
     */
    tokenId: string;
    /**
     * Blockchain address to send Multi Token token to
     */
    to: string;
    /**
     * Address of Multi Token token
     */
    contractAddress: string;
    /**
     * amount of token to be created.
     */
    amount: string;
    /**
     * Data in bytes
     */
    data?: string;
    /**
     * If signatureId is mnemonic-based, this is the index to the specific address from that mnemonic.
     */
    index?: number;
    /**
     * Identifier of the private key associated in signing application. Private key, or signature Id must be present.
     */
    signatureId?: string;
    /**
     * Nonce to be set to transaction. If not present, last known nonce will be used.
     */
    nonce?: number;
    /**
     * Custom defined fee. If not present, it will be calculated automatically.
     */
    fee?: {
        /**
         * Gas limit for transaction in gas price.
         */
        gasLimit: string;
        /**
         * Gas price in Gwei.
         */
        gasPrice: string;
    };
}

export namespace MintMultiToken {

    /**
     * Chain to work with.
     */
    export enum chain {
        ETH = 'ETH',
        ONE = 'ONE',
        MATIC = 'MATIC',
        KCS = 'KCS',
        BSC = 'BSC',
        ALGO = 'ALGO',
    }


}

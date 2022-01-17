/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateCashbackValueForAuthorNftTron = {
    /**
     * Chain to work with.
     */
    chain: UpdateCashbackValueForAuthorNftTron.chain;
    /**
     * ID of token to be updated.
     */
    tokenId: string;
    /**
     * New royalty cashback to be set for the author of token with tokenId. If set to 0, royalty is disabled for this token.
     */
    cashbackValue: string;
    /**
     * Address of NFT token
     */
    contractAddress: string;
    /**
     * Private key of sender address. Private key, or signature Id must be present.
     */
    fromPrivateKey: string;
    /**
     * Max limit for fee to be paid, in TRX.
     */
    feeLimit: number;
}

export namespace UpdateCashbackValueForAuthorNftTron {

    /**
     * Chain to work with.
     */
    export enum chain {
        TRON = 'TRON',
    }


}

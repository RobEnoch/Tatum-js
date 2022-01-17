/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MintMultiTokenCelo = {
    /**
     * Chain to work with.
     */
    chain: MintMultiTokenCelo.chain;
    /**
     * ID of token to be created.
     */
    tokenId: string;
    /**
     * amount of token to be created.
     */
    amount: string;
    /**
     * Blockchain address to send Multi Token token to
     */
    to: string;
    /**
     * Address of Multi Token token
     */
    contractAddress: string;
    /**
     * Data in bytes
     */
    data?: string;
    /**
     * Private key of sender address. Private key, or signature Id must be present.
     */
    fromPrivateKey: string;
    /**
     * Nonce to be set to Celo transaction. If not present, last known nonce will be used.
     */
    nonce?: number;
    /**
     * Currency to pay for transaction gas
     */
    feeCurrency: MintMultiTokenCelo.feeCurrency;
}

export namespace MintMultiTokenCelo {

    /**
     * Chain to work with.
     */
    export enum chain {
        CELO = 'CELO',
    }

    /**
     * Currency to pay for transaction gas
     */
    export enum feeCurrency {
        CELO = 'CELO',
        CUSD = 'CUSD',
        CEUR = 'CEUR',
    }


}

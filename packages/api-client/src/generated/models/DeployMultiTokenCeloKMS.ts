/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeployMultiTokenCeloKMS = {
    /**
     * Chain to work with.
     */
    chain: DeployMultiTokenCeloKMS.chain;
    /**
     * URI of the Multi Token contract
     */
    uri: string;
    /**
     * True if the contract is publicMint type
     */
    publicMint?: boolean;
    /**
     * If signatureId is mnemonic-based, this is the index to the specific address from that mnemonic.
     */
    index?: number;
    /**
     * Identifier of the private key associated in signing application. Private key, or signature Id must be present.
     */
    signatureId: string;
    nonce?: number;
    /**
     * Currency to pay for transaction gas
     */
    feeCurrency: DeployMultiTokenCeloKMS.feeCurrency;
}

export namespace DeployMultiTokenCeloKMS {

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
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeployErc721CeloKMS = {
    /**
     * Name of the ERC721 token
     */
    name: string;
    /**
     * Symbol of the ERC721 token
     */
    symbol: string;
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
    feeCurrency: DeployErc721CeloKMS.feeCurrency;
}

export namespace DeployErc721CeloKMS {

    /**
     * Currency to pay for transaction gas
     */
    export enum feeCurrency {
        CELO = 'CELO',
        CUSD = 'CUSD',
        CEUR = 'CEUR',
    }


}

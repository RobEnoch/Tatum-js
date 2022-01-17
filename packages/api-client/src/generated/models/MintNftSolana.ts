/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MintNftSolana = {
    /**
     * Chain to work with.
     */
    chain: MintNftSolana.chain;
    /**
     * Blockchain address to send NFT token to
     */
    to: string;
    /**
     * Blockchain address to mint NFT token from. From this account, transaction fee will be paid.
     */
    from: string;
    /**
     * Private key of sender address.
     */
    fromPrivateKey: string;
    metadata: {
        /**
         * Name of the NFT token.
         */
        name: string;
        /**
         * Symbol of the NFT token.
         */
        symbol: string;
        /**
         * Basis points of the seller fee.
         */
        sellerFeeBasisPoints: number;
        /**
         * Metadata of the token. See https://eips.ethereum.org/EIPS/eip-721#specification for more details.
         */
        uri: string;
        /**
         * Royalty receivers for NFT transfers.
         */
        creators?: Array<any>;
    };
}

export namespace MintNftSolana {

    /**
     * Chain to work with.
     */
    export enum chain {
        SOL = 'SOL',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CancelOrSettleAuctionCeloKMS = {
    /**
     * Blockchain to work with.
     */
    chain: CancelOrSettleAuctionCeloKMS.chain;
    /**
     * Currency to pay for transaction gas
     */
    feeCurrency: CancelOrSettleAuctionCeloKMS.feeCurrency;
    /**
     * Address of the marketplace smart contract.
     */
    contractAddress: string;
    /**
     * Optional address of the ERC20 token, which will be used as a selling currency of the NFT.
     */
    erc20Address?: string;
    /**
     * ID of the auction.
     */
    id: string;
    /**
     * Identifier of the private key associated in signing application. Private key, or signature Id must be present.
     */
    signatureId: string;
    /**
     * If signatureId is mnemonic-based, this is the index to the specific address from that mnemonic.
     */
    index?: number;
    /**
     * Nonce to be set to Ethereum transaction. If not present, last known nonce will be used.
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

export namespace CancelOrSettleAuctionCeloKMS {

    /**
     * Blockchain to work with.
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

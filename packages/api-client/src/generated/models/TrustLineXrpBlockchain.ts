/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TrustLineXrpBlockchain = {
    /**
     * XRP account address. Must be the one used for generating deposit tags.
     */
    fromAccount: string;
    /**
     * Blockchain address of the issuer of the assets to create trust line for.
     */
    issuerAccount: string;
    /**
     * Amount of the assets to be permitted to send over this trust line. 0 means deletion of the trust line.
     */
    limit: string;
    /**
     * Asset name. Must be 160bit HEX string, e.g. SHA1.
     */
    token: string;
    /**
     * Secret for account. Secret, or signature Id must be present.
     */
    fromSecret: string;
    /**
     * Fee to be paid, in XRP. If omitted, current fee will be calculated.
     */
    fee?: string;
}

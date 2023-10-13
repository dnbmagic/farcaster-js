/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub REST API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Farcaster docs](https://www.thehubble.xyz/docs/httpapi/httpapi.html) for more details. Some client libraries:   - [TypeScript](https://www.npmjs.com/package/@standard-crypto/farcaster-js-hub-rest) 
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { HashScheme } from './hash-scheme';
// May contain unused imports in some cases
// @ts-ignore
import { SignatureScheme } from './signature-scheme';

/**
 * 
 * @export
 * @interface MessageCommon
 */
export interface MessageCommon {
    /**
     * 
     * @type {string}
     * @memberof MessageCommon
     */
    'hash': string;
    /**
     * 
     * @type {HashScheme}
     * @memberof MessageCommon
     */
    'hashScheme': HashScheme;
    /**
     * 
     * @type {string}
     * @memberof MessageCommon
     */
    'signature': string;
    /**
     * 
     * @type {SignatureScheme}
     * @memberof MessageCommon
     */
    'signatureScheme': SignatureScheme;
    /**
     * 
     * @type {string}
     * @memberof MessageCommon
     */
    'signer': string;
}



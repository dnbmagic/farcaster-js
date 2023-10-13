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
import { RevokeMessageBody } from './revoke-message-body';

/**
 * 
 * @export
 * @interface HubEventRevokeMessage
 */
export interface HubEventRevokeMessage {
    /**
     * 
     * @type {string}
     * @memberof HubEventRevokeMessage
     */
    'type': string;
    /**
     * 
     * @type {number}
     * @memberof HubEventRevokeMessage
     */
    'id': number;
    /**
     * 
     * @type {RevokeMessageBody}
     * @memberof HubEventRevokeMessage
     */
    'revokeMessageBody': RevokeMessageBody;
}


/* tslint:disable */
/**
 * v2 Farcaster
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PostCastResponseCast } from "./post-cast-response-cast";

/**
 *
 * @export
 * @interface PostCastResponse
 */
export interface PostCastResponse {
  /**
   *
   * @type {boolean}
   * @memberof PostCastResponse
   */
  success: boolean;
  /**
   *
   * @type {PostCastResponseCast}
   * @memberof PostCastResponse
   */
  cast: PostCastResponseCast;
}

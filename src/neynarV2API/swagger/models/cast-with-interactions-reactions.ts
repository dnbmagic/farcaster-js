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

// May contain unused imports in some cases
import { ReactionLike } from "./reaction-like";
// May contain unused imports in some cases
import { ReactionRecast } from "./reaction-recast";

/**
 *
 * @export
 * @interface CastWithInteractionsReactions
 */
export interface CastWithInteractionsReactions {
  /**
   *
   * @type {Array<ReactionLike>}
   * @memberof CastWithInteractionsReactions
   */
  likes: ReactionLike[];
  /**
   *
   * @type {Array<ReactionRecast>}
   * @memberof CastWithInteractionsReactions
   */
  recasts: ReactionRecast[];
}

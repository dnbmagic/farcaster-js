/* tslint:disable */
/* eslint-disable */
/**
 * Merkle API
 * API documentation for all publicly exposed APIs provided by Merkle Manufactory, Inc for Farcaster V2.
 *
 * OpenAPI spec version: 2.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { NotificationCastReaction } from "./NotificationCastReaction";
/**
 *
 * @export
 * @interface Def54
 */
export interface CastReactionNotificationGroup {
  /**
   *
   * @type {string}
   * @memberof Def54
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Def54
   */
  type: string;
  /**
   *
   * @type {Def18}
   * @memberof Def54
   */
  latestTimestamp: number;
  /**
   *
   * @type {Def2}
   * @memberof Def54
   */
  totalItemCount: number;
  /**
   *
   * @type {Array<NotificationCastReaction>}
   * @memberof Def54
   */
  previewItems: Array<NotificationCastReaction>;
}
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
import { AssetCollection } from "./AssetCollection";
import { Asset } from "./Asset";
/**
 *
 * @export
 * @interface Def31
 */
export interface AssetGroup {
  /**
   *
   * @type {AssetCollection}
   * @memberof Def31
   */
  collection: AssetCollection;
  /**
   *
   * @type {Array<Asset>}
   * @memberof Def31
   */
  assets: Array<Asset>;
}
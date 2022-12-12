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
import { Cast } from "./Cast";
import { PaginationInfo } from "./PaginationInfo";

export interface UserCastLikesGetResponse {
  result: UserCastLikesGetResponseResult;
  next?: PaginationInfo;
}

export interface UserCastLikesGetResponseResult {
  likes: Array<Cast>;
}

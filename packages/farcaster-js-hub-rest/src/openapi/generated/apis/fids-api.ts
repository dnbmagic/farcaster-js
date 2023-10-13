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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../models';
// @ts-ignore
import { FidsResponse } from '../models';
/**
 * FIDsApi - axios parameter creator
 * @export
 */
export const FIDsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a list of all the FIDs
         * @param {number} [pageSize] Maximum number of messages to return in a single response
         * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
         * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFids: async (pageSize?: number, reverse?: boolean, pageToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/fids`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (reverse !== undefined) {
                localVarQueryParameter['reverse'] = reverse;
            }

            if (pageToken !== undefined) {
                localVarQueryParameter['pageToken'] = pageToken;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FIDsApi - functional programming interface
 * @export
 */
export const FIDsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FIDsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a list of all the FIDs
         * @param {number} [pageSize] Maximum number of messages to return in a single response
         * @param {boolean} [reverse] Reverse the sort order, returning latest messages first
         * @param {string} [pageToken] The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listFids(pageSize?: number, reverse?: boolean, pageToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FidsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listFids(pageSize, reverse, pageToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FIDsApi - factory interface
 * @export
 */
export const FIDsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FIDsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a list of all the FIDs
         * @param {FIDsApiListFidsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFids(requestParameters: FIDsApiListFidsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<FidsResponse> {
            return localVarFp.listFids(requestParameters.pageSize, requestParameters.reverse, requestParameters.pageToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listFids operation in FIDsApi.
 * @export
 * @interface FIDsApiListFidsRequest
 */
export interface FIDsApiListFidsRequest {
    /**
     * Maximum number of messages to return in a single response
     * @type {number}
     * @memberof FIDsApiListFids
     */
    readonly pageSize?: number

    /**
     * Reverse the sort order, returning latest messages first
     * @type {boolean}
     * @memberof FIDsApiListFids
     */
    readonly reverse?: boolean

    /**
     * The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page
     * @type {string}
     * @memberof FIDsApiListFids
     */
    readonly pageToken?: string
}

/**
 * FIDsApi - object-oriented interface
 * @export
 * @class FIDsApi
 * @extends {BaseAPI}
 */
export class FIDsApi extends BaseAPI {
    /**
     * 
     * @summary Get a list of all the FIDs
     * @param {FIDsApiListFidsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FIDsApi
     */
    public listFids(requestParameters: FIDsApiListFidsRequest = {}, options?: AxiosRequestConfig) {
        return FIDsApiFp(this.configuration).listFids(requestParameters.pageSize, requestParameters.reverse, requestParameters.pageToken, options).then((request) => request(this.axios, this.basePath));
    }
}
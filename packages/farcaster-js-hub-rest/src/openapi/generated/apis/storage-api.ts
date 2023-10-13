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
import { StorageLimitsResponse } from '../models';
/**
 * StorageApi - axios parameter creator
 * @export
 */
export const StorageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get an FID\'s storage limits.
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorageLimitsByFid: async (fid: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fid' is not null or undefined
            assertParamExists('getStorageLimitsByFid', 'fid', fid)
            const localVarPath = `/v1/storageLimitsByFid`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (fid !== undefined) {
                localVarQueryParameter['fid'] = fid;
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
 * StorageApi - functional programming interface
 * @export
 */
export const StorageApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StorageApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get an FID\'s storage limits.
         * @param {number} fid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStorageLimitsByFid(fid: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StorageLimitsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStorageLimitsByFid(fid, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StorageApi - factory interface
 * @export
 */
export const StorageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StorageApiFp(configuration)
    return {
        /**
         * 
         * @summary Get an FID\'s storage limits.
         * @param {StorageApiGetStorageLimitsByFidRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorageLimitsByFid(requestParameters: StorageApiGetStorageLimitsByFidRequest, options?: AxiosRequestConfig): AxiosPromise<StorageLimitsResponse> {
            return localVarFp.getStorageLimitsByFid(requestParameters.fid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getStorageLimitsByFid operation in StorageApi.
 * @export
 * @interface StorageApiGetStorageLimitsByFidRequest
 */
export interface StorageApiGetStorageLimitsByFidRequest {
    /**
     * 
     * @type {number}
     * @memberof StorageApiGetStorageLimitsByFid
     */
    readonly fid: number
}

/**
 * StorageApi - object-oriented interface
 * @export
 * @class StorageApi
 * @extends {BaseAPI}
 */
export class StorageApi extends BaseAPI {
    /**
     * 
     * @summary Get an FID\'s storage limits.
     * @param {StorageApiGetStorageLimitsByFidRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorageApi
     */
    public getStorageLimitsByFid(requestParameters: StorageApiGetStorageLimitsByFidRequest, options?: AxiosRequestConfig) {
        return StorageApiFp(this.configuration).getStorageLimitsByFid(requestParameters.fid, options).then((request) => request(this.axios, this.basePath));
    }
}
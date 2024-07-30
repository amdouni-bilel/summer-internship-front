/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../config/base-service';
import { ApiConfiguration } from '../config/api-configuration';
import { StrictHttpResponse } from '../config/strict-http-response';
import { RequestBuilder } from '../config/request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { EntityModelStatus } from '../models/entity-model-status';
import { EntityModelType } from '../models/entity-model-type';
import { PagedModelEntityModelStatus } from '../models/paged-model-entity-model-status';
import { PagedModelEntityModelType } from '../models/paged-model-entity-model-type';
import { StatusRequestBody } from '../models/status-request-body';

@Injectable({
  providedIn: 'root',
})
export class StatusService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCollectionResourceTypeGet111
   */
  static readonly GetCollectionResourceTypeGet111Path = '/status';

  /**
   * get-status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceTypeGet111$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTypeGet111$Json$Response(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;
  }): Observable<StrictHttpResponse<(PagedModelEntityModelType | PagedModelEntityModelStatus)>> {

    const rb = new RequestBuilder(this.rootUrl, StatusService.GetCollectionResourceTypeGet111Path, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('sort', params.sort, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/x-spring-data-compact+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(PagedModelEntityModelType | PagedModelEntityModelStatus)>;
      })
    );
  }

  /**
   * get-status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceTypeGet111$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTypeGet111$Json(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;
  }): Observable<(PagedModelEntityModelType | PagedModelEntityModelStatus)> {

    return this.getCollectionResourceTypeGet111$Json$Response(params).pipe(
      map((r: StrictHttpResponse<(PagedModelEntityModelType | PagedModelEntityModelStatus)>) => r.body as (PagedModelEntityModelType | PagedModelEntityModelStatus))
    );
  }

  /**
   * get-status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceTypeGet111$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTypeGet111$UriList$Response(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, StatusService.GetCollectionResourceTypeGet111Path, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('sort', params.sort, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/uri-list'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * get-status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceTypeGet111$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTypeGet111$UriList(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;
  }): Observable<string> {

    return this.getCollectionResourceTypeGet111$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation postCollectionResourceTypePost1
   */
  static readonly PostCollectionResourceTypePost1Path = '/status';

  /**
   * create-status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceTypePost1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceTypePost1$Response(params: {
    body: StatusRequestBody
  }): Observable<StrictHttpResponse<(EntityModelType | EntityModelStatus)>> {

    const rb = new RequestBuilder(this.rootUrl, StatusService.PostCollectionResourceTypePost1Path, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(EntityModelType | EntityModelStatus)>;
      })
    );
  }

  /**
   * create-status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceTypePost1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceTypePost1(params: {
    body: StatusRequestBody
  }): Observable<(EntityModelType | EntityModelStatus)> {

    return this.postCollectionResourceTypePost1$Response(params).pipe(
      map((r: StrictHttpResponse<(EntityModelType | EntityModelStatus)>) => r.body as (EntityModelType | EntityModelStatus))
    );
  }

  /**
   * Path part for operation getItemResourceTypeGet1
   */
  static readonly GetItemResourceTypeGet1Path = '/status/{id}';

  /**
   * get-status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceTypeGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceTypeGet1$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<(EntityModelType | EntityModelStatus)>> {

    const rb = new RequestBuilder(this.rootUrl, StatusService.GetItemResourceTypeGet1Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(EntityModelType | EntityModelStatus)>;
      })
    );
  }

  /**
   * get-status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getItemResourceTypeGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceTypeGet1(params: {
    id: string;
  }): Observable<(EntityModelType | EntityModelStatus)> {

    return this.getItemResourceTypeGet1$Response(params).pipe(
      map((r: StrictHttpResponse<(EntityModelType | EntityModelStatus)>) => r.body as (EntityModelType | EntityModelStatus))
    );
  }

  /**
   * Path part for operation putItemResourceTypePut1
   */
  static readonly PutItemResourceTypePut1Path = '/status/{id}';

  /**
   * update-status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceTypePut1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceTypePut1$Response(params: {
    id: string;
    body: StatusRequestBody
  }): Observable<StrictHttpResponse<(EntityModelType | EntityModelStatus)>> {

    const rb = new RequestBuilder(this.rootUrl, StatusService.PutItemResourceTypePut1Path, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(EntityModelType | EntityModelStatus)>;
      })
    );
  }

  /**
   * update-status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putItemResourceTypePut1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceTypePut1(params: {
    id: string;
    body: StatusRequestBody
  }): Observable<(EntityModelType | EntityModelStatus)> {

    return this.putItemResourceTypePut1$Response(params).pipe(
      map((r: StrictHttpResponse<(EntityModelType | EntityModelStatus)>) => r.body as (EntityModelType | EntityModelStatus))
    );
  }

  /**
   * Path part for operation deleteItemResourceTypeDelete1
   */
  static readonly DeleteItemResourceTypeDelete1Path = '/status/{id}';

  /**
   * delete-status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceTypeDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceTypeDelete1$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StatusService.DeleteItemResourceTypeDelete1Path, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * delete-status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceTypeDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceTypeDelete1(params: {
    id: string;
  }): Observable<void> {

    return this.deleteItemResourceTypeDelete1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchItemResourceTypePatch1
   */
  static readonly PatchItemResourceTypePatch1Path = '/status/{id}';

  /**
   * patch-status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceTypePatch1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceTypePatch1$Response(params: {
    id: string;
    body: StatusRequestBody
  }): Observable<StrictHttpResponse<(EntityModelType | EntityModelStatus)>> {

    const rb = new RequestBuilder(this.rootUrl, StatusService.PatchItemResourceTypePatch1Path, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(EntityModelType | EntityModelStatus)>;
      })
    );
  }

  /**
   * patch-status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceTypePatch1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceTypePatch1(params: {
    id: string;
    body: StatusRequestBody
  }): Observable<(EntityModelType | EntityModelStatus)> {

    return this.patchItemResourceTypePatch1$Response(params).pipe(
      map((r: StrictHttpResponse<(EntityModelType | EntityModelStatus)>) => r.body as (EntityModelType | EntityModelStatus))
    );
  }

}

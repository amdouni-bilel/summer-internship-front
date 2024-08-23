/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CollectionModelEntityModelDevise } from '../models/collection-model-entity-model-devise';
import { DeviseRequestBody } from '../models/devise-request-body';
import { EntityModelDevise } from '../models/entity-model-devise';
import { PagedModelEntityModelDevise } from '../models/paged-model-entity-model-devise';

@Injectable({
  providedIn: 'root',
})
export class DevisesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCollectionResourceDeviseGet1
   */
  static readonly GetCollectionResourceDeviseGet1Path = '/devise';

  /**
   * get-devise
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceDeviseGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDeviseGet1$Json$Response(params?: {

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
  }): Observable<StrictHttpResponse<PagedModelEntityModelDevise>> {

    const rb = new RequestBuilder(this.rootUrl, DevisesService.GetCollectionResourceDeviseGet1Path, 'get');
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
        return r as StrictHttpResponse<PagedModelEntityModelDevise>;
      })
    );
  }

  /**
   * get-devise
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceDeviseGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDeviseGet1$Json(params?: {

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
  }): Observable<PagedModelEntityModelDevise> {

    return this.getCollectionResourceDeviseGet1$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelDevise>) => r.body as PagedModelEntityModelDevise)
    );
  }

  /**
   * get-devise
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceDeviseGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDeviseGet1$UriList$Response(params?: {

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

    const rb = new RequestBuilder(this.rootUrl, DevisesService.GetCollectionResourceDeviseGet1Path, 'get');
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
   * get-devise
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceDeviseGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDeviseGet1$UriList(params?: {

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

    return this.getCollectionResourceDeviseGet1$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation postCollectionResourceDevisePost
   */
  static readonly PostCollectionResourceDevisePostPath = '/devise';

  /**
   * create-devise
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceDevisePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceDevisePost$Response(params: {
    body: DeviseRequestBody
  }): Observable<StrictHttpResponse<EntityModelDevise>> {

    const rb = new RequestBuilder(this.rootUrl, DevisesService.PostCollectionResourceDevisePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntityModelDevise>;
      })
    );
  }

  /**
   * create-devise
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceDevisePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceDevisePost(params: {
    body: DeviseRequestBody
  }): Observable<EntityModelDevise> {

    return this.postCollectionResourceDevisePost$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelDevise>) => r.body as EntityModelDevise)
    );
  }

  /**
   * Path part for operation executeSearchDeviseGet
   */
  static readonly ExecuteSearchDeviseGetPath = '/devise/search/findByValue';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchDeviseGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchDeviseGet$Response(params?: {
    name?: string;
  }): Observable<StrictHttpResponse<CollectionModelEntityModelDevise>> {

    const rb = new RequestBuilder(this.rootUrl, DevisesService.ExecuteSearchDeviseGetPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CollectionModelEntityModelDevise>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `executeSearchDeviseGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchDeviseGet(params?: {
    name?: string;
  }): Observable<CollectionModelEntityModelDevise> {

    return this.executeSearchDeviseGet$Response(params).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelDevise>) => r.body as CollectionModelEntityModelDevise)
    );
  }

  /**
   * Path part for operation getItemResourceDeviseGet
   */
  static readonly GetItemResourceDeviseGetPath = '/devise/{id}';

  /**
   * get-devise
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceDeviseGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceDeviseGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<EntityModelDevise>> {

    const rb = new RequestBuilder(this.rootUrl, DevisesService.GetItemResourceDeviseGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntityModelDevise>;
      })
    );
  }

  /**
   * get-devise
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getItemResourceDeviseGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceDeviseGet(params: {
    id: string;
  }): Observable<EntityModelDevise> {

    return this.getItemResourceDeviseGet$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelDevise>) => r.body as EntityModelDevise)
    );
  }

  /**
   * Path part for operation putItemResourceDevisePut
   */
  static readonly PutItemResourceDevisePutPath = '/devise/{id}';

  /**
   * update-devise
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceDevisePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceDevisePut$Response(params: {
    id: string;
    body: DeviseRequestBody
  }): Observable<StrictHttpResponse<EntityModelDevise>> {

    const rb = new RequestBuilder(this.rootUrl, DevisesService.PutItemResourceDevisePutPath, 'put');
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
        return r as StrictHttpResponse<EntityModelDevise>;
      })
    );
  }

  /**
   * update-devise
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putItemResourceDevisePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceDevisePut(params: {
    id: string;
    body: DeviseRequestBody
  }): Observable<EntityModelDevise> {

    return this.putItemResourceDevisePut$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelDevise>) => r.body as EntityModelDevise)
    );
  }

  /**
   * Path part for operation deleteItemResourceDeviseDelete
   */
  static readonly DeleteItemResourceDeviseDeletePath = '/devise/{id}';

  /**
   * delete-devise
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceDeviseDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceDeviseDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DevisesService.DeleteItemResourceDeviseDeletePath, 'delete');
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
   * delete-devise
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceDeviseDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceDeviseDelete(params: {
    id: string;
  }): Observable<void> {

    return this.deleteItemResourceDeviseDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchItemResourceDevisePatch
   */
  static readonly PatchItemResourceDevisePatchPath = '/devise/{id}';

  /**
   * patch-devise
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceDevisePatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceDevisePatch$Response(params: {
    id: string;
    body: DeviseRequestBody
  }): Observable<StrictHttpResponse<EntityModelDevise>> {

    const rb = new RequestBuilder(this.rootUrl, DevisesService.PatchItemResourceDevisePatchPath, 'patch');
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
        return r as StrictHttpResponse<EntityModelDevise>;
      })
    );
  }

  /**
   * patch-devise
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceDevisePatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceDevisePatch(params: {
    id: string;
    body: DeviseRequestBody
  }): Observable<EntityModelDevise> {

    return this.patchItemResourceDevisePatch$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelDevise>) => r.body as EntityModelDevise)
    );
  }

}

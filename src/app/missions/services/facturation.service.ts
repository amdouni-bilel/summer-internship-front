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

import { EntityModelFacturation } from '../models/entity-model-facturation';
import { FacturationRequestBody } from '../models/facturation-request-body';
import { PagedModelEntityModelFacturation } from '../models/paged-model-entity-model-facturation';

@Injectable({
  providedIn: 'root',
})
export class FacturationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCollectionResourceFacturationGet1
   */
  static readonly GetCollectionResourceFacturationGet1Path = '/facturation';

  /**
   * get-facturation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceFacturationGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFacturationGet1$Json$Response(params?: {

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
  }): Observable<StrictHttpResponse<PagedModelEntityModelFacturation>> {

    const rb = new RequestBuilder(this.rootUrl, FacturationService.GetCollectionResourceFacturationGet1Path, 'get');
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
        return r as StrictHttpResponse<PagedModelEntityModelFacturation>;
      })
    );
  }

  /**
   * get-facturation
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceFacturationGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFacturationGet1$Json(params?: {

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
  }): Observable<PagedModelEntityModelFacturation> {

    return this.getCollectionResourceFacturationGet1$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelFacturation>) => r.body as PagedModelEntityModelFacturation)
    );
  }

  /**
   * get-facturation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceFacturationGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFacturationGet1$UriList$Response(params?: {

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

    const rb = new RequestBuilder(this.rootUrl, FacturationService.GetCollectionResourceFacturationGet1Path, 'get');
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
   * get-facturation
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceFacturationGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceFacturationGet1$UriList(params?: {

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

    return this.getCollectionResourceFacturationGet1$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation postCollectionResourceFacturationPost
   */
  static readonly PostCollectionResourceFacturationPostPath = '/facturation';

  /**
   * create-facturation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceFacturationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceFacturationPost$Response(params: {
    body: FacturationRequestBody
  }): Observable<StrictHttpResponse<EntityModelFacturation>> {

    const rb = new RequestBuilder(this.rootUrl, FacturationService.PostCollectionResourceFacturationPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntityModelFacturation>;
      })
    );
  }

  /**
   * create-facturation
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceFacturationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceFacturationPost(params: {
    body: FacturationRequestBody
  }): Observable<EntityModelFacturation> {

    return this.postCollectionResourceFacturationPost$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelFacturation>) => r.body as EntityModelFacturation)
    );
  }

  /**
   * Path part for operation getItemResourceFacturationGet
   */
  static readonly GetItemResourceFacturationGetPath = '/facturation/{id}';

  /**
   * get-facturation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceFacturationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceFacturationGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<EntityModelFacturation>> {

    const rb = new RequestBuilder(this.rootUrl, FacturationService.GetItemResourceFacturationGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntityModelFacturation>;
      })
    );
  }

  /**
   * get-facturation
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getItemResourceFacturationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceFacturationGet(params: {
    id: string;
  }): Observable<EntityModelFacturation> {

    return this.getItemResourceFacturationGet$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelFacturation>) => r.body as EntityModelFacturation)
    );
  }

  /**
   * Path part for operation putItemResourceFacturationPut
   */
  static readonly PutItemResourceFacturationPutPath = '/facturation/{id}';

  /**
   * update-facturation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceFacturationPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceFacturationPut$Response(params: {
    id: string;
    body: FacturationRequestBody
  }): Observable<StrictHttpResponse<EntityModelFacturation>> {

    const rb = new RequestBuilder(this.rootUrl, FacturationService.PutItemResourceFacturationPutPath, 'put');
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
        return r as StrictHttpResponse<EntityModelFacturation>;
      })
    );
  }

  /**
   * update-facturation
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putItemResourceFacturationPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceFacturationPut(params: {
    id: string;
    body: FacturationRequestBody
  }): Observable<EntityModelFacturation> {

    return this.putItemResourceFacturationPut$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelFacturation>) => r.body as EntityModelFacturation)
    );
  }

  /**
   * Path part for operation deleteItemResourceFacturationDelete
   */
  static readonly DeleteItemResourceFacturationDeletePath = '/facturation/{id}';

  /**
   * delete-facturation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceFacturationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceFacturationDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FacturationService.DeleteItemResourceFacturationDeletePath, 'delete');
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
   * delete-facturation
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceFacturationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceFacturationDelete(params: {
    id: string;
  }): Observable<void> {

    return this.deleteItemResourceFacturationDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchItemResourceFacturationPatch
   */
  static readonly PatchItemResourceFacturationPatchPath = '/facturation/{id}';

  /**
   * patch-facturation
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceFacturationPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceFacturationPatch$Response(params: {
    id: string;
    body: FacturationRequestBody
  }): Observable<StrictHttpResponse<EntityModelFacturation>> {

    const rb = new RequestBuilder(this.rootUrl, FacturationService.PatchItemResourceFacturationPatchPath, 'patch');
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
        return r as StrictHttpResponse<EntityModelFacturation>;
      })
    );
  }

  /**
   * patch-facturation
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceFacturationPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceFacturationPatch(params: {
    id: string;
    body: FacturationRequestBody
  }): Observable<EntityModelFacturation> {

    return this.patchItemResourceFacturationPatch$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelFacturation>) => r.body as EntityModelFacturation)
    );
  }

}

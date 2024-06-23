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

import { CompanyRequestBody } from '../models/company-request-body';
import { DomainesRequestBody } from '../models/domaines-request-body';
import { EntityModelCompany } from '../models/entity-model-company';
import { EntityModelDomaines } from '../models/entity-model-domaines';
import { PagedModelEntityModelCompany } from '../models/paged-model-entity-model-company';
import { PagedModelEntityModelDomaines } from '../models/paged-model-entity-model-domaines';

@Injectable({
  providedIn: 'root',
})
export class DomainesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCollectionResourceCompanyGet1
   */
  static readonly GetCollectionResourceCompanyGet1Path = '/company';

  /**
   * get-company
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceCompanyGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceCompanyGet1$Json$Response(params?: {

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
  }): Observable<StrictHttpResponse<PagedModelEntityModelCompany>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.GetCollectionResourceCompanyGet1Path, 'get');
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
        return r as StrictHttpResponse<PagedModelEntityModelCompany>;
      })
    );
  }

  /**
   * get-company
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceCompanyGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceCompanyGet1$Json(params?: {

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
  }): Observable<PagedModelEntityModelCompany> {

    return this.getCollectionResourceCompanyGet1$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelCompany>) => r.body as PagedModelEntityModelCompany)
    );
  }

  /**
   * get-company
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceCompanyGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceCompanyGet1$UriList$Response(params?: {

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

    const rb = new RequestBuilder(this.rootUrl, DomainesService.GetCollectionResourceCompanyGet1Path, 'get');
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
   * get-company
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceCompanyGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceCompanyGet1$UriList(params?: {

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

    return this.getCollectionResourceCompanyGet1$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation postCollectionResourceCompanyPost
   */
  static readonly PostCollectionResourceCompanyPostPath = '/company';

  /**
   * create-company
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceCompanyPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceCompanyPost$Response(params: {
    body: CompanyRequestBody
  }): Observable<StrictHttpResponse<EntityModelCompany>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.PostCollectionResourceCompanyPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntityModelCompany>;
      })
    );
  }

  /**
   * create-company
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceCompanyPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceCompanyPost(params: {
    body: CompanyRequestBody
  }): Observable<EntityModelCompany> {

    return this.postCollectionResourceCompanyPost$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelCompany>) => r.body as EntityModelCompany)
    );
  }

  /**
   * Path part for operation getItemResourceCompanyGet
   */
  static readonly GetItemResourceCompanyGetPath = '/company/{id}';

  /**
   * get-company
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceCompanyGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceCompanyGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<EntityModelCompany>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.GetItemResourceCompanyGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntityModelCompany>;
      })
    );
  }

  /**
   * get-company
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getItemResourceCompanyGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceCompanyGet(params: {
    id: string;
  }): Observable<EntityModelCompany> {

    return this.getItemResourceCompanyGet$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelCompany>) => r.body as EntityModelCompany)
    );
  }

  /**
   * Path part for operation putItemResourceCompanyPut
   */
  static readonly PutItemResourceCompanyPutPath = '/company/{id}';

  /**
   * update-company
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceCompanyPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceCompanyPut$Response(params: {
    id: string;
    body: CompanyRequestBody
  }): Observable<StrictHttpResponse<EntityModelCompany>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.PutItemResourceCompanyPutPath, 'put');
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
        return r as StrictHttpResponse<EntityModelCompany>;
      })
    );
  }

  /**
   * update-company
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putItemResourceCompanyPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceCompanyPut(params: {
    id: string;
    body: CompanyRequestBody
  }): Observable<EntityModelCompany> {

    return this.putItemResourceCompanyPut$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelCompany>) => r.body as EntityModelCompany)
    );
  }

  /**
   * Path part for operation deleteItemResourceCompanyDelete
   */
  static readonly DeleteItemResourceCompanyDeletePath = '/company/{id}';

  /**
   * delete-company
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceCompanyDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceCompanyDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.DeleteItemResourceCompanyDeletePath, 'delete');
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
   * delete-company
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceCompanyDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceCompanyDelete(params: {
    id: string;
  }): Observable<void> {

    return this.deleteItemResourceCompanyDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchItemResourceCompanyPatch
   */
  static readonly PatchItemResourceCompanyPatchPath = '/company/{id}';

  /**
   * patch-company
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceCompanyPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceCompanyPatch$Response(params: {
    id: string;
    body: CompanyRequestBody
  }): Observable<StrictHttpResponse<EntityModelCompany>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.PatchItemResourceCompanyPatchPath, 'patch');
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
        return r as StrictHttpResponse<EntityModelCompany>;
      })
    );
  }

  /**
   * patch-company
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceCompanyPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceCompanyPatch(params: {
    id: string;
    body: CompanyRequestBody
  }): Observable<EntityModelCompany> {

    return this.patchItemResourceCompanyPatch$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelCompany>) => r.body as EntityModelCompany)
    );
  }

  /**
   * Path part for operation getCollectionResourceDomainesGet1
   */
  static readonly GetCollectionResourceDomainesGet1Path = '/domaines';

  /**
   * get-domaines
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceDomainesGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDomainesGet1$Json$Response(params?: {

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
  }): Observable<StrictHttpResponse<PagedModelEntityModelDomaines>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.GetCollectionResourceDomainesGet1Path, 'get');
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
        return r as StrictHttpResponse<PagedModelEntityModelDomaines>;
      })
    );
  }

  /**
   * get-domaines
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceDomainesGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDomainesGet1$Json(params?: {

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
  }): Observable<PagedModelEntityModelDomaines> {

    return this.getCollectionResourceDomainesGet1$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelDomaines>) => r.body as PagedModelEntityModelDomaines)
    );
  }

  /**
   * get-domaines
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceDomainesGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDomainesGet1$UriList$Response(params?: {

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

    const rb = new RequestBuilder(this.rootUrl, DomainesService.GetCollectionResourceDomainesGet1Path, 'get');
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
   * get-domaines
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceDomainesGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceDomainesGet1$UriList(params?: {

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

    return this.getCollectionResourceDomainesGet1$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation postCollectionResourceDomainesPost
   */
  static readonly PostCollectionResourceDomainesPostPath = '/domaines';

  /**
   * create-domaines
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceDomainesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceDomainesPost$Response(params: {
    body: DomainesRequestBody
  }): Observable<StrictHttpResponse<EntityModelDomaines>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.PostCollectionResourceDomainesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntityModelDomaines>;
      })
    );
  }

  /**
   * create-domaines
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceDomainesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceDomainesPost(params: {
    body: DomainesRequestBody
  }): Observable<EntityModelDomaines> {

    return this.postCollectionResourceDomainesPost$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelDomaines>) => r.body as EntityModelDomaines)
    );
  }

  /**
   * Path part for operation getItemResourceDomainesGet
   */
  static readonly GetItemResourceDomainesGetPath = '/domaines/{id}';

  /**
   * get-domaines
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceDomainesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceDomainesGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<EntityModelDomaines>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.GetItemResourceDomainesGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntityModelDomaines>;
      })
    );
  }

  /**
   * get-domaines
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getItemResourceDomainesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceDomainesGet(params: {
    id: string;
  }): Observable<EntityModelDomaines> {

    return this.getItemResourceDomainesGet$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelDomaines>) => r.body as EntityModelDomaines)
    );
  }

  /**
   * Path part for operation putItemResourceDomainesPut
   */
  static readonly PutItemResourceDomainesPutPath = '/domaines/{id}';

  /**
   * update-domaines
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceDomainesPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceDomainesPut$Response(params: {
    id: string;
    body: DomainesRequestBody
  }): Observable<StrictHttpResponse<EntityModelDomaines>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.PutItemResourceDomainesPutPath, 'put');
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
        return r as StrictHttpResponse<EntityModelDomaines>;
      })
    );
  }

  /**
   * update-domaines
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putItemResourceDomainesPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceDomainesPut(params: {
    id: string;
    body: DomainesRequestBody
  }): Observable<EntityModelDomaines> {

    return this.putItemResourceDomainesPut$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelDomaines>) => r.body as EntityModelDomaines)
    );
  }

  /**
   * Path part for operation deleteItemResourceDomainesDelete
   */
  static readonly DeleteItemResourceDomainesDeletePath = '/domaines/{id}';

  /**
   * delete-domaines
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceDomainesDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceDomainesDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.DeleteItemResourceDomainesDeletePath, 'delete');
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
   * delete-domaines
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceDomainesDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceDomainesDelete(params: {
    id: string;
  }): Observable<void> {

    return this.deleteItemResourceDomainesDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchItemResourceDomainesPatch
   */
  static readonly PatchItemResourceDomainesPatchPath = '/domaines/{id}';

  /**
   * patch-domaines
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceDomainesPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceDomainesPatch$Response(params: {
    id: string;
    body: DomainesRequestBody
  }): Observable<StrictHttpResponse<EntityModelDomaines>> {

    const rb = new RequestBuilder(this.rootUrl, DomainesService.PatchItemResourceDomainesPatchPath, 'patch');
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
        return r as StrictHttpResponse<EntityModelDomaines>;
      })
    );
  }

  /**
   * patch-domaines
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceDomainesPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceDomainesPatch(params: {
    id: string;
    body: DomainesRequestBody
  }): Observable<EntityModelDomaines> {

    return this.patchItemResourceDomainesPatch$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelDomaines>) => r.body as EntityModelDomaines)
    );
  }

}

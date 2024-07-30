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

import { CollectionModelObject } from '../models/collection-model-object';
import { EntityModelCompany } from '../models/entity-model-company';
import { EntityModelFacturation } from '../models/entity-model-facturation';
import { EntityModelMission } from '../models/entity-model-mission';
import { MissionRequestBody } from '../models/mission-request-body';
import { PagedModelEntityModelMission } from '../models/paged-model-entity-model-mission';

@Injectable({
  providedIn: 'root',
})
export class MissionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCollectionResourceMissionGet1
   */
  static readonly GetCollectionResourceMissionGet1Path = '/missions';

  /**
   * get-mission
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceMissionGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMissionGet1$Json$Response(params?: {

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
  }): Observable<StrictHttpResponse<PagedModelEntityModelMission>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.GetCollectionResourceMissionGet1Path, 'get');
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
        return r as StrictHttpResponse<PagedModelEntityModelMission>;
      })
    );
  }

  /**
   * get-mission
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceMissionGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMissionGet1$Json(params?: {

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
  }): Observable<PagedModelEntityModelMission> {

    return this.getCollectionResourceMissionGet1$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelMission>) => r.body as PagedModelEntityModelMission)
    );
  }

  /**
   * get-mission
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceMissionGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMissionGet1$UriList$Response(params?: {

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

    const rb = new RequestBuilder(this.rootUrl, MissionsService.GetCollectionResourceMissionGet1Path, 'get');
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
   * get-mission
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceMissionGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceMissionGet1$UriList(params?: {

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

    return this.getCollectionResourceMissionGet1$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation postCollectionResourceMissionPost
   */
  static readonly PostCollectionResourceMissionPostPath = '/missions';

  /**
   * create-mission
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceMissionPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceMissionPost$Response(params: {
    body: MissionRequestBody
  }): Observable<StrictHttpResponse<EntityModelMission>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.PostCollectionResourceMissionPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntityModelMission>;
      })
    );
  }

  /**
   * create-mission
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceMissionPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceMissionPost(params: {
    body: MissionRequestBody
  }): Observable<EntityModelMission> {

    return this.postCollectionResourceMissionPost$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelMission>) => r.body as EntityModelMission)
    );
  }

  /**
   * Path part for operation getItemResourceMissionGet
   */
  static readonly GetItemResourceMissionGetPath = '/missions/{id}';

  /**
   * get-mission
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceMissionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceMissionGet$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<EntityModelMission>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.GetItemResourceMissionGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/hal+json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntityModelMission>;
      })
    );
  }

  /**
   * get-mission
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getItemResourceMissionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceMissionGet(params: {
    id: string;
  }): Observable<EntityModelMission> {

    return this.getItemResourceMissionGet$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelMission>) => r.body as EntityModelMission)
    );
  }

  /**
   * Path part for operation putItemResourceMissionPut
   */
  static readonly PutItemResourceMissionPutPath = '/missions/{id}';

  /**
   * update-mission
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceMissionPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceMissionPut$Response(params: {
    id: string;
    body: MissionRequestBody
  }): Observable<StrictHttpResponse<EntityModelMission>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.PutItemResourceMissionPutPath, 'put');
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
        return r as StrictHttpResponse<EntityModelMission>;
      })
    );
  }

  /**
   * update-mission
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putItemResourceMissionPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceMissionPut(params: {
    id: string;
    body: MissionRequestBody
  }): Observable<EntityModelMission> {

    return this.putItemResourceMissionPut$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelMission>) => r.body as EntityModelMission)
    );
  }

  /**
   * Path part for operation deleteItemResourceMissionDelete
   */
  static readonly DeleteItemResourceMissionDeletePath = '/missions/{id}';

  /**
   * delete-mission
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceMissionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceMissionDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.DeleteItemResourceMissionDeletePath, 'delete');
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
   * delete-mission
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceMissionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceMissionDelete(params: {
    id: string;
  }): Observable<void> {

    return this.deleteItemResourceMissionDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchItemResourceMissionPatch
   */
  static readonly PatchItemResourceMissionPatchPath = '/missions/{id}';

  /**
   * patch-mission
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceMissionPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceMissionPatch$Response(params: {
    id: string;
    body: MissionRequestBody
  }): Observable<StrictHttpResponse<EntityModelMission>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.PatchItemResourceMissionPatchPath, 'patch');
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
        return r as StrictHttpResponse<EntityModelMission>;
      })
    );
  }

  /**
   * patch-mission
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceMissionPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceMissionPatch(params: {
    id: string;
    body: MissionRequestBody
  }): Observable<EntityModelMission> {

    return this.patchItemResourceMissionPatch$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelMission>) => r.body as EntityModelMission)
    );
  }

  /**
   * Path part for operation followPropertyReferenceMissionGet1
   */
  static readonly FollowPropertyReferenceMissionGet1Path = '/missions/{id}/company';

  /**
   * get-company-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMissionGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet1$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<EntityModelCompany>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.FollowPropertyReferenceMissionGet1Path, 'get');
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
   * get-company-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMissionGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet1$Json(params: {
    id: string;
  }): Observable<EntityModelCompany> {

    return this.followPropertyReferenceMissionGet1$Json$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelCompany>) => r.body as EntityModelCompany)
    );
  }

  /**
   * get-company-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMissionGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet1$UriList$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.FollowPropertyReferenceMissionGet1Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * get-company-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMissionGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet1$UriList(params: {
    id: string;
  }): Observable<string> {

    return this.followPropertyReferenceMissionGet1$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation createPropertyReferenceMissionPut
   */
  static readonly CreatePropertyReferenceMissionPutPath = '/missions/{id}/company';

  /**
   * update-company-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMissionPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMissionPut$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  }): Observable<StrictHttpResponse<EntityModelCompany>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.CreatePropertyReferenceMissionPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/x-spring-data-compact+json');
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
   * update-company-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMissionPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMissionPut$Json(params: {
    id: string;
    body: CollectionModelObject
  }): Observable<EntityModelCompany> {

    return this.createPropertyReferenceMissionPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelCompany>) => r.body as EntityModelCompany)
    );
  }

  /**
   * update-company-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMissionPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMissionPut$UriList$Response(params: {
    id: string;
    body: string
  }): Observable<StrictHttpResponse<EntityModelCompany>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.CreatePropertyReferenceMissionPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'text/uri-list');
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
   * update-company-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMissionPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMissionPut$UriList(params: {
    id: string;
    body: string
  }): Observable<EntityModelCompany> {

    return this.createPropertyReferenceMissionPut$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelCompany>) => r.body as EntityModelCompany)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceMissionDelete
   */
  static readonly DeletePropertyReferenceMissionDeletePath = '/missions/{id}/company';

  /**
   * delete-company-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceMissionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceMissionDelete$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.DeletePropertyReferenceMissionDeletePath, 'delete');
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
   * delete-company-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceMissionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceMissionDelete(params: {
    id: string;
  }): Observable<void> {

    return this.deletePropertyReferenceMissionDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createPropertyReferenceMissionPatch
   */
  static readonly CreatePropertyReferenceMissionPatchPath = '/missions/{id}/company';

  /**
   * patch-company-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMissionPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMissionPatch$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  }): Observable<StrictHttpResponse<EntityModelCompany>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.CreatePropertyReferenceMissionPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/x-spring-data-compact+json');
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
   * patch-company-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMissionPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMissionPatch$Json(params: {
    id: string;
    body: CollectionModelObject
  }): Observable<EntityModelCompany> {

    return this.createPropertyReferenceMissionPatch$Json$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelCompany>) => r.body as EntityModelCompany)
    );
  }

  /**
   * patch-company-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMissionPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMissionPatch$UriList$Response(params: {
    id: string;
    body: string
  }): Observable<StrictHttpResponse<EntityModelCompany>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.CreatePropertyReferenceMissionPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'text/uri-list');
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
   * patch-company-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMissionPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMissionPatch$UriList(params: {
    id: string;
    body: string
  }): Observable<EntityModelCompany> {

    return this.createPropertyReferenceMissionPatch$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelCompany>) => r.body as EntityModelCompany)
    );
  }

  /**
   * Path part for operation followPropertyReferenceMissionGet
   */
  static readonly FollowPropertyReferenceMissionGetPath = '/missions/{id}/company/{propertyId}';

  /**
   * get-company-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMissionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet$Response(params: {
    id: string;
    propertyId: string;
  }): Observable<StrictHttpResponse<EntityModelCompany>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.FollowPropertyReferenceMissionGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('propertyId', params.propertyId, {});
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
   * get-company-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMissionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet(params: {
    id: string;
    propertyId: string;
  }): Observable<EntityModelCompany> {

    return this.followPropertyReferenceMissionGet$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelCompany>) => r.body as EntityModelCompany)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceIdMissionDelete
   */
  static readonly DeletePropertyReferenceIdMissionDeletePath = '/missions/{id}/company/{propertyId}';

  /**
   * delete-company-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdMissionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdMissionDelete$Response(params: {
    id: string;
    propertyId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.DeletePropertyReferenceIdMissionDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('propertyId', params.propertyId, {});
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
   * delete-company-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdMissionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdMissionDelete(params: {
    id: string;
    propertyId: string;
  }): Observable<void> {

    return this.deletePropertyReferenceIdMissionDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation followPropertyReferenceMissionGet21
   */
  static readonly FollowPropertyReferenceMissionGet21Path = '/missions/{id}/facturation';

  /**
   * get-facturation-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMissionGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet21$Json$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<EntityModelFacturation>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.FollowPropertyReferenceMissionGet21Path, 'get');
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
   * get-facturation-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMissionGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet21$Json(params: {
    id: string;
  }): Observable<EntityModelFacturation> {

    return this.followPropertyReferenceMissionGet21$Json$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelFacturation>) => r.body as EntityModelFacturation)
    );
  }

  /**
   * get-facturation-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMissionGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet21$UriList$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.FollowPropertyReferenceMissionGet21Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * get-facturation-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMissionGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet21$UriList(params: {
    id: string;
  }): Observable<string> {

    return this.followPropertyReferenceMissionGet21$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation createPropertyReferenceMissionPut1
   */
  static readonly CreatePropertyReferenceMissionPut1Path = '/missions/{id}/facturation';

  /**
   * update-facturation-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMissionPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMissionPut1$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  }): Observable<StrictHttpResponse<EntityModelFacturation>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.CreatePropertyReferenceMissionPut1Path, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/x-spring-data-compact+json');
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
   * update-facturation-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMissionPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMissionPut1$Json(params: {
    id: string;
    body: CollectionModelObject
  }): Observable<EntityModelFacturation> {

    return this.createPropertyReferenceMissionPut1$Json$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelFacturation>) => r.body as EntityModelFacturation)
    );
  }

  /**
   * update-facturation-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMissionPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMissionPut1$UriList$Response(params: {
    id: string;
    body: string
  }): Observable<StrictHttpResponse<EntityModelFacturation>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.CreatePropertyReferenceMissionPut1Path, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'text/uri-list');
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
   * update-facturation-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMissionPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMissionPut1$UriList(params: {
    id: string;
    body: string
  }): Observable<EntityModelFacturation> {

    return this.createPropertyReferenceMissionPut1$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelFacturation>) => r.body as EntityModelFacturation)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceMissionDelete1
   */
  static readonly DeletePropertyReferenceMissionDelete1Path = '/missions/{id}/facturation';

  /**
   * delete-facturation-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceMissionDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceMissionDelete1$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.DeletePropertyReferenceMissionDelete1Path, 'delete');
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
   * delete-facturation-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceMissionDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceMissionDelete1(params: {
    id: string;
  }): Observable<void> {

    return this.deletePropertyReferenceMissionDelete1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation createPropertyReferenceMissionPatch1
   */
  static readonly CreatePropertyReferenceMissionPatch1Path = '/missions/{id}/facturation';

  /**
   * patch-facturation-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMissionPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMissionPatch1$Json$Response(params: {
    id: string;
    body: CollectionModelObject
  }): Observable<StrictHttpResponse<EntityModelFacturation>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.CreatePropertyReferenceMissionPatch1Path, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/x-spring-data-compact+json');
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
   * patch-facturation-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMissionPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceMissionPatch1$Json(params: {
    id: string;
    body: CollectionModelObject
  }): Observable<EntityModelFacturation> {

    return this.createPropertyReferenceMissionPatch1$Json$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelFacturation>) => r.body as EntityModelFacturation)
    );
  }

  /**
   * patch-facturation-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceMissionPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMissionPatch1$UriList$Response(params: {
    id: string;
    body: string
  }): Observable<StrictHttpResponse<EntityModelFacturation>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.CreatePropertyReferenceMissionPatch1Path, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'text/uri-list');
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
   * patch-facturation-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceMissionPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceMissionPatch1$UriList(params: {
    id: string;
    body: string
  }): Observable<EntityModelFacturation> {

    return this.createPropertyReferenceMissionPatch1$UriList$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelFacturation>) => r.body as EntityModelFacturation)
    );
  }

  /**
   * Path part for operation followPropertyReferenceMissionGet2
   */
  static readonly FollowPropertyReferenceMissionGet2Path = '/missions/{id}/facturation/{propertyId}';

  /**
   * get-facturation-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceMissionGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet2$Response(params: {
    id: string;
    propertyId: string;
  }): Observable<StrictHttpResponse<EntityModelFacturation>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.FollowPropertyReferenceMissionGet2Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('propertyId', params.propertyId, {});
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
   * get-facturation-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceMissionGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceMissionGet2(params: {
    id: string;
    propertyId: string;
  }): Observable<EntityModelFacturation> {

    return this.followPropertyReferenceMissionGet2$Response(params).pipe(
      map((r: StrictHttpResponse<EntityModelFacturation>) => r.body as EntityModelFacturation)
    );
  }

  /**
   * Path part for operation deletePropertyReferenceIdMissionDelete1
   */
  static readonly DeletePropertyReferenceIdMissionDelete1Path = '/missions/{id}/facturation/{propertyId}';

  /**
   * delete-facturation-by-mission-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdMissionDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdMissionDelete1$Response(params: {
    id: string;
    propertyId: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MissionsService.DeletePropertyReferenceIdMissionDelete1Path, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.path('propertyId', params.propertyId, {});
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
   * delete-facturation-by-mission-Id
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdMissionDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdMissionDelete1(params: {
    id: string;
    propertyId: string;
  }): Observable<void> {

    return this.deletePropertyReferenceIdMissionDelete1$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

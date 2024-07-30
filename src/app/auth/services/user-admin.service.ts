/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

 
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateUserRequest } from '../models/create-user-request';
import { ListResponseUserView } from '../models/list-response-user-view';
import { SearchRequestSearchUsersQuery } from '../models/search-request-search-users-query';
import { UpdateUserRequest } from '../models/update-user-request';
import { UserView } from '../models/user-view';
import { BaseService } from 'src/app/api/base-service';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { StrictHttpResponse } from 'src/app/api/strict-http-response';

@Injectable({
  providedIn: 'root',
})
export class UserAdminService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation get
   */
  static readonly GetPath = '/auth/api/admin/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get()` instead.
   *
   * This method doesn't expect any request body.
   */
  get$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<UserView>> {

    const rb = new RequestBuilder(this.rootUrl, UserAdminService.GetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserView>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `get$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  get(params: {
    id: number;
  }): Observable<UserView> {

    return this.get$Response(params).pipe(
      map((r: StrictHttpResponse<UserView>) => r.body as UserView)
    );
  }

  /**
   * Path part for operation update
   */
  static readonly UpdatePath = '/auth/api/admin/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update$Response(params: {
    id: number;
    body: UpdateUserRequest
  }): Observable<StrictHttpResponse<UserView>> {

    const rb = new RequestBuilder(this.rootUrl, UserAdminService.UpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserView>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `update$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update(params: {
    id: number;
    body: UpdateUserRequest
  }): Observable<UserView> {

    return this.update$Response(params).pipe(
      map((r: StrictHttpResponse<UserView>) => r.body as UserView)
    );
  }

  /**
   * Path part for operation delete
   */
  static readonly DeletePath = '/auth/api/admin/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<UserView>> {

    const rb = new RequestBuilder(this.rootUrl, UserAdminService.DeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserView>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    id: number;
  }): Observable<UserView> {

    return this.delete$Response(params).pipe(
      map((r: StrictHttpResponse<UserView>) => r.body as UserView)
    );
  }

  /**
   * Path part for operation create
   */
  static readonly CreatePath = '/auth/api/admin/user';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    body: CreateUserRequest
  }): Observable<StrictHttpResponse<UserView>> {

    const rb = new RequestBuilder(this.rootUrl, UserAdminService.CreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserView>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {
    body: CreateUserRequest
  }): Observable<UserView> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<UserView>) => r.body as UserView)
    );
  }

  /**
   * Path part for operation search
   */
  static readonly SearchPath = '/auth/api/admin/user/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `search()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  search$Response(params: {
    body: SearchRequestSearchUsersQuery
  }): Observable<StrictHttpResponse<ListResponseUserView>> {

    const rb = new RequestBuilder(this.rootUrl, UserAdminService.SearchPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ListResponseUserView>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `search$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  search(params: {
    body: SearchRequestSearchUsersQuery
  }): Observable<ListResponseUserView> {

    return this.search$Response(params).pipe(
      map((r: StrictHttpResponse<ListResponseUserView>) => r.body as ListResponseUserView)
    );
  }

}

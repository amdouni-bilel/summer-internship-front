import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {RequestBuilder} from '../request-builder';
import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import {AuthRequest} from '../models/auth-request';
import {UserView} from '../models/user-view';
import {ApiConfiguration} from 'src/app/api/api-configuration';
import {BaseService} from 'src/app/api/base-service';
import {StrictHttpResponse} from 'src/app/api/strict-http-response';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {
  http: any;

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  static readonly RegisterPath = '/api/public/register';
  static readonly LoginPath = '/api/public/login';

  login$Response(params: {
    body: AuthRequest
  }): Observable<StrictHttpResponse<UserView>> {

    // const rb = new RequestBuilder(environment.apiUrlProcess+"/auth", AuthenticationService.LoginPath, 'post');
    const rb = new RequestBuilder(environment.apiLocoalAuth, AuthenticationService.LoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserView>;
      })
    );
  }

  register$Response(params: {
    body: AuthRequest
  }): Observable<StrictHttpResponse<UserView>> {

    // const rb = new RequestBuilder(environment.apiUrlProcess+"/auth", AuthenticationService.LoginPath, 'post');
    const rb = new RequestBuilder(environment.apiLocoalAuth, AuthenticationService.RegisterPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserView>;
      })
    );
  }

  login(params: {
    body: AuthRequest
  }): Observable<UserView> {

    return this.login$Response(params).pipe(
      map((r: StrictHttpResponse<UserView>) => r.body as UserView)
    );
  }

  register(params: {
    body: AuthRequest
  }): Observable<UserView> {

    return this.register$Response(params).pipe(
      map((r: StrictHttpResponse<UserView>) => r.body as UserView)
    );
  }



}

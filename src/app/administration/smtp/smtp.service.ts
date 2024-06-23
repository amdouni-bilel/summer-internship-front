import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { BaseService } from 'src/app/api/base-service';
import { StrictHttpResponse } from 'src/app/api/strict-http-response';
import {
  CreateUserRequest,
  UserView,
  AuthRequest,
} from 'src/app/auth/models-auth';
import { RequestBuilder } from 'src/app/auth/request-builder';
import { GenericService } from 'src/app/generic.services';

@Injectable({
  providedIn: 'root',
})
export class SmtpService  {

  private apiUrl = this.apiconf.MAIL_MANAGER_URL;

  constructor(
    private apiconf : ApiConfiguration
    ,
    private http: HttpClient) {
  }

  public saveSmtp(coordonee: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'smtp', coordonee);
  }

  public getAllUser() {
    return this.http.get<any>(this.apiUrl+'smtp');
  }
}
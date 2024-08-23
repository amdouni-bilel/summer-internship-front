import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { ApiConfiguration } from "src/app/api/api-configuration";
import { BaseService } from "src/app/api/base-service";
import { StrictHttpResponse } from "src/app/api/strict-http-response";
import { CreateUserRequest, UserView, AuthRequest } from "src/app/auth/models-auth";
import { RequestBuilder } from "src/app/auth/request-builder";
import { GenericService } from "src/app/generic.services";


@Injectable()
export class VarsmanagService{

  private apiUrl = this.apiconf.MAIL_MANAGER_URL;

  constructor(private apiconf : ApiConfiguration
    ,private http: HttpClient) {
  }

 

  savevars(coordonee: any): Observable<string> {
    return this.http.post(this.apiUrl+"variables/add", coordonee, { responseType: 'text' });
  }
  getVariablesByUser(user: string): Observable<any> {
    const url = this.apiUrl+`variables/byUser/${user}`;
    return this.http.get(url);
  }

  deleteVariable(id: string): Observable<string>{
    const url = `${this.apiUrl}variables/${id}`;
    return this.http.delete(url,{ responseType: 'text' });
  }




}
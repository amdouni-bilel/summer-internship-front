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
export class MailmanagerService  {

  private apiUrl = this.apiconf.MAIL_MANAGER_URL;

  constructor(private apiconf : ApiConfiguration
    ,
    private http: HttpClient) {
  }

  getallgroups() {
    return this.http.get<any>(this.apiUrl+'groupe');
  }

  public saveGroupe(coordonee: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'groupe', coordonee);
  }

  saveByEmail(coordonee: any): Observable<any> {
    return this.http.put<any>(this.apiUrl+'smtp/assign', coordonee);
  }
  public deleteGroup(id: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl+'groupe/'+id);
  }
  public updateGroup(group: any): Observable<any> {
    return this.http.put<any>(this.apiUrl+'groupe', group);
  }
  public getAllEmails(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'smtp/emails');
  }
  public removeUserFromGroup(email: string, groupId: string):Observable<any> {
    return this.http.delete<any>(this.apiUrl+'smtp/'+email+'/'+groupId);
  } 
}
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
 

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  private apiUrl = this.apiconf.MAIL_MANAGER_URL;


  constructor(    private apiconf : ApiConfiguration,
    private http: HttpClient) {
  }



  public saveSmtp(coordonee:any): Observable<any>
  {


      return this.http.put<any>(this.apiUrl+'smtp',coordonee);
    return null;
  }
  public addModel(coordonee:any): Observable<any>
  {
      return this.http.post<any>(this.apiUrl+"model",coordonee);

  }
  public getModel(): Observable<any>
  {
      return this.http.get<any>(this.apiUrl+"model");

  }
  public deleteModel(id:any): Observable<any>
  {
      return this.http.delete<any>(this.apiUrl+"model/"+id);
  }
  public getModelById(id:any): Observable<any>
  {
      return this.http.get<any>(this.apiUrl+"model/"+id);

  }
  public updateModel(model:any,id:any): Observable<any>
  {
      return this.http.put<any>(this.apiUrl+"model/"+id,model);

  }

  getVariablesByUser(user: string): Observable<any> {
    const url = this.apiUrl+`variables/byUser/${user}`;
    return this.http.get(url);
  }
 



}
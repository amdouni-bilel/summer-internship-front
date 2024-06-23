import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiConfiguration } from 'src/app/api/api-configuration';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiUrl = this.apiconf.MAIL_MANAGER_URL+'contact'; 

  constructor(private http: HttpClient,private apiconf : ApiConfiguration) { }

  getallcontacts(){
    return this.http.get<any>(this.apiUrl);
  }


  public savecontact(coordonee:any): Observable<any>
  {
   
      return this.http.post<any>(this.apiUrl,coordonee);
  }

  public updatecontact(coordonee:any): Observable<any>
  {
   
      return this.http.put<any>(this.apiUrl,coordonee);
  }

  getcontact(id:any){
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  deletecontact(id:any){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
 
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { GenericService } from 'src/app/generic.services';

@Injectable({
  providedIn: 'root',
})


export class OrganigrammeService {
  private stuctureURL = this.apiconf.ORGANIGRAMME_STRUCTURES_URL; 
  private personnelURL = this.apiconf.ORGANIGRAMME_PERSONNEL_URL; 


  constructor(private http: HttpClient
    ,private apiconf : ApiConfiguration
    ) {
  }

  public getAllOrganigrammes(): Observable<any> {
    return this.http.get<any>(this.stuctureURL);
  }
  public createOrganigramme(org: any): Observable<any>{
    return this.http.post<any>(this.stuctureURL, org);
  }
  public DeleteOrganigramme(id: any): Observable<any>{
    return this.http.delete<any>(this.stuctureURL+id);
  }




  public updatePersonnel(id: any, perso:any): Observable<any> {
    return this.http.put<any>(`${this.personnelURL}${id}`,perso);
  } 

  public addPersonnel(idParent: any, personnel): Observable<any> {
    return this.http.post<any>(`${this.personnelURL}add-subordinate/${idParent}`, personnel);
  }}
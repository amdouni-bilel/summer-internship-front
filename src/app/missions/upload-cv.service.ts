import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";
declare var FormData: any;
declare var File: any;

@Injectable({
  providedIn: 'root'
})
export class UploadCvService {
  cvs: any;

  constructor(private http: HttpClient) { }
  // @ts-ignore
  uploadCV(file: File, s: string, missionId: number, userId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('s', s);
    formData.append('missionId', missionId.toString());
    formData.append('userId', userId.toString());

    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    headers = headers.set('enctype', 'multipart/form-data');

    return this.http.post<any>('http://localhost:8085/aws/upload', formData, { headers });
  }


  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  getListCvs(): Observable<any> {
    if (this.cvs) {
      return of(this.cvs);
    } else {
      const headers = this.getHeaders();
      return this.http.get<any>(`${environment.s3ApiUrl}/list-cv`, { headers }).pipe(
        tap(missions => this.cvs = missions)
      );
    }
  }


}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {mergeMap, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
declare var FormData: any;
declare var File: any;

@Injectable({
  providedIn: 'root'
})
export class UploadCvService {

  constructor(private http: HttpClient) { }
  private apiUrlUpload = `${environment.s3ApiUrl}/aws/upload`;
  private apiUrlDetailsCv = `${environment.missionApiUrl}/upload/detailsCv`;

  uploadAndSaveData(file: File, idUser: number ,  idMission: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(this.apiUrlUpload, formData).pipe(
      mergeMap((response) => {
        const url = response.url;
        const data = {
          enabled: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          createdBy: 0,
          updatedBy: 0,
          idCandidate: idUser,
          url: url,
          mission: {
            id: idMission
          }
        };
        return this.http.post<any>(this.apiUrlDetailsCv, data);
      })
    );
  }

}


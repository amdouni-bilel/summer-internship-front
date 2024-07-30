import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfiguration } from 'src/app/api/api-configuration';

@Injectable({
  providedIn: 'root'
})
export class GestionFichierService {



  constructor(
    private http: HttpClient    ,
    private apiconf : ApiConfiguration
    ) { }

  //filemanager


private baseUrl = this.apiconf.AWS_URL; ; // Changez l'URL en fonction de votre configuration


uploadFile(formData: FormData): Observable<string> {
  return this.http.post<string>(`${this.baseUrl}/upload`, formData);
}

deleteObject(objectKey: string): Observable<string> {
  return this.http.delete<string>(`${this.baseUrl}/delete?objectKey=${objectKey}`);
}

getAllS3Objects(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/objects`);
}

getObjectStructure(): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/objects-structure`);
}

copyOrMoveFile(sourceKey: string, destinationKey: string, action: string): Observable<string> {
  return this.http.post<string>(`${this.baseUrl}/copy-move-file`, { sourceKey, destinationKey, action });
}

downloadAndZipFiles(folderPrefix: string): Observable<Blob> {
  return this.http.get(`${this.baseUrl}/download-and-zip?folderPrefix=${folderPrefix}`, { responseType: 'blob' });
}

getAllBuckets(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/buckets`);
}


}

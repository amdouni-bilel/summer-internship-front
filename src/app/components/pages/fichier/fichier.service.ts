import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyARecord } from 'dns';
import { Observable } from 'rxjs';
import { ApiConfiguration } from 'src/app/api/api-configuration';

@Injectable({
  providedIn: 'root'
})
export class FichierService {

  constructor(private apiconf : ApiConfiguration,
    private http: HttpClient) { }

  //filemanager
  

private baseUrl = this.apiconf.AWS_URL; // Changez l'URL en fonction de votre configuration
private baseUrl2= this.apiconf.AWS_URL_Boite_Mail;

GetByMailSenderAndMailCheckedAndMailShared(email: any,ch:any,sh:any): Observable<any> {
  return this.http.get(`${this.baseUrl2}/findByMailSenderAndMailCheckedAndMailShared/${email}/${ch}/${sh}`);
}
GetByMailReceiverAndMailCheckedAndMailShared(email: any,ch:any,sh:any): Observable<any> {
  return this.http.get(`${this.baseUrl2}/findByMailReceiverAndMailCheckedAndMailShared/${email}/${ch}/${sh}`);
}
Shared(id:any,a:any): Observable<any> {
  return this.http.put(`${this.baseUrl2}/shared/${id}`,a);
}

uploadFileOrFolder(parentFolder: string, isFile: boolean, file?: File): Observable<any> {
  const formData = new FormData();
  formData.append('parentFolder', parentFolder);
  if(isFile!=null && isFile!=undefined)
  formData.append('isFile', isFile.toString());
  if (file) {
    formData.append('file', file);
  }

  return this.http.post<any>(`${this.baseUrl}/upload`, formData);
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
getObjectStructureInvitedShared(): Observable<any> {
  return this.http.get<any>(`${this.baseUrl2}/invited-shared-objects`);
}

copyOrMoveFile(sourceKey: string, destinationKey: string, action: string): Observable<string> {
  const formData = new FormData();
  formData.append('sourceKey', sourceKey);
  formData.append('destinationKey', destinationKey);
    formData.append('action', action);

  return this.http.post<string>(`${this.baseUrl}/copy-move-file`, formData);
}

downloadAndZipFiles(folderPrefix: string): Observable<HttpResponse<Blob>> {
  const url = `${this.baseUrl}/download-and-zip?folderPrefix=${folderPrefix}`;

  return this.http.get(url, {
    responseType: 'blob',
    observe: 'response'
  });
}

getAllBuckets(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/buckets`);
}


shareFile(form:any){
 /* const formData = new FormData();
  formData.append('mailSender', from)
  formData.append('mailReceiver', to)
  formData.append('fileKey', prefix)
console.log("aaa",formData)*/

  return this.http.post(`${this.baseUrl2}/send-mail`,form)
}
delete(id:any){
return this.http.delete(`${this.baseUrl2}/delete/`+id)
}

}

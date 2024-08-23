import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfiguration } from '../api/api-configuration';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {

 
  private apiUrl =this.apiconf.OCR_SaveUrl+'/notesfrais';
 

  constructor(private http:HttpClient,private apiconf : ApiConfiguration) {
    
   }

  addNotesFrais(notesFrais: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' 
    });

    return this.http.post<string>(this.apiUrl+"/add", notesFrais, { headers });
  }
  
  
  deleteNotesFrais(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllNotesFrais(): Observable<NotesFrais[]> {
    return this.http.get<NotesFrais[]>(this.apiUrl);
  }
}


export interface NotesFrais {
  id: string;
  name: string;
}
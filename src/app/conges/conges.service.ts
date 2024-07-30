import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conges } from 'src/app/auth/models/conges';


@Injectable({
  providedIn: 'root'
})
export class CongesService {
  private apiUrl = `http://localhost:9001/api/conges`;

  constructor(private http: HttpClient) {}

  getConges(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getCongeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createConge(conge: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, conge);
  }

  updateConge(id: number, conge: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, conge);
  }

  deleteConge(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  confirmConge(id: number): Observable<Conges> {
    return this.http.put<Conges>(`${this.apiUrl}/${id}/confirm`, null);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conges } from 'src/app/auth/models/conges';

@Injectable({
  providedIn: 'root'
})
export class MyCongesService {
  private baseUrl = 'http://localhost:9001/api/conges';

  constructor(private http: HttpClient) {}

  getCongesByUser(userId: number): Observable<Conges[]> {
    return this.http.get<Conges[]>(`${this.baseUrl}/user/${userId}`);
  }

  getCongeById(congeId: number): Observable<Conges> {
    return this.http.get<Conges>(`${this.baseUrl}/${congeId}`);
  }

  updateConge(congeId: number, congeData: Partial<Conges>): Observable<Conges> {
    return this.http.put<Conges>(`${this.baseUrl}/${congeId}`, congeData);
  }

  deleteConge(congeId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${congeId}`);
  }

  confirmConge(congeId: number): Observable<Conges> {
    return this.http.put<Conges>(`${this.baseUrl}/${congeId}/confirm`, {});
  }

  createConges(congeData: Partial<Conges>): Observable<Conges> {
    return this.http.post<Conges>(this.baseUrl, congeData);
  }
  
}

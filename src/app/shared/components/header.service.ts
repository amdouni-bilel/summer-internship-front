import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private baseUrl = environment.missionApiUrl;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  private setHeaders(): HttpHeaders {
    const token = localStorage.getItem('auth_token');
    console.log('Retrieved token in HeaderService:', token);

    if (!token) {
      this.toastr.error("Pas de token disponible.", "Erreur");
      throw new Error("Pas de token disponible.");
    }

    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  addNotification(notification: any): Observable<any> {
    const headers = this.setHeaders();
    return this.http.post(`${this.baseUrl}/add`, notification, { headers });
  }

  getAllNotifications(): Observable<any[]> {
    const headers = this.setHeaders();
    return this.http.get<any[]>(`${this.baseUrl}/all`, { headers });
  }

  getNotifications(recipientUserId: number): Observable<any[]> {
    const headers = this.setHeaders();
    const url = `${this.baseUrl}/notifications/users/${recipientUserId}`;
    return this.http.get<any[]>(url, { headers });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { catchError } from "rxjs/operators";
import {ConfiguredMonth} from "./fakeDataGetConfiguredMonth";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CraService {

  private apiUrl = environment.missionApiUrl;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  private addAuthorizationHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    if (token) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      });
    } else {
      console.error('Jetons d\'accès non disponible');
      return new HttpHeaders();
    }
  }

  private handleError(error: any): Observable<any> {
    console.error('Une erreur s\'est produite :', error);
    this.toastr.error("Une erreur s'est produite.", "Erreur");
    return of(null);
  }

  private postWithAuthorization(url: string, body: any): Observable<any> {
    const headers = this.addAuthorizationHeaders();
    return this.http.post(url, body, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getListCRA(): Observable<any> {
    const url = `${this.apiUrl}/activities/cra`;
    return this.http.get<any>(url, { headers: this.addAuthorizationHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  updateStatusToPending(activityId: number): Observable<any> {
    const url = `${this.apiUrl}/update-status-to-pending/${activityId}`;
    return this.http.put(url, null, { headers: this.addAuthorizationHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  updateStatusToValid(activityId: number): Observable<any> {
    const url = `${this.apiUrl}/update-status-to-valid/${activityId}`;
    return this.http.put(url, null, { headers: this.addAuthorizationHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  updateStatusPendingToValid(activityId: number): Observable<any> {
    const url = `${this.apiUrl}/update-status-pending-to-valid/${activityId}`;
    return this.http.put(url, null, { headers: this.addAuthorizationHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  sendNotification(senderUserId: number, recipientUserId: number, message: string): Observable<any> {
    const url = `${this.apiUrl}/notifications/send`;
    return this.postWithAuthorization(url, { senderUserId, recipientUserId, message });
  }

  sendRefusCraNotification(senderUserId: number, recipientUserId: number, message: string): Observable<any> {
    const url = `${this.apiUrl}/send-refus-cra-notification`;
    return this.postWithAuthorization(url, { senderUserId, recipientUserId, message });
  }

  configuredMonth1(): Observable<any> {
    return of(ConfiguredMonth);
  }

  configuredMonth(): Observable<any> {
    const url = `${this.apiUrl}/activities/get-configured-month`;
    return this.http.get<any>(url, { headers: this.addAuthorizationHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  download(cra): Observable<any> {
    return this.http.post(this.apiUrl + '/createFacturation', cra, {
      responseType: 'blob'
    }).pipe(
      catchError(this.handleError)
    );
  }

  ajouterActivites(valuesWithDates: any[]): Observable<any> {
    const url = `${this.apiUrl}/activities`;
    return this.postWithAuthorization(url, valuesWithDates);
  }

  getActivites(): Observable<any> {
    const url = `${this.apiUrl}/activities`;
    return this.http.get<any>(url, { headers: this.addAuthorizationHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  getActivitiesByUserId(userId: number): Observable<any[]> {
    const url = `${this.apiUrl}/activities/users/${userId}`;
    return this.http.get<any[]>(url, { headers: this.addAuthorizationHeaders() }).pipe(
      catchError(this.handleError)
    );
  }
}

import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private apiUrl = environment.missionApiUrl;

  constructor(private http: HttpClient, private toastr: ToastrService) {
  }

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


  getListCompanies(): Observable<any> {
    const url = `${this.apiUrl}/companies`;
    return this.http.get<any>(url, {headers: this.addAuthorizationHeaders()}).pipe(
      catchError(this.handleError)
    );
  }
}

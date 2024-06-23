import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/dist/types";
import {environment} from "../../../environments/environment";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class InactiveDaysService {
  constructor(private http: HttpClient , private toastr: ToastrService) {}



  getInactiveDays() {
    const token = localStorage.getItem('token'); // Récupérez le token depuis le local storage

    if (!token) {
      // Affichez un message Toast en cas d'absence de token
      this.toastr.error("Pas de token disponible.", "Erreur");

      // Vous pouvez également renvoyer une erreur ou prendre d'autres mesures si nécessaire
      return;
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${environment.apiLocoal}/api/inactivedays/all-inactivedays` , { headers });
  }

  addInactiveday(token: string, inactiveday: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${environment.apiLocoal}/api/inactivedays/add-inactiveday`, inactiveday, { headers });
  }
}

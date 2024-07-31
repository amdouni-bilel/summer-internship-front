import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiConfiguration} from 'src/app/api/api-configuration';
import {Contacts} from "./Contacts";
import {catchError, map} from "rxjs/operators"
import {HttpHeaders} from "@angular/common/http"
import {throwError} from "rxjs"
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: any[] = [];

  private apiUrl = this.apiconf.MAIL_MANAGER_URL + 'contact';
  private baseUrl = 'http://localhost:9001/api/contacts'; // URL de base de votre API Spring Boot

  constructor(private http: HttpClient, private apiconf: ApiConfiguration) {
  }

  getAllContacts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  saveContactWithImage(contact: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('contact', JSON.stringify(contact));
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}`, formData);
  }

  updateContactWithImage(id: number, contact: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('contact', JSON.stringify(contact));
    formData.append('file', file);

    return this.http.put(`${this.baseUrl}/update-with-image/${id}`, formData);
  }
  savecontact(contact: Contacts): Observable<any> {
    return this.http.post(`${this.baseUrl}`, contact); // Utilisez /add pour l'ajout d'un contact
  }

  updateContact(id: number, coordonnee: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.put<any>(url, coordonnee, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).pipe(
      catchError(error => {
        console.error('Erreur lors de la mise à jour du contact :', error);
        // Vous pouvez également retourner une Observable d'erreur personnalisée si nécessaire
        return throwError(error); // Utilisez throwError de rxjs pour propager l'erreur
      })
    );
  }
getcontact(id: any) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  deletecontact(id: any) {
    const url = `${this.baseUrl}/${id}`; // URL backend pour la suppression
    return this.http.delete<any>(url);
  }

  searchContacts(query: string): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(`${this.baseUrl}/search`, {params: {query}});
  }

  uploadImage(contactId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.baseUrl}/upload/${contactId}`, formData);
  }
  uploadImage2(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<{ imageUrl: string }>(`${this.baseUrl}/upload`, formData).pipe(
      map(response => response.imageUrl)
    );
  }
  uploadFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    return this.http.post(this.baseUrl, formData, { headers });
  }
// Validateur pour vérifier que le champ ne contient que des lettres
  checkPhoneExists(phone: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/check-phone`, {params: {phone}});
  }
}



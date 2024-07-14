import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiConfiguration } from 'src/app/api/api-configuration';
import {Contacts} from "./Contacts";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: any[] = [];

  private apiUrl = this.apiconf.MAIL_MANAGER_URL+'contact';
  private baseUrl = 'http://localhost:8080/api/contacts'; // URL de base de votre API Spring Boot

  constructor(private http: HttpClient,private apiconf : ApiConfiguration) { }

  /*getallcontacts(){
    return this.http.get<any>(this.apiUrl);
  }*/
  getAllContacts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/show`);
  }


  /*public savecontact(coordonee:any): Observable<any>
  {

      return this.http.post<any>(this.apiUrl,coordonee);
  }*/

  savecontact(contact: Contacts): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, contact); // Utilisez /add pour l'ajout d'un contact
  }S
  updateContact(id: number, coordonnee: any): Observable<any> {
    const url = `${this.baseUrl}/modif/${coordonnee.id}`; // Construire l'URL avec l'ID du contact
    return this.http.put<any>(url, coordonnee);
  }
  getcontact(id:any){
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  deletecontact(id:any){
    const url = `${this.baseUrl}/del/${id}`; // URL backend pour la suppression
    return this.http.delete<any>(url);
  }

}



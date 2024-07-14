import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserView} from "../../auth/models/user-view";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";import {environment} from "../../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string;
  usersWithRoles: any ;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.authApiUrl + '/api/admin/user/list';
  }

  getUsersWithRoles(): Observable<any[]> {
    if (this.usersWithRoles) {
      return of(this.usersWithRoles);
    } else {
      return this.http.get<any[]>(environment.authApiUrl + '/api/admin/user/list-with-roles').pipe(
        tap(users => this.usersWithRoles = users)
      );
    }
  }

  getUsersWithRolesPaginated(offset: number, pageSize: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.authApiUrl}/api/admin/user/list-with-roles?offset=${offset}&pageSize=${pageSize}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserView } from '../../auth/models/user-view';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:9001/api/users';
  private apiUrl = 'http://localhost:9001/api/mission-user';

  constructor(private http: HttpClient) { }

  getUsersWithRoles(): Observable<UserView[]> {
    return this.http.get<UserView[]>(`${this.baseUrl}`);
  }
  getUsers(): Observable<UserView[]> {
    return this.http.get<UserView[]>(this.baseUrl);
  }
  getUserById(id: number): Observable<UserView> {
    return this.http.get<UserView>(`${this.baseUrl}/${id}`);
  }

  createUser(user: UserView): Observable<UserView> {
    return this.http.post<UserView>(`${this.baseUrl}`, user);
  }

  updateUser(id: number, user: UserView): Observable<UserView> {
    return this.http.put<UserView>(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  assignMissionToUser(userId: number, missionId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/assign`, null, {
      params: {
        userId: userId.toString(),
        missionId: missionId.toString()
      }
    });
  }

  getMissionsByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
}

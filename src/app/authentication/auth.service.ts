import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface LoginResponse {
  token: string;
  fullName: string;
  username: string;
  roles: string[];
  id: number;
  isConnected: boolean; // Add this field

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:9001/api/auth';
  constructor(private http: HttpClient) { }

  sendOtp(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-otp`, { email }).pipe(
      catchError(this.handleError)
    );
  }

  verifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-otp`, { email, otp }).pipe(
      catchError(this.handleError)
    );
  }

  resetPassword(email: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, { email, newPassword }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error occurred:', error);
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\nDetails: ${error.error}`;
    }
    return throwError(errorMessage);
  }

  login(username: string, password: string): Observable<LoginResponse> {
    const body = { username, password };
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, body).pipe(
      map((response: LoginResponse) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response));
        }
        return response;
      })
    );
  }

  register(username: string, fullName: string, password: string): Observable<any> {
    const body = { username, fullName, password };
    return this.http.post<any>(`${this.apiUrl}/signup`, body).pipe(
      catchError(this.handleError)
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getCurrentUser(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token available');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}/user`, { headers }).pipe(
      map(response => response)  // Ensure the response structure matches
    );
  }

  checkUsernameExists(username: string): Observable<{ exists: boolean }> {
    return this.http.get<{ exists: boolean }>(`${this.apiUrl}/usernameExists?username=${username}`);
  }


  getCurrentUserRole(): string {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('Current user:', user);
    return user && user.roles ? user.roles : null;
  }
  getCurrentUserFromLocalStorage(): LoginResponse {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getUserConnectionStatus(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.isConnected;
  }

}

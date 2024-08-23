import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}

  handleData(token: string): void {
    console.log('Storing token:', token);
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isValidToken(): boolean {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      return !!payload;
    }
    return false;
  }

  payload(token: string): any {
    const jwtPayload = token.split('.')[1];
    return JSON.parse(atob(jwtPayload));
  }

  isLoggedIn(): boolean {
    return this.isValidToken();
  }

  removeToken(): void {
    localStorage.removeItem('auth_token');
  }

  removeUser(): void {
    localStorage.removeItem('user');
  }
}

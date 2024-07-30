import { Injectable } from '@angular/core';
import {TokenService} from "./token.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private userState = new BehaviorSubject<boolean>(this.tokenService.isLoggedIn()!);
  userAuthState = this.userState.asObservable();

  constructor(public tokenService: TokenService) {}

  setAuthState(value: boolean) {
    this.userState.next(value);
  }

  getCurrentUser()/*: User */{
    /* const user: User = new User();
     user.id = parseInt(localStorage.getItem('id'));
     user.name = localStorage.getItem('name');
     user.email = localStorage.getItem('email');
     return user;*/
  }
}

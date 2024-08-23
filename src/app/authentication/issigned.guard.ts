import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Session } from "protractor";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {

    constructor(private jwtHelper: JwtHelperService,private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let token = localStorage.getItem('token');
        return token?!this.isNotValid(token):false;

    }

    private isNotValid(token: string)
    {
        let isExpired= this.jwtHelper.isTokenExpired(token);
        if(isExpired)
        {
            this.router.navigate(["auth/login"]);
            return true;
        }
        return false;
    }

}
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.authService.isLoggedIn();
    const userRole = this.authService.getCurrentUserRole();

    console.log('Is logged in:', isLoggedIn); // Debugging
    console.log('User role:', userRole); // Debugging
    console.log('Required role:', route.data.role); // Debugging

    if (isLoggedIn) {
      const requiredRole = route.data.role;
      if (requiredRole && userRole !== requiredRole) {
        this.router.navigate(['users/not-authorized']); // Redirect to Not Authorized page
        return false;
      }
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}

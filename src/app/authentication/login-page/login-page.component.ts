import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginResponse } from '../auth.service'; // Import the interface here
import Swal from 'sweetalert2';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  hidePassword: boolean = true;
  usernameNotFound: boolean = false;  

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  submit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.controls.username.value;
      const password = this.loginForm.controls.password.value;

      this.authService.login(username, password).subscribe(
        (resp: LoginResponse) => { // Use the interface here
          console.log('Login response:', resp);
          if (resp.token && resp.token.split('.').length === 3) {
            this.tokenService.handleData(resp.token); 
            localStorage.setItem('user', JSON.stringify(resp));

            const userRole = resp.roles && resp.roles.includes('ADMIN') ? 'ADMIN' : 'USER';
            const targetRoute = userRole === 'ADMIN' ? '/dashboard' : '/dashboard';

            this.router.navigate([targetRoute]);
            Swal.fire('Welcome', `${userRole} ${resp.fullName}`, 'success');
          } else {
            console.error('Invalid token format');
          }
        },
        error => {
          Swal.fire('Error', 'Login failed. Please check your credentials.', 'error');
        }
      );
    }
  }

  navigateToForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
  navigateToRegister() {
    this.router.navigate(['auth/register']);
  }
}

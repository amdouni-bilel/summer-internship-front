import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  email: string;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required]],  
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }

  passwordMatchValidator(formGroup: FormGroup): void {
    const password = formGroup.get('password').value;
    const confirmPassword = formGroup.get('confirmPassword').value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword').setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword').setErrors(null);
    }
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      const newPassword = this.resetPasswordForm.controls['password'].value;

      this.authService.resetPassword(this.email, newPassword).subscribe(
        response => {
          Swal.fire('Success', 'Password reset successfully. Redirecting to login page.', 'success').then(() => {
            this.router.navigate(['/auth/login']);
          });
        },
        error => {
          Swal.fire('Error', 'Failed to reset password. Please try again.', 'error');
        }
      );
    }
  }
}

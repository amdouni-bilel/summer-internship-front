import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.controls['email'].value;

      this.authService.sendOtp(email).subscribe(
        response => {
          Swal.fire({
            title: 'Success',
            text: 'OTP sent successfully. Please check your email.',
            icon: 'success'
          }).then(() => {
            this.promptForOtp(email);
          });
        },
        error => {
          if (error.status === 404) {
            Swal.fire('Error', 'No email found', 'error');
          } else {
            Swal.fire('Error', 'Internal server error. Please try again.', 'error');
          }
        }
      );
    }
  }

  promptForOtp(email: string): void {
    Swal.fire({
      title: 'Enter OTP',
      input: 'text',
      inputLabel: 'OTP',
      inputPlaceholder: 'Enter the OTP you received',
      showCancelButton: true,
      confirmButtonText: 'Verify',
      showLoaderOnConfirm: true,
      preConfirm: (otp) => {
        return this.authService.verifyOtp(email, otp).toPromise().then(
          response => {
            if (response.message === 'OTP verified') {
              this.router.navigate(['/auth/reset-password'], { queryParams: { email: email } });
              Swal.fire('Success', 'OTP verified. Redirecting to reset password page.', 'success');
            } else {
              Swal.showValidationMessage('Invalid OTP. Please try again.');
            }
          },
          error => {
            Swal.showValidationMessage('Invalid OTP. Please try again.');
          }
        );
      }
    });
  }
}

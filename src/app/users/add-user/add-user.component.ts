import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserView } from '../../auth/models/user-view';

export function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  };
}
export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailRegex.test(control.value);
    return valid ? null : { 'invalidEmail': true };
  };
}


export function matchPassword(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const formGroupControls = formGroup as FormGroup;
    const control = formGroupControls.controls[controlName];
    const matchingControl = formGroupControls.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mismatch) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mismatch: true });
    } else {
      matchingControl.setErrors(null);
    }
    
    return null;
  };
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  userForm: FormGroup;
  submitted = false;
  showPassword = false;
  showConfirmPassword = false;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, noWhitespaceValidator(),emailValidator()]],
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), noWhitespaceValidator()]],
      password: ['', [Validators.required, noWhitespaceValidator()]],
      confirmPassword: ['', [Validators.required, noWhitespaceValidator()]],
      roles: ['', Validators.required]
    }, {
      validator: matchPassword('password', 'confirmPassword')
    });
  }

  addUser() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    const newUser: UserView = {
      id: null,
      username: this.userForm.value.username,
      fullName: this.userForm.value.fullName,
      password: this.userForm.value.password,
      roles: this.userForm.value.roles
    };

    this.userService.createUser(newUser).subscribe(user => {
      this.toastr.success('User added successfully!');
      this.resetForm();
      this.router.navigate(['/users/list-users']);
    }, error => {
      this.toastr.error('Failed to add user');
    });
  }

  resetForm() {
    this.userForm.reset();
    this.submitted = false;
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility()
  {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  navigateToListUser() {
    this.router.navigate(['/users/list-users']);
  }
}
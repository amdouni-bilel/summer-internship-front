import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { UserView } from '../../auth/models/user-view';
import { ToastrService } from 'ngx-toastr';

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
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss']
})
export class ModifyUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UsersService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, noWhitespaceValidator(), emailValidator()]],
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), noWhitespaceValidator()]],
      password: ['', [Validators.required, noWhitespaceValidator()]],
      confirmPassword: ['', [Validators.required, noWhitespaceValidator()]],
      roles: ['', Validators.required],
      joursCong: [14, [Validators.required, Validators.min(0)]]
    }, {
      validator: matchPassword('password', 'confirmPassword')
    });
  }

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserById(userId).subscribe(user => {
        this.userForm.patchValue({
          username: user.username,
          fullName: user.fullName,
          password: user.password,
          confirmPassword: user.password,
          roles: user.roles,
          joursCong: user.joursCong
        });
      }, error => {
        this.toastr.error('Failed to load user information');
      });
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  modifyUser() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    const modifiedUser: UserView = {
      id: +this.route.snapshot.paramMap.get('id'),
      username: this.userForm.value.username,
      fullName: this.userForm.value.fullName,
      password: this.userForm.value.password,
      roles: this.userForm.value.roles,
      joursCong: this.userForm.value.joursCong
    };

    this.userService.updateUser(modifiedUser.id, modifiedUser).subscribe(user => {
      this.toastr.success('User modified successfully!');
      this.router.navigate(['/users/list-users']);
    }, error => {
      this.toastr.error('Failed to modify user');
    });
  }

  navigateToListUser() {
    this.router.navigate(['/users/list-users']);
  }
}

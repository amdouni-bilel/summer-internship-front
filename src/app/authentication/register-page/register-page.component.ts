import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticatedUser} from "../login-page/authenticated.user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {AuthenticationService} from "../../auth/services/authentication.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  public registerForm: FormGroup;
  hidePassword: boolean = true;
  hiderePassword: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      password: ['', Validators.required],
      rePassword: ['', Validators.required]
    }, {
      validator: this.Mustmatch('password', 'rePassword'),
    });


  }

  get username() {
    return this.registerForm.get('username')
  }

  get fullName() {
    return this.registerForm.get('fullName')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get rePassword() {
    return this.registerForm.get('rePassword')
  }

  ngOnInit(): void {
    let isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  get form() {
    return this.registerForm.controls;
  }

  Submit() {
    console.log("tesrtttt")
    this.authenticationService.register({
      body: {
        'username': this.registerForm.controls['username'].value,
        'fullName': this.registerForm.controls['fullName'].value,
        'password': this.registerForm.controls['password'].value,
        'rePassword': this.registerForm.controls['rePassword'].value,
      }
    }).subscribe(
      resp => {
        console.log(resp)
        this.toastr.success('Utilisateur ajouté avec succès', 'Succès');
        this.router.navigate(['/auth/login']);
      },
      error => {
        console.log(error);
        if (error && error.error && error.error.details) {
          const errorMessage = error.error.details.join(', ');
          this.toastr.error(errorMessage, 'Erreur');
        } else {
          this.toastr.error('Une erreur s\'est produite lors de l\'ajout de l\'utilisateur', 'Erreur');
        }
      }
    );
  }


  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  togglerePasswordVisibility() {
    this.hiderePassword = !this.hiderePassword;
  }
  Mustmatch(password: any, rePassword: any) {
    return (registerForm:FormGroup)=>{
      const passwordcontrol = registerForm.controls[password];
      const password_confirmationcontrol = registerForm.controls[rePassword];
      if(password_confirmationcontrol.errors && !password_confirmationcontrol.errors['Mustmatch']){
        return;
      }
      if(passwordcontrol.value!== password_confirmationcontrol.value){
        password_confirmationcontrol.setErrors({Mustmatch : true})
      }
      else {
        password_confirmationcontrol.setErrors(null)
      }
    }

  }



}

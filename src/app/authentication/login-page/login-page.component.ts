import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/auth/services-auth';
import {AuthService} from '../auth.service';
import {AuthenticatedUser} from './authenticated.user.model';
import {ToastrService} from 'ngx-toastr';
import Swal from 'sweetalert2';
import {AuthRequest} from "../../auth/models/auth-request";
import {UserView} from "../../auth/models/user-view";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent  {
/*  hidePassword = true;
  public loginForm: FormGroup;
  public autenticatedUser: AuthenticatedUser;
  public error: any = '';
  usernameNotFound = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    const isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // Vérification de l'existence du nom d'utilisateur à chaque changement dans le champ
    /!* this.loginForm.get('username').valueChanges.subscribe(value => {
          this.checkUsername();
        });*!/
  }

  get form() {
    return this.loginForm.controls;
  }

  checkUsername(): void {
    this.authService.checkUsernameExists(this.username).subscribe(
      (response) => {
        if (!response.exists) {
          this.usernameNotFound = true;
        } else {
          this.usernameNotFound = false;
        }
      },
      (error) => {
        console.error('Erreur lors de la vérification de l\'email :', error);
      }
    );
  }*/

 /* submit() {
    this.authenticationService.login({
      body: {
        password: this.loginForm.controls.password.value,
        username: this.loginForm.controls.username.value
      }
    }).subscribe(
      resp => {
        localStorage.setItem('token', resp.accessToken);
        this.autenticatedUser = {
          id: resp.id,
          username: resp.username,
          fullName: resp.fullName,
        };
        localStorage.setItem('user', JSON.stringify(this.autenticatedUser));
        this.router.navigate(['/dashboard']);
        Swal.fire('Bienvenue', '' + this.autenticatedUser.fullName, 'success');
      },
      error => {
        // Gestion des erreurs
        if (error && error.error && error.error.details) {
          const errorMessage = this.getCustomErrorMessage(error.error.details[0]);
          this.toastr.error(errorMessage, 'Erreur');
        } else {
          this.toastr.error('Une erreur s\'est produite lors de la connexion', 'Erreur');
        }
      }
    );
  }*/
/*  username: string = '';
  password: string = '';
  loginError: string | null = null;  onSubmit(): void {
    this.authenticationService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful:', response);
        // Gérer la réponse de login ici, par exemple, en stockant le token
        // et en redirigeant l'utilisateur
      },
      error => {
        console.error('Login failed:', error);
        this.loginError = 'Login failed. Please check your username and password.';
      }
    );
  }
  getCustomErrorMessage(error: string): string {
    switch (error) {
      case 'Email non trouvé':
        return 'L\'email saisi n\'est pas trouvé dans la base';
      case 'There is no PasswordEncoder mapped for the id "null"':
        return 'Le mot de passe saisi est incorrect';
      default:
        return 'Une erreur s\'est produite lors de la connexion';
    }
  }


  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

}*/
  loginForm: FormGroup;
  autenticatedUser: any;
  hidePassword: boolean = true;
  usernameNotFound: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
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
      const authRequest: AuthRequest = {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value
      };
      this.loginService.login({ body: authRequest }).subscribe(
        (resp: UserView) => {
          localStorage.setItem('token', resp.accessToken);
          this.autenticatedUser = {
            id: resp.id,
            username: resp.username,
            fullName: resp.fullName,
          };
          localStorage.setItem('user', JSON.stringify(this.autenticatedUser));
          this.router.navigate(['/dashboard']);
          Swal.fire('Bienvenue', '' + this.autenticatedUser.fullName, 'success');
        },
        error => {
          // Gestion des erreurs
          if (error && error.error && error.error.details) {
            const errorMessage = this.getCustomErrorMessage(error.error.details[0]);
            this.toastr.error(errorMessage, 'Erreur');
          } else {
            this.toastr.error('Une erreur s\'est produite lors de la connexion', 'Erreur');
          }
        }
      );
    }
  }

  getCustomErrorMessage(errorDetail: string): string {
    // Personnalisez ce message d'erreur en fonction des détails de l'erreur
    return 'Erreur de connexion';
  }
}

import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SmtpService } from './smtp.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-smtp',
  templateUrl: './smtp.component.html',
  styleUrls: ['./smtp.component.scss'],
})
export class SmtpComponent implements OnInit {
  coordonneeSmtp: FormGroup;

  constructor(
    private toaster: ToastrService,
    private smtpService: SmtpService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.coordonneeSmtp = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      host: ['', Validators.required],
      port: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    });
  }

  saveSmtp() {
    if (this.coordonneeSmtp.valid) {
      console.log(this.coordonneeSmtp.value)
      this.smtpService.saveSmtp(this.coordonneeSmtp.value).subscribe(
        (data) => {
          this.toaster.success('Sauvegarde Effectuée', 'Success');
        },
        (error) => {
          if (error.status === 409) {
            this.toaster.error('Email already exists', 'Error');
          } else {
            this.toaster.error('An error occurred', 'Error');
          }
        }
      );
    } else {
      // Handle invalid form case, e.g., display an error message
      this.toaster.error('Formulaire invalide. Réessayez', 'Error');
    }
  }
  
  
  
}
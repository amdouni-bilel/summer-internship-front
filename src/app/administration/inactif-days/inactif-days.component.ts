import { Component, OnInit } from '@angular/core';
import {DefaultTableData} from "../../shared/data/table/defaultTableData";
import {ToastrService} from "ngx-toastr";
import {CraService} from "../../cra/cra.services";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TypeServiceService} from "../type-service.service";
import {InactiveDays} from "../inactiveDays";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../auth/services/authentication.service";
import {InactiveDaysService} from "../services/inactive-days.service";

@Component({
  selector: 'app-inactif-days',
  templateUrl: './inactif-days.component.html',
  styleUrls: ['./inactif-days.component.scss']
})
export class InactifDaysComponent implements OnInit {
 public inactiveDays: any[] = [];
  form: FormGroup;
  token: string;
  error: string = '';

  constructor(        private fb: FormBuilder,
                      private toaster: ToastrService,
                  private inactiveDaysService: InactiveDaysService,
                  private authenticationService: AuthenticationService,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getInactiveDays()
  }

  onAddInactif() {
    if (this.form.valid) {
      const inactiveday = {
        name: this.form.get('name').value
      };

      this.token = localStorage.getItem('token'); // Récupérez le token depuis le local storage

      if (!this.token) {
        this.toaster.error('Pas de token disponible.', 'Erreur');
        return;
      }

      this.inactiveDaysService.addInactiveday(this.token, inactiveday).subscribe(
        (response: any) => {
          this.toaster.success('Jour inactif ajouté avec succès.');
          this.inactiveDays.push(response);
          this.form.reset();
        },
        (error) => {
          this.toaster.error('Erreur lors de l\'ajout du jour inactif.' , error);
        }
      );
    } else {
      this.toaster.error('Veuillez remplir le champ correctement.');
    }
  }


  /*onAddInactif() {
if (this.form.valid) {
      const name = this.form.get('name').value;
      const headers = this.authenticationService.getAuthorizationHeaders();
      this.inactiveDaysService.addInactiveDay(name, headers).subscribe(
        (data) => {
          this.inactiveDays.push(data);
          this.form.reset();
        },
        (error) => {
          this.toaster.error('Erreur lors de l\'ajout du jour inactif : ' + error.message, 'Erreur');
          throw error;
          console.error(error);
        }
      );
    }
  }*/

  getInactiveDays() {
    this.inactiveDaysService.getInactiveDays().subscribe((response: any) => {
      this.inactiveDays = response;
    });
  }

}

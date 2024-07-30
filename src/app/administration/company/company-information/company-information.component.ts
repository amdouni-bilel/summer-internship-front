import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyRequest } from '../model/company-request';
import {CompanyService} from '../service/company.service';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.scss']
})
export class CompanyInformationComponent implements OnInit {
  societeInformation: FormGroup;
  display = true;

  etat = [
    { id: 1, name: 'Prospect' },
    { id: 2, name: 'Client direct' },
    { id: 3, name: 'Client référencé' }
  ];
  secteurs = [
    { id: 1, name: 'Bancaire' },
    { id: 2, name: 'Telecom' },
    { id: 3, name: 'Publicité' },
    { id: 4, name: 'Média' },
  ];
  status = [
    { id: 1, name: 'SAS' },
    { id: 2, name: 'SASU' },
    { id: 3, name: 'Auto entrepreneur' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.societeInformation = this.formBuilder.group({
      companyName: ['', Validators.required],
      effectif: [''],
      responsable: ['', Validators.required],
      etat: [''],
      secteur: [''],
      tel: ['', Validators.required],
      adresse: ['', Validators.required],
      postalCode: ['', Validators.required],
      website: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ville: ['', Validators.required],
      statutJuiridique: [''],
      tva: [''],
      siret: [''],
      siren: [''],
      codeApe: [''],
      rcs: [''],
      compteNum: [''],
      rib: [''],
      bic: [''],
      iban: [''],
    });
  }

  mapFormToCompanyRequest(): CompanyRequest {
    const companyRequest: CompanyRequest = {
      name: this.societeInformation.get('companyName').value,
      email: this.societeInformation.get('email').value,
      staff: this.societeInformation.get('effectif').value,
      status: this.etat.find(etat => etat.id === Number(this.societeInformation.get('etat').value))?.name || '',
      sector: this.secteurs.find(sector => sector.id === Number(this.societeInformation.get('secteur').value))?.name || '',
      responsibleManager: this.societeInformation.get('responsable').value,
      phone: this.societeInformation.get('tel').value,
      address: this.societeInformation.get('adresse').value,
      city: this.societeInformation.get('ville').value,
      zipCode: this.societeInformation.get('postalCode').value,
      website: this.societeInformation.get('website').value,
      legalStatus: this.status.find(status => status.id === Number(this.societeInformation.get('statutJuiridique').value))?.name || '',
      siren: this.societeInformation.get('siren').value,
      vatic: this.societeInformation.get('tva').value,
      apeCode: this.societeInformation.get('codeApe').value,
      siret: this.societeInformation.get('siret').value,
      rcs: this.societeInformation.get('rcs').value,
      accountNumber: this.societeInformation.get('compteNum').value,
      bic: this.societeInformation.get('bic').value,
      rib: this.societeInformation.get('rib').value,
      iban: this.societeInformation.get('iban').value,
    };

    return companyRequest;
  }

  submitForm(): void {
    if (this.societeInformation.valid) {
      this.companyService.createCompany(this.mapFormToCompanyRequest()).subscribe(
        (response) => {
          console.log('Company created successfully:', response);
          this.societeInformation.reset();
          this.toaster.success('Company created successfully.');
          this.display = !this.display;
        },
        (error) => {
          console.error('Error creating company:', error);
          this.toaster.error('Error creating company. Please try again later.');
        }
      );
    } else {
      this.societeInformation.markAllAsTouched();
      this.toaster.warning('Form is invalid. Please fill in all required fields.');
    }
  }

  show(): void {
    this.display = !this.display;
  }
}

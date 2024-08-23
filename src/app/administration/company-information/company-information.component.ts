import { Component, OnInit } from '@angular/core';
import {NgWizardConfig, NgWizardService, STEP_STATE, StepChangedArgs, StepValidationArgs, THEME} from "ng-wizard";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {MissionControllerService} from "../../missions/services/mission-controller.service";

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.scss']
})
export class CompanyInformationComponent implements OnInit {

  active;
  //ng-wizard
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };

  config1: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      toolbarExtraButtons: [
        { text: 'Done', class: 'btn btn-info', event: () => {
            this.toaster.success('Successfully Done');
          } }
      ],
    }
  };
  config2: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      toolbarExtraButtons: [
        { text: 'Finish', class: 'btn btn-info', event: () => { this.finish();  } }
      ],
    }
  };

  //Archwizard Content
  societeInformation: FormGroup;
  missionInformation: FormGroup;
  facturationInformation: FormGroup;
  fourthFormGroup: FormGroup;
  maxDate: Date;

  constructor(
    private _formBuilder: FormBuilder,
    private toaster: ToastrService,
    private ngWizardService: NgWizardService,
    private missionService: MissionControllerService
  ) {
    this.maxDate = new Date();
  }

  countries = [
    { id: 1, name: 'Brazil' },
    { id: 1, name: 'Czech Republic' },
    { id: 1, name: 'Germany' },
    { id: 1, name: 'Poland' },
  ];

  clientStates = [
    { id: 1, name: 'Prospect' },
    { id: 1, name: 'Client direct' },
    { id: 1, name: 'Client référencé' }
  ];

  secteurs = [
    { id: 1, name: 'Bancaire' },
    { id: 1, name: 'Telecom' },
    { id: 1, name: 'Publicité' },
    { id: 1, name: 'Média' },
  ];

  status = [
    { id: 1, name: 'SAS' },
    { id: 1, name: 'SASU' },
    { id: 1, name: 'Auto entrepreneur' }
  ];

  facturations = [
    { id: 1, name: '30 jours net' },
    { id: 2, name: '30 jours fin de mois' },
    { id: 3, name: 'Fin de mois + 40 jours' },
    { id: 4, name: '45 jours net' } ,
    { id: 5, name: '45 jours fin de mois'} ,
    { id: 6, name: '60 jours net' } ,
  ];
  ngOnInit(): void {

    //Archwizard Content
    this.societeInformation = this._formBuilder.group({
      companyName: ['', Validators.required],
      effectif: ['', ''],
      responsable: ['', Validators.required],
      status: ['', ''],
      secteur: ['',''],
      tel: ['', Validators.required],
      adresse: ['', Validators.required],
      postalCode: ['', Validators.required],
      website: ['', Validators.required],
      email: ['',  [Validators.required,Validators.email]],
      ville: ['', Validators.required],
      statut:  ['',''],
      tva:  ['',''],
      siret:  ['',''],
      rcs:  ['',''],
    });
    this.missionInformation = this._formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', ''],
      sellDays: ['', ''],
      freeDays: ['', ''],
      tjm: ['', ''],
      isForMe:  ['', ''],
      shareMission: ['', '']
    } );
    this.facturationInformation = this._formBuilder.group({
      facturationType: ['', Validators.required],
      salaryMonthly: [''],
      salary: ['', ''],
      logement: ['', ''],
      abonnement: ['', ''],
      transport: ['', ''],
      rent: ['', ''],
      escence: ['', ''],
      peage: ['', ''],
      parking:  ['', ''],
      personalRepas:  ['', ''],
      businessRepas: ['', ''],
      equipement: ['', ''],
      bureauFourniture: ['', ''],
      services: ['', '']
    });

    this.fourthFormGroup = this._formBuilder.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    })
  }
  public finish() {
    console.log(this.societeInformation.value);
    console.log(this.missionInformation.value);
    console.log(this.facturationInformation.value);
    this.toaster.success('Successfully Registered');
    this.missionService.createMission({
      body:{
        company: this.societeInformation.value,
        facturation: this.facturationInformation.value,
        mission: this.missionInformation.value
      }
    }).subscribe(data => console.log(data));
  }

  //NG-WIZARD Content
  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }

  isValidTypeBoolean: boolean = true;

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  isValidFunctionReturnsObservable(args: StepValidationArgs) {
  }


}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { of } from 'rxjs';
import { MissionControllerService } from 'src/app/missions/config/services';
import { PersonnelParametersService } from "./personnel.service";
@Component({
    selector: 'personnel',
    templateUrl: './personnel.component.html',
    styleUrls: ['./personnel.scss']
  })
  export class PersonnelComponent implements OnInit {


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


    //Archwizard Content
    coordonneeBancaire: FormGroup;

    maxDate: Date;

    constructor(
      private _formBuilder: FormBuilder,
      private toaster: ToastrService,
      private personnelParametersService: PersonnelParametersService,
      private missionService: MissionControllerService
    ) {
      this.maxDate = new Date();
    }




    ngOnInit(): void {

      //Archwizard Content
      this.coordonneeBancaire = this._formBuilder.group({
        rib: ['', Validators.required],
        bic: ['', ''],
        iban: ['', Validators.required],
        compte: ['', ''],

      });


    }
    public savePersonnelCompte() {


      this.personnelParametersService.parameterPersonnel(

          this.coordonneeBancaire .value

      ).subscribe(data =>  this.toaster.success('Successfully Registered'));
    }









  }

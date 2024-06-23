import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgWizardConfig, StepValidationArgs, THEME} from 'ng-wizard';
import {of} from 'rxjs';
import {MissionControllerService} from 'src/app/missions/config/services';
import {Router} from "@angular/router";
import {ClientsService} from "../../services/clients.service";

@Component({
  selector: 'create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.scss']
})
export class CreateMissionComponent implements OnInit {
  creerNouveauClient: boolean;
  isValidTypeBoolean: boolean = true;
  maxDate: Date;
  clients: any;
  formAddMission: FormGroup;
  active;


  config2: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      toolbarExtraButtons: [
        {
          text: 'Finish', class: 'btn btn-info', event: () => {
            this.submit();
          }
        }
      ],
    }
  };


  constructor(
    private _formBuilder: FormBuilder,
    private missionService: MissionControllerService,
    private clientService: ClientsService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.maxDate = new Date();
  }


  ngOnInit(): void {
    this.getListClients();
    this.createFormAddMission();
  }

  createFormAddMission(): void {
    this.formAddMission = this._formBuilder.group({
      name: ['', ''],
      startDate: ['', ''],
      endDate: ['', ''],
      sellDays: ['', ''],
      tjm: ['', ''],
      freeDays: ['', ''],
      isForMe: ['', ''],
      shareMission: ['', ''],
      email: ['', ''],
      descriptif: ['', ''],
      ville: ['', ''],
      statut: ['', ''],
      tva: ['', ''],
      siret: ['', ''],
      rcs: ['', ''],
      companyName: ['', ''],
      nameClient: ['', ''],
      address: ['', ''],
      contactName: ['', ''],
      mail: ['', ''],
      tel: ['', ''],
      commentaires: ['', ''],
      idClient: ['', ''],
    });
  }

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }


  submit() {
    if (this.formAddMission.valid) {
      const missionData = this.formAddMission.value;
      const missionPayload = {
        id: missionData.id,
        endDate: missionData.endDate,
        freeDays: missionData.freeDays,
        isForMe: missionData.isForMe,
        sellDays: missionData.sellDays,
        shareMission: missionData.shareMission,
        startDate: missionData.startDate,
        tjm: missionData.tjm,
        total_days: 0,
        idUser: 0,
        name: missionData.name,
        descriptif: missionData.descriptif,
        client: {
          id: missionData.idClient,
          nameClient: missionData.nameClient,
          mail: missionData.mail,
          address: missionData.address,
          contactName: missionData.contactName,
          tel: missionData.tel,
          commentaires: missionData.commentaires
        },
        active: true,
        totalDays: 0
      };

      this.missionService.addMission(missionPayload).subscribe({
        next: (createdMission) => {
          console.log('Mission ajoutée avec succès :', createdMission);
          //   this.testbil.reset();
          this.toastr.success('Mission ajouté avec succés', 'Success');
        },
        error: (error) => {
          this.toastr.error('Une erreur est survenue lors de l\'ajout de la mission', 'Erreur');
          console.error('Une erreur est survenue lors de l\'ajout de la mission :', error);
        }
      });
    }
  }


  toggleClientInfoVisibility() {
    this.creerNouveauClient = !this.creerNouveauClient;
  }


  getListClients() {
    this.clientService.getListClients().subscribe({
      next: (res) => {
        this.clients = res
        console.log('Liste des clients :', this.clients);
      },
      error: (error) => {
        console.error('Une erreur est survenue lors de l\'affichage de la liste des clients :', error);
      }
    });
  }

  fillClientInfo(selectedClientId: number) {
    const selectedClient = this.clients.find(client => client.idClient == selectedClientId);
    if (selectedClient) {
      this.formAddMission.get('address')?.setValue(selectedClient.address);
      this.formAddMission.get('mail')?.setValue(selectedClient.mail);
      this.formAddMission.get('tel')?.setValue(selectedClient.tel);
      this.formAddMission.get('commentaires')?.setValue(selectedClient.commentaires);
      this.formAddMission.get('contactName')?.setValue(selectedClient.contactName);
      this.formAddMission.get('idClient')?.setValue(selectedClient.idClient);
    }
  }

  fillAddress(event: any) {
    this.fillClientInfo(event);
  }

}

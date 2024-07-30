import {Component, OnInit} from '@angular/core';

import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MissionControllerService} from 'src/app/missions/config/services';
import {DomSanitizer} from '@angular/platform-browser';
import {saveAs} from 'file-saver';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {DefaultTableData} from "../../shared/data/table/defaultTableData";
import {CraService} from "../cra.services";
import {HeaderService} from "../../shared/components/header.service";
import {UsersService} from "../../users/services/users.service";
import {WebsocketService} from "../services/websocket.service";
//import {WebsocketService} from "../services/websocket.service";
@Component({
  selector: 'app-show-cra',
  templateUrl: './show-cra.component.html',
  styleUrls: ['./show-cra.component.scss']
})
export class ShowCraComponent implements OnInit {
  missionSelectionnee: any;
  columns = [];
  userId : any
  adminUserId : any
  messageRefusCra : "rrrrrr"
  message : "rrrrrr"
  notifications: any[] = [];
  enableInactiveDays: boolean = false;
  monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  days = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  public defaultData = DefaultTableData;
  currentMonthName: string;
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  public company = [];
  missions : any;
  totaux = [];
  craFormGroup: FormGroup;
  totalWorkedDay;
  selectedMission: any;
  status: string;

  months = [
    {id: 1, month: 'January'},
    {id: 2, month: 'February'},
    {id: 3, month: 'March'},
    {id: 4, month: 'April'},
    {id: 5, month: 'May'},
    {id: 6, month: 'June'},
    {id: 7, month: 'July'},
    {id: 8, month: 'August'},
    {id: 9, month: 'September'},
    {id: 10, month: 'October'},
    {id: 11, month: 'November'},
    {id: 12, month: 'December'},
  ]

  datasfromback: any;
  id_user: any;
  activities: any;
   users: any;
  id_userConnected: any;

  constructor(
    private craService: CraService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private missionService: MissionControllerService,
    private toastr: ToastrService ,
    private route: ActivatedRoute,
    private websocketService: WebsocketService

  ) {
    this.missionSelectionnee = null; // Initialisez la mission sélectionnée à null
    this.getAllMyMissions();

    ///////////////////////////
    this.route.queryParams.subscribe(params => {
      this.id_user = params['idUser'];
      console.log('ID utilisateur reçu dans ShowCraComponent:', this.id_user);
      // Vous pouvez utiliser this.id_user comme nécessaire dans votre composant
    });
    ////////////////////////
    const d = new Date();
    this.currentMonthName = this.monthNames[d.getMonth()] + ' - ' + d.getFullYear();

    this.sanitizer.bypassSecurityTrustHtml('<div style="border: 1px solid red;"><h2>Safe Html</h2><span class="user-content">Server prepared this html block.</span></div>');

    this.craService.configuredMonth().subscribe(datas => {
      console.log(datas);
      this.datasfromback = datas
      this.totalWorkedDay = datas.filter(d => !d.freeDay && !d.weekend).length;
      // this.totalWorkedDay  = datas.length ;
      console.log(this.totalWorkedDay , "totalWorkedDay")
      this.columns = datas.map(data => ({
        'prop': 'day' + new Date(data.today).getDate(),
        'name': this.days[new Date(data.today).getDay()] + '<br/>' + new Date(data.today).getDate(),
        'isWorkedDay': data.workedDay,
        'isFreeDay': data.freeDay,
        'weekend': data.weekend
      }));

      this.craFormGroup = this.formBuilder.group({
        activities: this.formBuilder.array([])
      });


      (<FormArray>this.craFormGroup.controls.activities).push(
        new FormGroup({
            'mission': new FormControl(null, Validators.required),
            'day1': new FormControl(),
            'day2': new FormControl(),
            'day3': new FormControl(),
            'day4': new FormControl(),
            'day5': new FormControl(),
            'day6': new FormControl(),
            'day7': new FormControl(),
            'day8': new FormControl(),
            'day9': new FormControl(),
            'day10': new FormControl(),
            'day11': new FormControl(),
            'day12': new FormControl(),
            'day13': new FormControl(),
            'day14': new FormControl(),
            'day15': new FormControl(),
            'day16': new FormControl(),
            'day17': new FormControl(),
            'day18': new FormControl(),
            'day19': new FormControl(),
            'day20': new FormControl(),
            'day21': new FormControl(),
            'day22': new FormControl(),
            'day23': new FormControl(),
            'day24': new FormControl(),
            'day25': new FormControl(),
            'day26': new FormControl(),
            'day27': new FormControl(),
            'day28': new FormControl(),
            'day29': new FormControl(),
            'day30': new FormControl(),
            'day31': new FormControl()
          }
        ));
    });
  }


  ngOnInit(): void {
    this.craService.getActivitiesByUserId(this.id_user).subscribe((datas: any) => {
      this.activities = datas
      this.creerFormulaire();
      this.status = datas[0]?.status;
      console.log(this.activities , 'this.activities')
    });

    ///////////////////////////
    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    if (parsedUser) {
      this.id_userConnected = parsedUser.id;
      console.log(this.id_userConnected, 'id_userConnected');
      console.log(this.id_user, 'id_user');
      console.log(user);
    } else {
      console.error('L\'utilisateur n\'est pas défini dans le local storage ou ne peut pas être analysé.');
    }
    ////////////////////////

   // this.getListUsers()
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  getAllMyMissions() {
    this.missionService.getMissions().subscribe(res => {
      this.missions = res ;
      if (this.missions.length > 0) {
        this.selectedMission = this.missions[0].id; // ou utilisez l'élément de la mission que vous souhaitez par défaut
      }
      console.log(this.missions, 'missions list')
       });
  }


  calculateTotl(i) {
    const form = this.craFormGroup.get('activities') as FormArray;
    let sum = 0;
    for (let ind = 0; ind < form.controls.length; ind++) {
      sum += +form.controls[ind].value['day' + (i + 1)];
    }
    this.totaux[i] = sum;
   // this.validateTotal(i);


  }

  isValidFormControl(i, j) {
    let forms = this.craFormGroup.get('activities') as FormArray;
    let subForms = forms.controls[i] as FormArray;
    if (subForms && subForms.controls && subForms.controls[j]) {
      return subForms.controls[j].valid;
    }
  }

  creerFormulaire() {
    // Créez le formulaire avec les données récupérées
    this.craFormGroup = this.formBuilder.group({
      activities: this.formBuilder.array([])
    });

    // Regroupez les activités par mission
    const activitiesByMission = new Map<number, any[]>();
    this.activities.forEach(activity => {
      const missionId = activity.mission;
      if (!activitiesByMission.has(missionId)) {
        activitiesByMission.set(missionId, []);
      }
      activitiesByMission.get(missionId).push(activity);
    });

    // Ajoutez un FormGroup pour chaque mission
    activitiesByMission.forEach(activitiesForMission => {
      const formGroup = new FormGroup({
        mission: new FormControl(activitiesForMission[0].mission), // Utilisez la mission du premier élément
        'day1': new FormControl(),
        'day2': new FormControl(),
        'day3': new FormControl(),
        'day4': new FormControl(),
        'day5': new FormControl(),
        'day6': new FormControl(),
        'day7': new FormControl(),
        'day8': new FormControl(),
        'day9': new FormControl(),
        'day10': new FormControl(),
        'day11': new FormControl(),
        'day12': new FormControl(),
        'day13': new FormControl(),
        'day14': new FormControl(),
        'day15': new FormControl(),
        'day16': new FormControl(),
        'day17': new FormControl(),
        'day18': new FormControl(),
        'day19': new FormControl(),
        'day20': new FormControl(),
        'day21': new FormControl(),
        'day22': new FormControl(),
        'day23': new FormControl(),
        'day24': new FormControl(),
        'day25': new FormControl(),
        'day26': new FormControl(),
        'day27': new FormControl(),
        'day28': new FormControl(),
        'day29': new FormControl(),
        'day30': new FormControl(),
        'day31': new FormControl()
      });

      // Mettez à jour les valeurs des jours spécifiques (si présentes)
      activitiesForMission.forEach(activity => {
        const dayIndex = this.getDayIndex(activity.days);
        if (dayIndex !== -1) {
          formGroup.controls[`day${dayIndex + 1}`].setValue(1);
        }
      });

      // Ajoutez le FormGroup à FormArray
      const formArray = this.craFormGroup.get('activities') as FormArray;
      formArray.push(formGroup);
    });
  }


  // Fonction pour obtenir l'index du jour à partir de la date
  getDayIndex(date: string): number {
    const dayOfMonth = new Date(date).getDate();
    return dayOfMonth -1 ; // Index du jour dans le formulaire
  }




   updateStatusToPending() {
      this.craService.updateStatusToPending(this.id_user).subscribe(response => {
        console.log('Statut mis à jour avec succès', response);
       // this.ajouterNotificationEnAttente()
        this.toastr.success('Notification envoyée à l\'utilisateur <strong>"' + this.id_user + '"</strong> avec succès.', 'CRA non validé', {
          enableHtml: true ,
        });
        console.log(this.message , "message")
        this.sendNotification()

      }, error => {
        console.error('Erreur lors de la mise à jour du statut', error);
        // Gérez les erreurs selon vos besoins
      });
   }

  sendNotification(): void {
    this.craService.sendNotification(this.id_userConnected, this.id_user, this.message).subscribe(
      response => {
        // Toast dans le navigateur de l'expéditeur (this.userId)
        this.toastr.success('Votre CRA a été envoyé à l\'admin pour validation', 'Success');
      },
      error => {
        console.error('Erreur lors de l\'envoi de la notification :', error);
      }
    );

    //  this.toastr.info('CRA reçu');
    this.websocketService.envoyerMessageWebSocket('topic/notif', this.message);
  }

    updateStatusToValid() {
      this.craService.updateStatusToValid(this.id_user).subscribe(response => {
        console.log('Statut mis à jour avec succès', response);
     //   this.ajouterNotificationValide()
      }, error => {
        console.error('Erreur lors de la mise à jour du statut', error);
        // Gérez les erreurs selon vos besoins
      });
    }

    updateStatusPendingToValid() {
      this.craService.updateStatusPendingToValid(this.id_user).subscribe(response => {
        console.log('Statut mis à jour avec succès', response);
    //    this.ajouterNotificationValide()
      }, error => {
        console.error('Erreur lors de la mise à jour du statut', error);
        // Gérez les erreurs selon vos besoins
      });
    }




}

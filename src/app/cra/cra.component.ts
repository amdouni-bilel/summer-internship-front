import {ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';

import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MissionControllerService} from 'src/app/missions/config/services';
import {DefaultTableData} from '../shared/data/table/defaultTableData';
import {DomSanitizer} from '@angular/platform-browser';
import {CraService} from './cra.services';
import {saveAs} from 'file-saver';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {HeaderService} from "../shared/components/header.service";
import {WebsocketService} from "./services/websocket.service";
import {UsersService} from "../users/services/users.service";

@Component({
  selector: 'create-cra',
  templateUrl: './cra.component.html',
  styleUrls: ['./cra.component.scss']
})
export class CraComponent implements OnInit {
  missionSelectionnee: any;
  firstSaisieDate: any;
  lastSaisieDate: any
  columns = [];
  users: any
  adminUser: any;
  adminUserId: number;
  monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  days = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  currentMonthName: string;
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  public company = [];
  missions: any;
  totaux = [];
  craFormGroup: FormGroup;
  totalWorkedDay;
  selectedMission: any;
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
  total: number;
  userId: any;

  constructor(
    private craService: CraService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private missionService: MissionControllerService,
    private toastr: ToastrService,
    private router: Router,
    private websocketService: WebsocketService,
    private userService: UsersService
  ) {
    this.missionSelectionnee = null;
    this.getAllMyMissions();
    this.getUserById()
    this.getConfiguredMonth()
  }


  ngOnInit(): void {
    console.log(this.totalWorkedDay, "totalWorkedDayyyyyyyyy")
    this.filledDay()
    this.getActivitiesByUserId()
    this.getNotifications()
    this.getAdminUser();
  }

  getActivitiesByUserId() {
    this.craService.getActivitiesByUserId(this.id_user).subscribe((datas: any) => {
      this.activities = datas
      this.creerFormulaire();
      console.log(this.activities.length, 'this.activities')
    });
  }

  getNotifications() {
    this.websocketService.getNotificationObservable().subscribe(
      notification => {
        console.log('Notification reçue :', notification);
        const parsedNotification = JSON.parse(notification);
        this.notifications.push(parsedNotification.message);
      },
      error => console.error('Erreur WebSocket:', error)
    );
  }

  getConfiguredMonth() {
    const d = new Date();
    this.currentMonthName = this.monthNames[d.getMonth()] + ' - ' + d.getFullYear();
    this.sanitizer.bypassSecurityTrustHtml('<div style="border: 1px solid red;"><h2>Safe Html</h2><span class="user-content">Server prepared this html block.</span></div>');
    this.craService.configuredMonth().subscribe(datas => {
      console.log(datas , "configuredMonth");
      this.datasfromback = datas
      this.totalWorkedDay = datas.filter(d => !d.freeDay && !d.weekend).length;
      // this.totalWorkedDay  = datas.length ;
      console.log(this.totalWorkedDay, "totalWorkedDay")
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
      //  this.totaux = datas.map(data => data.workedDay ? 1 : 0);

    });
  }

  getUserById() {
    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    if (parsedUser) {
      this.id_user = parsedUser.id;
      console.log(this.id_user, 'id user');
      console.log(user);
    } else {
      console.error('L\'utilisateur n\'est pas défini dans le local storage ou ne peut pas être analysé.');
    }
  }

  filledDayPercent(): number {
    // let total = this.totaux.reduce((acc, cur) => acc + cur, 0);
    //  return (total * 100) / this.totalWorkedDay;
    return (this.filledDay() * 100) / this.totalWorkedDay;
  }

  filledDay(): number {
    // Si totaux a des valeurs, utilisez-le pour calculer le total
    if (this.totaux.length > 0) {
      return this.totaux.reduce((acc, cur) => acc + cur, 0);
    }
    // Sinon, utilisez l'approche qui parcourt les champs de saisie
    this.total = 0;
    const formArray = this.craFormGroup.get('activities') as FormArray;
    formArray.controls.forEach((formGroup) => {
      this.columns.forEach((col, colIndex) => {
        const inputValue = formGroup.get(col.prop).value;
        if (inputValue === 1 && !this.isInactiveDay(colIndex)) {
          this.total++;
        }
      });
    });
    //  console.log('Total des jours travaillés :', this.total);
    return this.total;
  }


  addGroup(mission, valueMonth) {
    // Vérifier si une mission est sélectionnée
    if (!this.selectedMission) {
      // Récupérer l'identifiant de mission à partir du formulaire
      const formArray = this.craFormGroup.get('activities') as FormArray;
      const selectedMissionId = formArray.at(formArray.length - 1).get('mission').value;

      // Utiliser l'identifiant de mission récupéré
      this.selectedMission = selectedMissionId;

      if (!this.selectedMission) {
        console.error('Veuillez sélectionner une mission avant d\'ajouter un groupe.');
        return;
      }
    }

    let group = {};
    if (!valueMonth) {
      let index = 0;
      this.columns.forEach(input_template => {
        group[input_template.prop] = new FormControl(valueMonth[index]);
        index++;
      });
    } else {
      this.columns.forEach(input_template => {
        group[input_template.prop] = new FormControl(1);
      });
    }

    // Ajouter le contrôle 'mission' à la nouvelle ligne
    group['mission'] = new FormControl(this.selectedMission);

    // Créer le groupe de formulaire pour la nouvelle ligne
    const firstLineActivity = this.formBuilder.group(group);

    // Ajouter le contrôle 'mission' pour la première ligne
    firstLineActivity.addControl('mission', new FormControl(this.selectedMission));

    // Ajouter la nouvelle ligne au FormArray
    const form = this.craFormGroup.get('activities') as FormArray;
    form.push(firstLineActivity);

    // Réinitialiser la variable selectedMission
    this.selectedMission = null;

    this.firstSaisieDate = null;
    this.lastSaisieDate = null;
  }

  saveCra() {
    // Créez un tableau pour stocker les valeurs avec la date pour chaque ligne
    const valuesWithDates = [];

    // Récupérez les identifiants de mission pour chaque ligne
    const formArray = this.craFormGroup.get('activities') as FormArray;
    const missionIds = formArray.controls.map(control => control.get('mission').value);

    // Affichez les valeurs saisies pour chaque jour de chaque ligne dans la console
    console.log('FormArray content:', formArray.value);


    formArray.controls.forEach((formGroup, index) => {
      const missionId = missionIds[index]; // récupérez l'identifiant de mission à partir du tableau missionIds
      const dayValues = [];

      // Stockez les valeurs avec la date, l'identifiant de mission et le numéro de jour dans un tableau
      this.columns.forEach((col, colIndex) => {
        const inputValue = formGroup.get(col.prop).value;

        // Ajoutez la date, l'identifiant de mission et le numéro de jour uniquement pour les jours de travail avec inputValue = 1
        //  if (!(col.weekend || col.freeDay) && inputValue === '1') {
        if (inputValue === '1') {
          const currentDate = this.columns[colIndex].name.split('<br/>')[1];
          const dayOfMonth = currentDate < 10 ? `0${currentDate}` : currentDate;
          // const formattedDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${dayOfMonth}`;
          const formattedDate = `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${dayOfMonth}`;
          dayValues.push({
            mission: missionId, // Utilisez l'identifiant de mission de la ligne actuelle
            days: JSON.stringify(formattedDate).replace(/\"/g, ''),
            // idWorkedDay: parseInt(currentDate), // Convertissez le numéro du jour en entier
            idWorkedDay: this.isInactiveDay(colIndex) ? null : parseInt(currentDate),
            idInactiveDay: this.isInactiveDay(colIndex) ? parseInt(currentDate) : null,
            // inputvaluevalu: inputValue,
            idUser: this.id_user, // Ajoutez la propriété idUser
            active: this.isInactiveDay(colIndex),

          });
        }
      });

      valuesWithDates.push(dayValues);
    });
    // Affichez les valeurs avec la date et l'identifiant de mission pour chaque ligne dans la console
    console.log('Mission IDs for each line:', missionIds);
    console.log('Filtered values with inputvaluevalu = 1:', valuesWithDates);
    // Aplatir le tableau bidimensionnel
    const flattenedValues = valuesWithDates.reduce((acc, val) => acc.concat(val), []);

// Affichez les valeurs aplaties dans la console
    console.log('Flattened values with flattenedValues = 1:', flattenedValues);
    /////////////////////////////////////
    // Appel à l'API pour ajouter les activités
    this.craService.ajouterActivites(flattenedValues).subscribe(
      (response) => {
        console.log('Activité creé avec succés', response);
        this.toastr.success("CRA creé avec succés.", "Success");
        this.router.navigate(["cra/mes-cra"]);
      },
      (error) => {
        console.error('Erreur lors de la création d\'une activité:', error);
        this.toastr.error("Erreur lors de la création d\'une activité.", "Erreur");
      }
    );
  }


  trackByFn(index: any, item: any) {
    return index;
  }

  getAllMyMissions() {
    this.missionService.getMissions().subscribe(res => {
      this.missions = res;
      if (this.missions.length > 0) {
        this.selectedMission = this.missions[0].id; // ou utilisez l'élément de la mission que vous souhaitez par défaut
      }
      // this.missions = res.filter(mission => mission.isForMe === true);
      console.log(this.missions, 'missions list')
      /*   this.craService.getInactiveDays().subscribe(res => {
             res.forEach(r => {
               this.addConge(r.name, r.id);
             })

           });*/
    });
  }

  calculateTotl(i) {
    const form = this.craFormGroup.get('activities') as FormArray;
    let sum = 0;
    for (let ind = 0; ind < form.controls.length; ind++) {
      sum += +form.controls[ind].value['day' + (i + 1)];
    }
    this.totaux[i] = sum;
    this.validateTotal(i);

    // Forcez la mise à jour manuelle de la vue après la saisie
  }


  validateTotal(i) {
    const form = this.craFormGroup.get('activities') as FormArray;
    if (this.totaux[i] > 1) {
      for (let ind = 0; ind < form.controls.length; ind++) {

        var subForm = form.controls[ind] as FormArray;
        subForm.controls['day' + (i + 1)].setErrors({'required': true});
      }
    } else {
      for (let ind = 0; ind < form.controls.length; ind++) {
        var subForm = form.controls[ind] as FormArray;
        subForm.controls['day' + (i + 1)].setErrors(null);
        //form.controls[ind].setErrors(null);
      }
    }
  }

  isValidFormControl(i, j) {
    let forms = this.craFormGroup.get('activities') as FormArray;
    let subForms = forms.controls[i] as FormArray;
    if (subForms && subForms.controls && subForms.controls[j]) {
      return subForms.controls[j].valid;
    }
  }

  isValidTotal(i) {
    return this.totaux[i] < 2;
  }


  enableInactiveDays: boolean = false;

  toggleInactiveDays() {
    this.enableInactiveDays = !this.enableInactiveDays;
    // Recalculez le nombre total de jours travaillés en fonction de l'état de la case à cocher
    this.totalWorkedDay = this.enableInactiveDays ? this.datasfromback.length : this.datasfromback.filter(d => !d.freeDay && !d.weekend).length;
    // Réinitialisez les totaux et réaffichez les jours dans la console (si nécessaire)
    this.totaux = [];
    // console.log('Total des jours travaillés mis à jour :', this.totalWorkedDay);
  }

  isInactiveDay(colIndex: number): boolean {
    const col = this.columns[colIndex];
    return col.weekend || col.freeDay;
  }

  senderUserId: number;
  recipientUserId: 1;
  notifications: any[] = [];
  message: string = 'CRA envoyé';

  sendNotification(): void {
    this.craService.sendNotification(this.id_user, this.adminUserId, this.message).subscribe(
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


  getAdminUser(): void {
    this.userService.getUsersWithRoles().subscribe(
      (users) => {
        console.log('ID de l\'utilisateur avec le rôle ADMIN :', users);
        const adminUser = users.find(user => user.roles.includes('ADMIN'));
        if (adminUser) {
          this.adminUserId = adminUser.id;
          console.log('ID de l\'utilisateur avec le rôle ADMIN :', this.adminUserId);
        } else {
          console.log('Aucun utilisateur avec le rôle ADMIN trouvé.');
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    );
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
    return dayOfMonth - 1; // Index du jour dans le formulaire
  }

 /* initializeFormValues() {
    const formArray = this.craFormGroup.get('activities') as FormArray;
    formArray.controls.forEach((formGroup, index) => {
      const missionId = formGroup.get('mission').value;
      const existingValues = this.activities.find(activity => activity.mission === missionId);
      if (existingValues) {
        this.columns.forEach(col => {
          const propName = col.prop;
          const dayValue = existingValues[propName];
          formGroup.get(propName).setValue(dayValue);
        });
      }
    });
  }*/

}

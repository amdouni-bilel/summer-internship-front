import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";
//import {UploadCvService} from "../../upload-cv.service";
import {UsersService} from "../../../users/services/users.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-consult-cv',
  templateUrl: './consult-cv.component.html',
  styleUrls: ['./consult-cv.component.scss']
})
export class ConsultCvComponent implements OnInit , OnDestroy {
  destroy$ : Subject<void> = new Subject<void>();
  columns = [
    {prop: 'id', name: 'ID'},
    {prop: 'idUser', name: 'idUser'},
    {prop: 'idMission', name: 'idMission'},
    {prop: 'urlUpload', name: 'urlUpload'},
    {prop: 'filename', name: 'filename'},
    { name: 'Actions'}
  ];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  missions: any;
  id_user: any;
  idMission: any;
  userConnected: any;
  userConnectedId: any;
  filteredMissions: any;

  constructor(
   // private uploadCvService: UploadCvService,
    private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getAllMissions();
    this.getConnectedUser();
  }

  getAllMissions() {
   /* // Récupérer les missions
    this.uploadCvService.getListCvs().subscribe((data: any) => {
      this.missions = data;
      console.log(this.missions , "missions");

      // Filtrer les missions pour obtenir celles qui ont le même ID utilisateur que l'utilisateur connecté
      this.filteredMissions = this.missions.filter(mission => mission.idUser === this.userConnectedId);
      console.log("Missions de l'utilisateur connecté :", this.filteredMissions);
    });*/
  }

  getConnectedUser() {
  /*  // Récupérer les détails de l'utilisateur connecté
    this.usersService.getUserConnected().subscribe((data: any) => {
      this.userConnected = data;
      this.userConnectedId = data.id;
      console.log(this.userConnected , "userConnected");
      console.log(this.userConnectedId , "userConnectedId");

      // Une fois que vous avez récupéré l'utilisateur connecté, appelez la méthode pour récupérer toutes les missions
      this.getAllMissions();
    });*/
  }


  goToUploadCV(missionId: number) {
    this.router.navigate(['/missions/upload-cv/', missionId], { queryParams: { missionId: missionId } });
    console.log('Bouton cliqué pour la mission : ', missionId);
  }



  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  go() {
    Swal.fire({
      title: "The CV",
      text: "Open CV?",
      icon: "info"
    });
  }
}




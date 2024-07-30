import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {MissionControllerService} from "../../../missions/services/mission-controller.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table-with-api-data',
  templateUrl: './table-with-api-data.component.html',
  styleUrls: ['./table-with-api-data.component.scss']
})
export class TableWithApiDataComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject<void>();
  detailButtonTemplate = `<button class="btn btn-primary btn-sm" (click)="showDetails(row)">Détails</button>`;


  columns = [
    {prop: 'title', name: 'Titre de mission'},
    {prop: 'companyResponse.name', name: 'Société'},
    {prop: 'client.nameClient', name: 'Client'},
    {prop: 'tjm', name: 'T.J.M'},
    {prop: 'startDate', name: 'Date de démarrage'},
    {name: 'Actions', cellTemplate: this.detailButtonTemplate}
  ];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  missions: any;
  page: number = 0;
  size: number = 3;

  constructor(
    private missionService: MissionControllerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions() {
    this.missionService.getAllMissions(this.page, this.size).subscribe(
      (data: any) => {
        this.missions = data;
        this.missions = data.filter((mission: any) => mission.forMe === false);
        console.log('this.missions: ', this.missions);
      },
      (error) => {
        console.log('Error fetching missions: ', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}







import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MissionControllerService} from "../../../missions/services/mission-controller.service";
import {DataTable} from "simple-datatables";

@Component({
  selector: 'app-table1-with-api-data',
  templateUrl: './table1-with-api-data.component.html',
  styleUrls: ['./table1-with-api-data.component.scss']
})
export class Table1WithApiDataComponent implements OnInit {
  missions: any;
  page: number = 0;
  size: number = 10;
  totalPages: number;

  constructor(
    private cdr: ChangeDetectorRef,
    private missionService: MissionControllerService
  ) { }

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(): void {
    this.missionService.getAllMissions(this.page, this.size).subscribe(
      response => {
        this.missions = response;
        console.log(this.missions, 'Missions');
        this.totalPages = Math.ceil(this.missions.totalItems / this.size); // Calcul du nombre total de pages
        this.cdr.detectChanges();

        let dataTable1 = new DataTable("#myTable1", {
          searchable: true,
          fixedHeight: true,
        });
      }
    );
  }

}

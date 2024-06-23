import { Component, OnInit } from '@angular/core';
import {CraService} from "../cra.services";
import {TypeServiceService} from "../../administration/type-service.service";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.scss']
})
export class MyActivitiesComponent implements OnInit {
  columns = [
    {  prop: 'id',name: 'ID' },
    { prop: 'month',name: 'month' },
    { prop: 'status',name: 'Status' },
    {  prop: 'days',name: 'days' },
    { prop: 'mission',  name: 'Id de mission'},
  ];
  activities: any;
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  fullName: any;


  constructor(
    private craService: CraService,
    private typeServiceService: TypeServiceService,
    private http: HttpClient,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) {
  }
  ngOnInit(): void {
     this.craService.getActivites().subscribe((data: any) => {
       console.log(data , "data");
       console.log(this.activities , "activite");
       this.activities = data.map((activity: any) => {
          activity.days = this.datePipe.transform(activity.days, 'yyyy-MM-dd');
          return activity;

        });

        // Mettez à jour le service de partage de données avec les activités
      //  this.craService.updateActivities(this.activities);
     //   console.log(this.activities , "activite");
      });
    }
}

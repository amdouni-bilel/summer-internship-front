import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MissionControllerService} from "../../missions/services/mission-controller.service";
import {TypeServiceService} from "../../administration/type-service.service";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {CraService} from "../cra.services";
import {DatePipe} from "@angular/common";
import {UsersService} from "../../users/services/users.service";
import {Router} from "@angular/router";
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-all-activities',
  templateUrl: './all-activities.component.html',
  styleUrls: ['./all-activities.component.scss']
})
export class AllActivitiesComponent implements OnInit {
  activities: any;
  fullName: any;
  users: any;
  idUser: any;
  constructor(
    private craService: CraService,
    private typeServiceService: TypeServiceService,
    private http: HttpClient,
    private toastr: ToastrService,
  private datePipe: DatePipe,
  private cdr: ChangeDetectorRef,
  private userService: UsersService,
  private router: Router
  ) {
  }
  ngOnInit(): void {
//this.getAllactivivties()

    this.getUser();

    this.craService.getListCRA().subscribe((data: any) => {
      this.activities = data.map((activity: any) => {
        activity.days = this.datePipe.transform(activity.days, 'yyyy-MM-dd');
        return activity;
      });

      this.cdr.detectChanges();

      let dataTable1 = new DataTable("#myTable1", {
        searchable: true,
        fixedHeight: true,
      });
    });
  }


  getUser(): void {
    this.userService.getUsersWithRoles().subscribe(
      response => {
        this.users = response;
        console.log(this.users, 'Utilisateurs');
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
      }
    );
  }

  getUserFullName(userId: number): string {
    if (this.users) {
      const user = this.users.find((u: any) => u.id === userId);
      return user ? user.fullName : 'Utilisateur inconnu';
    }
    return '';
  }


  goToActivities(id_user: any): void {
    console.log('id user sélectionnée:', id_user);
   // this.router.navigate(["cra/show-cra"]);
    this.router.navigate(["cra/show-cra"], { queryParams: { idUser: id_user } });

  }
}

import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { DataTable } from 'simple-datatables';
import { CraService } from "../cra.services";
import { DatePipe } from "@angular/common";
import {UsersService} from "../../users/services/users.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-mes-cra',
  templateUrl: './mes-cra.component.html',
  styleUrls: ['./mes-cra.component.scss']
})
export class MesCraComponent implements OnInit {
  activities: any;
  fullName: any;
  users: any;
   idUser: any;
  constructor(private craService: CraService,
              private datePipe: DatePipe,
              private cdr: ChangeDetectorRef,
              private userService: UsersService,
              private router: Router) {}

  ngOnInit(): void {
this.getUser();
    ///////////////////////////
    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    if (parsedUser) {
      this.idUser = parsedUser.id;
      this.fullName = parsedUser.fullName;
      console.log(this.fullName, 'ifullName');
      console.log(this.idUser, 'id user');
      console.log(user);
    } else {
      console.error('L\'utilisateur n\'est pas défini dans le local storage ou ne peut pas être analysé.');
    }
    ////////////////////////



    this.craService.getListCRA().subscribe((data: any) => {
      console.log(data , 'data')
      this.activities = data.map((activity: any) => {
        if (activity.days && !isNaN(Date.parse(activity.days))) {
          // Vérifier si la propriété 'days' existe et peut être convertie en Date
          activity.days = this.datePipe.transform(new Date(activity.days), 'MMMM yyyy');
        } else {
          // Gérer le cas où la date n'est pas valide
          activity.days = 'Date invalide';
        }
        return activity;
      });
      this.cdr.detectChanges();
    });
  }

  getUser() {
    this.userService.getUsersWithRoles().subscribe(
      response => {
        console.log(response , 'ttttttt');  // Ajouter cette ligne pour afficher la réponse dans la console

        // Vérifier si la réponse contient la propriété "items"
          // Extraire les noms complets
          this.users = response;
         console.log(this.users, 'usersssssssssss');
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
}

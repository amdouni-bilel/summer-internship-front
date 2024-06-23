import {Component, OnInit} from '@angular/core';
import {MissionControllerService} from "../../missions/services/mission-controller.service";
import {TypeServiceService} from "../../administration/type-service.service";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {UsersService} from "../services/users.service";
import {UserView} from "../../auth/models/user-view";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  columns = [
    {prop: 'id', name: 'ID'},
    {prop: 'username', name: 'Username'},
    {prop: 'fullName', name: 'FullName'},
    {prop: 'surname', name: 'Surname'},
    {prop: 'roles', name: 'Roles'}
  ];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  public company = [];
  users: UserView[];
  adminUsers: any;

  constructor(
    private missionService: MissionControllerService,
    private typeServiceService: TypeServiceService,
    private http: HttpClient,
    private toastr: ToastrService,
    private userService: UsersService
  ) {
  }

  ngOnInit() {
    this.userService.getUsersWithRoles().subscribe(users => {
      this.users = users;
      this.adminUsers = users.filter(user => user.roles.includes('ADMIN'));
      console.log(this.users, 'utilisateurs avec le rôle ADMIN');
      console.log(this.adminUsers, 'adminUsers')
    });
  }


}

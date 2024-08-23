import { Component, OnInit } from '@angular/core';
import { UserList4Data } from 'src/app/shared/data/user-list/userlist4';

@Component({
  selector: 'app-user-list4',
  templateUrl: './user-list4.component.html',
  styleUrls: ['./user-list4.component.scss']
})
export class UserList4Component implements OnInit {

  public userlistData = UserList4Data;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { UserList3Data } from 'src/app/shared/data/user-list/userlist3';

@Component({
  selector: 'app-user-list3',
  templateUrl: './user-list3.component.html',
  styleUrls: ['./user-list3.component.scss']
})
export class UserList3Component implements OnInit {
 public UserListData = UserList3Data;
  constructor() { }

  ngOnInit(): void {
  }

}

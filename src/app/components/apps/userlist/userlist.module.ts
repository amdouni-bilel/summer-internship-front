import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserList1Component } from './user-list1/user-list1.component';
import { UserList2Component } from './user-list2/user-list2.component';
import { UserList3Component } from './user-list3/user-list3.component';
import { UserList4Component } from './user-list4/user-list4.component';
import { UserlistRoutingModule } from './userlist-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [UserList1Component, UserList2Component, UserList3Component, UserList4Component],
  imports: [
    CommonModule,
    UserlistRoutingModule,
    NgbModule
  ]
})
export class UserlistModule { }

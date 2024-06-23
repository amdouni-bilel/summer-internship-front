import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from "./list-users/list-users.component";

const routes: Routes = [ {
  path:'',  /*canActivate: [AuthGuard],*/
  children: [
    {
      path: 'list-users',
      component: ListUsersComponent
    },
    {
    //  path: 'test',
    //  component: AllMissions
    },
    {
     // path: 'mes-missions',
    //  component: MyMissionComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from "./list-users/list-users.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ModifyUserComponent} from "./modify-user/modify-user.component";
import { ListCongesComponent } from '../conges/list-conges/list-conges.component';
import { AddCongeComponent } from '../conges/add-conge/add-conge.component';
import { ModifyCongeComponent } from '../conges/modify-conge/modify-conge.component';
import { ListMyCongesComponent } from '../myconges/list-myconges/list-myconges.component';
import { ModifyMyCongeComponent } from '../myconges/modify-myconges/modify-myconges.component';
import { AddMyCongeComponent } from '../myconges/add-myconges/add-myconges.component';


const routes: Routes = [ {
  path:'',  /*canActivate: [AuthGuard],*/
  children: [
    {
      path: 'list-users',
      component: ListUsersComponent
      
    },
    {
      path : 'add-user',
      component :AddUserComponent
    },
    { path: 'modify-user/:id', component: ModifyUserComponent },


    {path: 'list-conges', component: ListCongesComponent},
    {path: 'add-conge', component: AddCongeComponent},
    { path: 'modify-conge/:id', component: ModifyCongeComponent},


    {path: 'list-myconges' , component :ListMyCongesComponent},
    { path: 'modify-myconge/:id', component: ModifyMyCongeComponent},
    {path: 'add-myconge', component: AddMyCongeComponent},





   
   
   
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

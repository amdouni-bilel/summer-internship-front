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
import { AuthGuard } from '../auth.guard';
import { NotAuthorizedComponent } from '../not-authorized/not-authorized.component';


const routes: Routes = [ {
  path:'',  /*canActivate: [AuthGuard],*/
  children: [
    {
      path: 'list-users',
      component: ListUsersComponent,
      canActivate: [AuthGuard],
    data: { role: 'ADMIN' } 
      
    },
    {
      path : 'add-user',
      component :AddUserComponent,
      canActivate: [AuthGuard],
    data: { role: 'ADMIN' } 
    },
    { path: 'modify-user/:id', component: ModifyUserComponent ,
      canActivate: [AuthGuard],
    data: { role: 'ADMIN' } },


    {path: 'list-conges', component: ListCongesComponent,
      canActivate: [AuthGuard],
    data: { role: 'ADMIN' } },
    {path: 'add-conge', component: AddCongeComponent,
      canActivate: [AuthGuard],
    data: { role: 'ADMIN' } },
    { path: 'modify-conge/:id', component: ModifyCongeComponent,
      canActivate: [AuthGuard],
    data: { role: 'ADMIN' } },


    {path: 'list-myconges' , component :ListMyCongesComponent},
    { path: 'modify-myconge/:id', component: ModifyMyCongeComponent},
    {path: 'add-myconge', component: AddMyCongeComponent},

    {path : 'not-authorized', component: NotAuthorizedComponent}





   
   
   
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

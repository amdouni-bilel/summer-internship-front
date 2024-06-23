import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { MailmanagerComponent } from './mailmanager/mailmanager.component';
import {AuthGuard} from "../auth.guard";


const routes: Routes = [
  {
    path:'',/*canActivate: [AuthGuard],*/
    children: [
      {
        path: 'manage',
        component: AdministrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }

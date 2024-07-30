import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CraComponent } from './cra.component';
import {MesCraComponent} from "./mes-cra/mes-cra.component";
import {AuthGuard} from "../auth.guard";
import {AllActivitiesComponent} from "./all-activities/all-activities.component";
import {MyActivitiesComponent} from "./my-activities/my-activities.component";
import {ShowCraComponent} from "./show-cra/show-cra.component";



const routes: Routes = [
  {
    path:'',/*canActivate:[AuthGuard],*/
    children: [
      {
        path: 'create-activity',
        component: CraComponent
      } ,
      {
        path: 'toutes-les-cra',
        component: AllActivitiesComponent
      } ,
      {
        path: 'mes-cra1',
        component: MyActivitiesComponent
      } ,
      {
        path: 'show-cra',
        component: ShowCraComponent
      } ,
      {
        path: 'mes-cra',
        component: MesCraComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CraRoutingModule { }

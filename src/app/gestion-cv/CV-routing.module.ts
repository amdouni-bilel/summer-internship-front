import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsSignedInGuard } from 'src/app/authentication/issigned.guard';
import { MaincvComponent } from './maincv/maincv.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { MatchingComponent } from './matching/matching.component';
import {AuthGuard} from "../auth.guard";





const routes: Routes = [
    {
        path: '',/*canActivate:[AuthGuard],*/
        children: [
            {
                path: '',
                component: MaincvComponent


            },
            {  path:'formation',
                component:FormationComponent

              },
              {  path:'experience',
                component:ExperienceComponent

              },
              {
                path:'matching',
                component:MatchingComponent
              },

        ],


    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CVRoutingModule { }

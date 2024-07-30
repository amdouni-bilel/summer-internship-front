import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsSignedInGuard } from 'src/app/authentication/issigned.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from "../../auth.guard";

const routes: Routes = [
    {
        path: '',/*canActivate:[AuthGuard],*/
        children: [
            {
                path: '',
                component: DashboardComponent
            },
        ],
        // canActivate: [
        //     IsSignedInGuard
        // ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }

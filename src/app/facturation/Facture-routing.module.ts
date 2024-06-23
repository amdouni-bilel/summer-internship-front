import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsSignedInGuard } from 'src/app/authentication/issigned.guard';
import { FactureComponent } from './facture/facture.component';
import { ComptableComponent } from './comptable/comptable.component';
import {AuthGuard} from "../auth.guard";


const routes: Routes = [
    {
        path: '',/*canActivate:[AuthGuard],*/
        children: [
            {
                path: '',
                component: FactureComponent
            },
            {
                path: 'Comp',
                component: ComptableComponent
            },
        ],
       /* canActivate: [
            IsSignedInGuard
        ]*/
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FactureRoutingModule { }

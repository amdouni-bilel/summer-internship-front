import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesFichiersComponent } from './mes-fichiers/mes-fichiers.component';
import { FichierDesAutresComponent } from './fichier-des-autres/fichier-des-autres.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { FichierPartagesComponent } from './fichier-partages/fichier-partages.component';


const routes : Routes = [
    {
        path:'',
        children: [ 
            { path: 'mesFichier', component: MesFichiersComponent},
            { path: 'autres', component: FichierDesAutresComponent},
            { path: 'invitations', component: InvitationsComponent},
            { path: 'partage', component: FichierPartagesComponent}

        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class FichierRoutingModule { }
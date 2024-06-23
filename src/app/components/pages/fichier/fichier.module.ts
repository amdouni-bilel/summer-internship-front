import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FichierDesAutresComponent } from './fichier-des-autres/fichier-des-autres.component';
import { FichierPartagesComponent } from './fichier-partages/fichier-partages.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { MesFichiersComponent } from './mes-fichiers/mes-fichiers.component';
import { FichierRoutingModule } from './fichier-routing.module';



@NgModule({
  declarations: [FichierDesAutresComponent, FichierPartagesComponent, InvitationsComponent,
  MesFichiersComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CommonModule, 
    FichierRoutingModule,
    NgbModule
  ]
})
export class FichierModule { }
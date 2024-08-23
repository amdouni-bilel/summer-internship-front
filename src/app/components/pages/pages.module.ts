import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms/terms.component';
import { SearchComponent } from './search/search.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import 'mousetrap'
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgSelectModule } from '@ng-select/ng-select';
import { MesFichiersComponent } from './fichier/mes-fichiers/mes-fichiers.component';
import { FichierDesAutresComponent } from './fichier/fichier-des-autres/fichier-des-autres.component';
import { InvitationsComponent } from './fichier/invitations/invitations.component';
import { FichierPartagesComponent } from './fichier/fichier-partages/fichier-partages.component';


@NgModule({
  declarations: [TermsComponent, SearchComponent, GalleryComponent, FaqsComponent,
     EmptyPageComponent, EditProfileComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    GalleryModule.forRoot(),
    NgSelectModule
  ]
})
export class PagesModule { }

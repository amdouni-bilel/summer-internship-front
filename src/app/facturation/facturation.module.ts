import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureComponent } from './facture/facture.component';
import { FactureRoutingModule } from './Facture-routing.module';
import { ListComponent } from './list/list.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { PopupfacComponent } from './popupfac/popupfac.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { OcrService } from './ocr.service';
import { ImagePopupComponentComponent } from './image-popup-component/image-popup-component.component';
import { EditComponent } from './edit/edit.component';
import { ToastrModule } from 'ngx-toastr';
import { ForfaitairesComponent } from './forfaitaires/forfaitaires.component';
import { EditfraisComponent } from './editfrais/editfrais.component';
import { ListcommentComponent } from './listcomment/listcomment.component';
import { ComptableComponent } from './comptable/comptable.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommentmodelComponent } from './commentmodel/commentmodel.component';
import { ComptableimageComponent } from './comptableimage/comptableimage.component';



@NgModule({
 
  declarations: [FactureComponent, ListComponent,CommentaireComponent, PopupfacComponent, ImagePopupComponentComponent, EditComponent,
     ForfaitairesComponent, EditfraisComponent, ListcommentComponent, ComptableComponent, CommentmodelComponent, ComptableimageComponent],
  imports: [
    CommonModule,
    FactureRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    ToastrModule.forRoot(),
    MatDialogModule
  ],
  providers: [OcrService]
})
export class FacturationModule { }

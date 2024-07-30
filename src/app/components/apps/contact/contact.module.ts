import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact1Component } from './contact1/contact1.component';
import { Contact2Component } from './contact2/contact2.component';
import { ContactRoutingModule } from './contact-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [Contact1Component, Contact2Component],
  imports: [
    CommonModule,
    ContactRoutingModule,
    NgbModule
  ]
})
export class ContactModule { }

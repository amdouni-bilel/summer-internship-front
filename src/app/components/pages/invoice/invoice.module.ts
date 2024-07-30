import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { Invoice1Component } from './invoice1/invoice1.component';
import { Invoice2Component } from './invoice2/invoice2.component';
import { Invoice3Component } from './invoice3/invoice3.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [AddInvoiceComponent, EditInvoiceComponent, InvoiceListComponent, Invoice1Component, Invoice2Component, Invoice3Component],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    NgbModule
  ]
})
export class InvoiceModule { }

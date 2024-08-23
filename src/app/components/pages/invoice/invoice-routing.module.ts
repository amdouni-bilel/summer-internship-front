import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { Invoice1Component } from './invoice1/invoice1.component';
import { Invoice2Component } from './invoice2/invoice2.component';
import { Invoice3Component } from './invoice3/invoice3.component';

const routes : Routes = [
    {
        path:'',
        children: [
            { path: 'invoice-list', component: InvoiceListComponent},
            { path: 'invoice-1', component: Invoice1Component},
            { path: 'invoice-2', component: Invoice2Component},
            { path: 'invoice-3', component: Invoice3Component},
            { path: 'invoice-add', component: AddInvoiceComponent},
            { path: 'invoice-edit', component: EditInvoiceComponent},
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class InvoiceRoutingModule { }
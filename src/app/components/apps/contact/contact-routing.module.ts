import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact1Component } from './contact1/contact1.component';
import { Contact2Component } from './contact2/contact2.component';

const routes : Routes = [
    {
        path:'',
        children:[
            {
                path:'contact-list-1',
                component: Contact1Component
            },
            {
                path:'contact-list-2',
                component:Contact2Component
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }
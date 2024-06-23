import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComposeComponent } from './email-compose/email-compose.component';
import { EmailInboxComponent } from './email-inbox/email-inbox.component';
import { EmailReadComponent } from './email-read/email-read.component';

const routes : Routes = [
    {
        path:'',
        children: [
            { path: 'compose', component: EmailComposeComponent},
            { path: 'inbox', component: EmailInboxComponent},
            { path: 'read', component: EmailReadComponent}
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class EmailRoutingModule { }
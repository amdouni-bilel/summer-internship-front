import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserList1Component } from './user-list1/user-list1.component';
import { UserList2Component } from './user-list2/user-list2.component';
import { UserList3Component } from './user-list3/user-list3.component';
import { UserList4Component } from './user-list4/user-list4.component';

const routes : Routes = [
    {
        path:'',
        children:[
            {
                path:'users-list-1',
                component: UserList1Component
            },
            {
                path:'users-list-2',
                component: UserList2Component
            },
            {
                path:'users-list-3',
                component: UserList3Component
            },
            {
                path:'users-list-4',
                component: UserList4Component
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserlistRoutingModule { }
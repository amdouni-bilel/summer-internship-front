import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { DefaultTableComponent } from './default-table/default-table.component';


const routes : Routes = [
    {
        path:'',
        children:[
            {
                path:'default',
                component: DefaultTableComponent
            },
            {
                path:'data',
                component: DataTableComponent
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }
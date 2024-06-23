import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManager1Component } from './file-manager1/file-manager1.component';
import { FileManager2Component } from './file-manager2/file-manager2.component';

const routes : Routes = [
    {
        path:'',
        children:[
            {
                path:'file-manager-1',
                component: FileManager1Component
            },
            {
                path:'file-manager-2',
                component:FileManager2Component
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilemanagerRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexComponent } from './apex/apex.component';
import { C3Component } from './c3/c3.component';
import { ChartistComponent } from './chartist/chartist.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EchartComponent } from './echart/echart.component';


const routes : Routes = [
    {
        path:'',
        children:[
            { path:'apex', component: ApexComponent },
            { path:'chartjs', component: ChartjsComponent },
            { path:'echart', component: EchartComponent },
            { path:'chartist', component: ChartistComponent },
            { path:'c3', component: C3Component }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRoutingModule { }
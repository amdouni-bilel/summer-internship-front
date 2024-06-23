import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pricing1Component } from './pricing1/pricing1.component';
import { Pricing2Component } from './pricing2/pricing2.component';
import { Pricing3Component } from './pricing3/pricing3.component';

const routes : Routes = [
    {
        path:'',
        children: [
            { path: 'pricing-1', component: Pricing1Component},
            { path: 'pricing-2', component: Pricing2Component},
            { path: 'pricing-3', component: Pricing3Component},
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PricingRoutingModule { }
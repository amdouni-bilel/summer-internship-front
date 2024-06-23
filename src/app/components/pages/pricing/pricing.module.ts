import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pricing1Component } from './pricing1/pricing1.component';
import { Pricing2Component } from './pricing2/pricing2.component';
import { Pricing3Component } from './pricing3/pricing3.component';
import { PricingRoutingModule } from './pricing-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [Pricing1Component, Pricing2Component, Pricing3Component],
  imports: [
    CommonModule,
    PricingRoutingModule,
    NgbModule
  ]
})
export class PricingModule { }

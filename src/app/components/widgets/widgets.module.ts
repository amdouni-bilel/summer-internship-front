import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWidgetsComponent } from './chart-widgets/chart-widgets.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [ChartWidgetsComponent, WidgetsComponent],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    NgCircleProgressModule.forRoot(),
    NgApexchartsModule,
    ChartsModule
  ]
})
export class WidgetsModule { }

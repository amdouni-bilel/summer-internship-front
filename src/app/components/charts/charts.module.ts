import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexComponent } from './apex/apex.component';
import { C3Component } from './c3/c3.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EchartComponent } from './echart/echart.component';
import { ChartsRoutingModule } from './charts-routing.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistComponent } from './chartist/chartist.component';


@NgModule({
  declarations: [ApexComponent, C3Component, ChartjsComponent, EchartComponent, ChartistComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgApexchartsModule,
    ChartistModule,
    ChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ]
})
export class ChartModule { }

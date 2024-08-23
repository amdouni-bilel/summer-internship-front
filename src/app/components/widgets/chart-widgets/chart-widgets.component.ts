import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/chart/chartwidgets';


@Component({
  selector: 'app-chart-widgets',
  templateUrl: './chart-widgets.component.html',
  styleUrls: ['./chart-widgets.component.scss']
})
export class ChartWidgetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Apex Charts
  public ApexData1 = chartData.ApexData1;
  public ApexData2 = chartData.ApexData2;
  public ApexData3 = chartData.ApexData3;

  //Sparklines Chart
  public ApexSparklines1 = chartData.ApexSparklines1;
  public ApexSparklines2 = chartData.ApexSparklines2;
  public ApexSparklines3 = chartData.ApexSparklines3;
  public ApexSparklines4 = chartData.ApexSparklines4;

  //CryptoChart

  public lineChartOptions = chartData.lineChartOptions;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartType = chartData.lineChartType;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartColors = chartData.lineChartColors;
  public lineChartData = chartData.lineChartData;
  public lineChartData1 = chartData.lineChartData1;
  public lineChartData2= chartData.lineChartData2;
  public lineChartData3 = chartData.lineChartData3;
}
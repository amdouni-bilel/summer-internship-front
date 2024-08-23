import { Component, OnInit } from '@angular/core';
import * as chartdata from '../../../shared/data/chart/echart'

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.scss']
})
export class EchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public echartLineBarOption = chartdata.echartLineBarOption;
  public echartLineOption = chartdata.echartLineOption;
  public echartVerticalLineBarChart = chartdata.echartVerticalLineBarChart;
  public echartVerticalLineChart = chartdata.echartVerticalLineChart;
  public echartBarChart = chartdata.echartBarChart;
  public echartHorizontalbarChart = chartdata.echartHorizontalbarChart;
  public echartSingleLineChart = chartdata.echartSingleLineChart;
  public echartSingleSmoothLineChart = chartdata.echartSingleSmoothLineChart;
}

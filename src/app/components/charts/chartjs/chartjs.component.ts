import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import * as chartData from '../../../shared/data/chart/chartjs';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit, AfterViewInit {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  @ViewChild('Canvas') Canvas: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const canvas = (<HTMLCanvasElement>this.Canvas.nativeElement).getContext('2d');
    const gradient = canvas.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, '#20c2fa');
    gradient.addColorStop(1, '#705ec8');
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: '# of Votes',
          data: [14, 12, 34, 25, 24, 20],
          backgroundColor: gradient
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,

        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              max: 80
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 11
            }
          }]
        }
      }
    });

    //Area Chart
    const ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    const areaGradient1 = ctx.createLinearGradient(0, 350, 0, 0);
    areaGradient1.addColorStop(0, 'rgba(241, 0, 117,0)');
    areaGradient1.addColorStop(1, 'rgba(241, 0, 117,.5)');

    const areaGradient2 = ctx.createLinearGradient(0, 280, 0, 0);
    areaGradient2.addColorStop(0, 'rgba(86, 70, 255,0)');
    areaGradient2.addColorStop(1, 'rgba(86, 70, 255,.5)');
    const area_chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25 ],
          borderColor: '#fb1c52',
          borderWidth: 1,
          backgroundColor: areaGradient1
        }, {
          data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45],
          borderColor: '#705ec8',
          borderWidth: 1,
          backgroundColor: areaGradient2
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              max: 80
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 11
            }
          }]
        }
      }
    })

  }

  // Bar Chart
  public barChartOptions = chartData.barChartOptions;
  public barChartLabels = chartData.barChartLabels;
  public barChartType = chartData.barChartType;
  public barChartLegend = chartData.barChartLegend;
  public barChartPlugins = chartData.barChartPlugins;
  public barChartData = chartData.barChartData;
  public barChartColors = chartData.barChartColors;

  //Transparent Bar Chart
  public transparentBarOptions = chartData.transparentBarOptions;
  public transparentBarLabels = chartData.transparentBarLabels;
  public transparentBarType = chartData.transparentBarType;
  public transparentBarLegend = chartData.transparentBarLegend;
  public transparentBarPlugins = chartData.transparentBarPlugins;
  public transparentBarData = chartData.transparentBarData;
  public transparentBarColors = chartData.transparentBarColors;

  //Gradient Bar Chart
  public gradientBarOptions = chartData.gradientBarOptions;
  public gradientBarLabels = chartData.gradientBarLabels;
  public gradientBarType = chartData.gradientBarType;
  public gradientBarLegend = chartData.gradientBarLegend;
  public gradientBarPlugins = chartData.gradientBarPlugins;
  public gradientBarData = chartData.gradientBarData;
  public gradientBarColor = chartData.gradientBarColor;

  //Horizontal Bar chart
  public HorizontalBarOptions = chartData.HorizontalBarOptions;
  public HorizontalBarLabels = chartData.HorizontalBarLabels;
  public HorizontalBarType = chartData.HorizontalBarType;
  public HorizontalBarLegend = chartData.HorizontalBarLegend;
  public HorizontalBarPlugins = chartData.HorizontalBarPlugins;
  public HorizontalBarData = chartData.HorizontalBarData;
  public HorizontalBarColors = chartData.HorizontalBarColors;

  //Horizontal Bar Chart
  public Horizontal2Options = chartData.Horizontal2Options;
  public Horizontal2Labels = chartData.Horizontal2Labels;
  public Horizontal2Type = chartData.Horizontal2Type;
  public Horizontal2Legend = chartData.Horizontal2Legend;
  public Horizontal2Plugins = chartData.Horizontal2Plugins;
  public Horizontal2Data = chartData.Horizontal2Data;
  public Horizontal2Colors = chartData.Horizontal2Colors;

  //Vertical Stacked Bar
  public verticalStackOptions = chartData.verticalStackOptions;
  public verticalStackLabels = chartData.verticalStackLabels;
  public verticalStackType = chartData.verticalStackType;
  public verticalStackLegend = chartData.verticalStackLegend;
  public verticalStackData = chartData.verticalStackData;
  public verticalStackColors = chartData.verticalStackColors;

  //Horizontal Stacked Bar
  public horizontalStackOptions = chartData.horizontalStackOptions;
  public horizontalStackLabels = chartData.horizontalStackLabels;
  public horizontalStackType = chartData.horizontalStackType;
  public horizontalStackLegend = chartData.horizontalStackLegend;
  public horizontalStackData = chartData.horizontalStackData;
  public horizontalStackColors = chartData.horizontalStackColors;

  //Line Chart
  public lineChartOptions = chartData.lineChartOptions
  public lineChartLabels = chartData.lineChartLabels
  public lineChartType = chartData.lineChartType
  public lineChartLegend = chartData.lineChartLegend
  public lineChartData = chartData.lineChartData
  public lineChartColors = chartData.lineChartColors

  //Doughnut and Pie Chart Data
  public PieChartLabels = chartData.PieChartLabels;
  public PieChartData = chartData.PieChartData;
  public PieChartOptions = chartData.PieChartOptions;
  public PieChartType = chartData.PieChartType;
  public DoughnutChartType = chartData.DoughnutChartType;


  // events
  public chartClicked(e: any): void { }

  public chartHovered(e: any): void { }

}

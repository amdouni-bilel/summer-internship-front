import { Component, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { recentActivitiesData, recentCustomersData } from 'src/app/shared/data/dashboard/dashboard';
import * as chartData from '../../../shared/data/chart/dashboard'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  recentActivities = recentActivitiesData;
  recentCustomers = recentCustomersData;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    const scrollbar3 = document.querySelector('.scrollbar3');
    let ps = new PerfectScrollbar(scrollbar3);
  }

  public ApexData1 = chartData.ApexData1;
  public ApexData2 = chartData.ApexData2;
  public ApexData3 = chartData.ApexData3;
  public ApexData4 = chartData.ApexData4;
  public echartLineBarOption = chartData.echartLineBarOption;


}

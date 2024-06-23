import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/navigation'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  html1 = codeData.naviHTML1;
  ts1 = codeData.naviTS1;
  html2 = codeData.naviHTML2;
  ts2 = codeData.naviTS2;
  html3 = codeData.naviHTML3;
  ts3 = codeData.naviTS3;
  html4 = codeData.naviHTML4;
  ts4 = codeData.naviTS4;
  html5 = codeData.naviHTML5;
  ts5 = codeData.naviTS5;
  html6 = codeData.naviHTML6;
  ts6 = codeData.naviTS6;

}
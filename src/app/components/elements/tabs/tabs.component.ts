import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/tabs'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  TabStyle1;
  TabStyle2;
  TabStyle3;
  TabStyle4;
  constructor() { }

  ngOnInit(): void {
  }
  html5 = codeData.tabsHTML1;
  ts5 = codeData.tabsTS1;
  html6 = codeData.tabsHTML2;
  ts6 = codeData.tabsTS2;
  html7 = codeData.tabsHTML3;
  ts7 = codeData.tabsTS3;
  html8 = codeData.tabsHTML4;
  ts8 = codeData.tabsTS4;
}

import { animation, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/panels'

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  public isCollapsed1: boolean = false;
  public isCollapsed2: boolean = false;
  public isCollapsed3: boolean = false;
  public isCollapsed4: boolean = false;
  public isCollapsed5: boolean = false;
  public isCollapsed6: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
  
  panelToggle1(){
    this.isCollapsed1 = !this.isCollapsed1;
  }
  panelToggle2(){
    this.isCollapsed2 = !this.isCollapsed2;
  }
  panelToggle3(){
    this.isCollapsed3 = !this.isCollapsed3;
  }
  panelToggle4(){
    this.isCollapsed4 = !this.isCollapsed4;
  }
  panelToggle5(){
    this.isCollapsed5 = !this.isCollapsed5;
  }
  panelToggle6(){
    this.isCollapsed6 = !this.isCollapsed6;

  }

  html1 = codeData.panelsHTML1;
  ts1 = codeData.panelsTS1;
  html2 = codeData.panelsHTML2;
  ts2 = codeData.panelsTS2;
  html3 = codeData.panelsHTML3;
  ts3 = codeData.panelsTS3;
  html4 = codeData.panelsHTML4;
  ts4 = codeData.panelsTS4;
  html5 = codeData.panelsHTML5;
  ts5 = codeData.panelsTS5;

}

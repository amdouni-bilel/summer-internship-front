import { Component, OnInit} from '@angular/core';
import * as codeData from '../../../shared/codeViewData/accordion'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  public isCollapsed = false;
  public isFirstCollapsed = false;
  public isSecondCollapsed = false;
  public isFirstGradient = false;
  public isSecondGradient = false;

  html1 = codeData.accordionhtml1;
  ts1 = codeData.accordionts1;
  html2 = codeData.accordionhtml2;
  ts2 = codeData.accordionts2;
  html3 = codeData.accordionhtml3;
  ts3 = codeData.accordionts3;
  html4 = codeData.accordionhtml4;
  ts4 = codeData.accordionts4;
  html5 = codeData.accordionhtml5;
  ts5 = codeData.accordionts5;
 
  constructor() { }

  ngOnInit(): void {
    
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
  first() {
    this.isFirstCollapsed = !this.isFirstCollapsed;
  }
  second() {
    this.isSecondCollapsed = !this.isSecondCollapsed;
  }
  both() {
    this.isFirstCollapsed = !this.isFirstCollapsed;
    this.isSecondCollapsed = !this.isSecondCollapsed;
  }
  FirstGradient() {
    this.isFirstGradient = !this.isFirstGradient;
    if (this.isFirstGradient == true) {
      document.querySelector('.firstgradient').classList.remove('collapsed');
    } else {
      document.querySelector('.firstgradient').classList.add('collapsed');
    }
  }
  SecondGradient() {
    this.isSecondGradient = !this.isSecondGradient;
    if (this.isSecondGradient == true) {
      document.querySelector('.secondgradient').classList.remove('collapsed');
    } else {
      document.querySelector('.secondgradient').classList.add('collapsed');
    }
  }

}

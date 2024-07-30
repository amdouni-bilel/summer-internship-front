import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/tooltips'

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // document.querySelector('.my-custom-class').classList.add('tooltip-primary')
  }

  html1 = codeData.tooltipsHTML1;
  ts1 = codeData.tooltipsTS1;
  html2 = codeData.tooltipsHTML2;
  ts2 = codeData.tooltipsTS2;

}

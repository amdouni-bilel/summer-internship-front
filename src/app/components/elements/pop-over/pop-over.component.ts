import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/popover'


@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopOverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  html1 = codeData.popoverHTML1;
  ts1 = codeData.popoverTS1;
  html2 = codeData.popoverHTML2;
  ts2 = codeData.popoverTS2;
  css2 = codeData.popoverCSS2;
  html3 = codeData.popoverHTML3;
  ts3 = codeData.popoverTS3;
  css3 = codeData.popoverCSS3;
 
}



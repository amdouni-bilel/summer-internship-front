import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/breadcrumb'

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  html1 = codeData.breadcrumbHTML1;
  ts1 = codeData.breadcrumbTS1;
  html2 = codeData.breadcrumbHTML2;
  ts2 = codeData.breadcrumbTS2;
  html3 = codeData.breadcrumbHTML3;
  ts3 = codeData.breadcrumbTS3;
  html4 = codeData.breadcrumbHTML4;
  ts4 = codeData.breadcrumbTS4;
  html5 = codeData.breadcrumbHTML5;
  ts5 = codeData.breadcrumbTS5;
  html6 = codeData.breadcrumbHTML6;
  ts6 = codeData.breadcrumbTS6;
  html7 = codeData.breadcrumbHTML7;
  ts7 = codeData.breadcrumbTS7;

}

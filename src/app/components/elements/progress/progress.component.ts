import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/progress'

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  html1 = codeData.progressHTML1;
  ts1 = codeData.progressTS1;
  html2 = codeData.progressHTML2;
  ts2 = codeData.progressTS2;
  html3 = codeData.progressHTML3;
  ts3 = codeData.progressTS3;
  html4 = codeData.progressHTML4;
  ts4 = codeData.progressTS4;
  html5 = codeData.progressHTML5;
  ts5 = codeData.progressTS5;
  html6 = codeData.progressHTML6;
  ts6 = codeData.progressTS6;

}

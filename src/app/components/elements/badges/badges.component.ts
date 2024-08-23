import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/badges'

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  html1 = codeData.badgesHTML1;
  ts1 = codeData.badgesTS1;
  html2 = codeData.badgesHTML2;
  ts2 = codeData.badgesTS2;
  html3 = codeData.badgesHTML3;
  ts3 = codeData.badgesTS3;
  html4 = codeData.badgesHTML4;
  ts4 = codeData.badgesTS4;
  html5 = codeData.badgesHTML5;
  ts5 = codeData.badgesTS5;
  html6 = codeData.badgesHTML6;
  ts6 = codeData.badgesTS6;
  html7 = codeData.badgesHTML7;
  ts7 = codeData.badgesTS7;

}

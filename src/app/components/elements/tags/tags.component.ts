import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/tags'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  html1 = codeData.tagsHTML1;
  ts1 = codeData.tagsTS1;
  html2 = codeData.tagsHTML2;
  ts2 = codeData.tagsTS2;
  html3 = codeData.tagsHTML3;
  ts3 = codeData.tagsTS3;
  html4 = codeData.tagsHTML4;
  ts4 = codeData.tagsTS4;
  html5 = codeData.tagsHTML5;
  ts5 = codeData.tagsTS5;
  html6 = codeData.tagsHTML6;
  ts6 = codeData.tagsTS6;
  html7 = codeData.tagsHTML7;
  ts7 = codeData.tagsTS7;
  html8 = codeData.tagsHTML7;
  ts8 = codeData.tagsTS7;

}

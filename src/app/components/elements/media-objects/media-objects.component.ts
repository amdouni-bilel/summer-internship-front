import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/mediaobjects'

@Component({
  selector: 'app-media-objects',
  templateUrl: './media-objects.component.html',
  styleUrls: ['./media-objects.component.scss']
})
export class MediaObjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  html1 = codeData.mediaHTML1;
  ts1 = codeData.mediaTS1;
  html2 = codeData.mediaHTML2;
  ts2 = codeData.mediaTS2;
  html3 = codeData.mediaHTML3;
  ts3 = codeData.mediaTS3;
  html4 = codeData.mediaHTML4;
  ts4 = codeData.mediaTS4;
  html5 = codeData.mediaHTML5;
  ts5 = codeData.mediaTS5;
}

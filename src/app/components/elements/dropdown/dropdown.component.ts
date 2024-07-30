import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownsClass = [
    { class : 'light'},
    { class : 'primary'},
    { class : 'success'},
    { class : 'info'},
    { class : 'warning'},
    { class : 'danger'},
  ]
  html1 = codeData.dropdownHTML1;
  ts1 = codeData.dropdownTS1;
  html2 = codeData.dropdownHTML2;
  ts2 = codeData.dropdownTS2;
  html3 = codeData.dropdownHTML3;
  ts3 = codeData.dropdownTS3;
  html4 = codeData.dropdownHTML4;
  ts4 = codeData.dropdownTS4;
  html5 = codeData.dropdownHTML5;
  ts5 = codeData.dropdownTS5;
  html6 = codeData.dropdownHTML6;
  ts6 = codeData.dropdownTS6;
  html7 = codeData.dropdownHTML7;
  ts7 = codeData.dropdownTS7;
  html8 = codeData.dropdownHTML8;
  ts8 = codeData.dropdownTS8;
  html9 = codeData.dropdownHTML9;
  ts9 = codeData.dropdownTS9;
  html10 = codeData.dropdownHTML10;
  ts10 = codeData.dropdownTS10;
}

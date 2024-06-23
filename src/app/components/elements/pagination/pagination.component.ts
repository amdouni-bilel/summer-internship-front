import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/pagination'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  page = 1; 
  alphabetpage = 1; 
  basicPage = 1; 
  advPage = 1;
  alignPage = 1;
  globlePage = 1;
  isDisabled = true;
  currentPage = 3;
  constructor() { }

  ngOnInit(): void {
  }
  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  html1 = codeData.paginationHTML1;
  ts1 = codeData.paginationTS1;
  html2 = codeData.paginationHTML2;
  ts2 = codeData.paginationTS2;
  html3 = codeData.paginationHTML3;
  ts3 = codeData.paginationTS3;
  html4 = codeData.paginationHTML4;
  ts4 = codeData.paginationTS4;
  html5 = codeData.paginationHTML5;
  ts5 = codeData.paginationTS5;
  html6 = codeData.paginationHTML6;
  ts6 = codeData.paginationTS6;
  html7 = codeData.paginationHTML7;
  ts7 = codeData.paginationTS7;
}

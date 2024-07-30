import { Component, OnInit } from '@angular/core';
import { DefaultTableData } from 'src/app/shared/data/table/defaultTableData';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.scss']
})
export class DefaultTableComponent implements OnInit {

  public defaultData = DefaultTableData;
  constructor() { }

  ngOnInit(): void {
  }

}

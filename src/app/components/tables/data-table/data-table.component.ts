import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
import { companyDB } from 'src/app/shared/data/table/datatable';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

    constructor() {
      this.company = companyDB.data;
     }

    ngOnInit(): void {
      let dataTable1 = new DataTable("#myTable1", {
        searchable: true,
        fixedHeight: true,
      });

    }
    public company = [];

    loadingIndicator: boolean = true;
    reorderable: boolean = true;
    columns = [
      { prop: 'name' },
      { name: 'Gender' },
      { name: 'Company' }
    ];


  }

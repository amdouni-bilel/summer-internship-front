import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
@Component({
  selector: 'app-user-list1',
  templateUrl: './user-list1.component.html',
  styleUrls: ['./user-list1.component.scss']
})
export class UserList1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let dataTable1 = new DataTable("#myTable", {
      searchable: true,
      fixedHeight: true,
    });
  }

  sayHello() {
    console.log("hello")
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-generic-table',
  templateUrl: './call-generic-table.component.html',
  styleUrls: ['./call-generic-table.component.scss']
})
export class CallGenericTableComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  tableData = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 },
    { id: 3, name: 'Alice', age: 35 },
    { id: 4, name: 'Bob', age: 40 },
    { id: 5, name: 'Eve', age: 28 },
    { id: 6, name: 'Alex', age: 32 },
    { id: 7, name: 'Emily', age: 29 },
    { id: 8, name: 'David', age: 45 },
    { id: 9, name: 'Sarah', age: 33 },
    { id: 10, name: 'Michael', age: 37 },
    { id: 11, name: 'Sophia', age: 26 },
    { id: 12, name: 'Liam', age: 31 },
    { id: 13, name: 'Olivia', age: 39 },
    { id: 14, name: 'Noah', age: 27 },
    { id: 15, name: 'Emma', age: 34 },
    { id: 16, name: 'William', age: 36 },
    { id: 17, name: 'Ava', age: 41 },
    { id: 18, name: 'James', age: 38 },
    { id: 19, name: 'Mia', age: 42 },
    { id: 20, name: 'Benjamin', age: 43 },
    { id: 21, name: 'Charlotte', age: 44 },
    { id: 22, name: 'Logan', age: 46 },
    { id: 23, name: 'Amelia', age: 47 },
    { id: 24, name: 'Lucas', age: 48 },
    { id: 25, name: 'Evelyn', age: 49 }
  ];


  tableColumns = ['ID', 'Name', 'Age'];

  pageSize = 5;

  onPageChange(pageNumber: number): void {
    console.log('Page changed to:', pageNumber);
  }
}

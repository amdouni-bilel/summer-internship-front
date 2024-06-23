import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent  {

  @Input() showPagination: boolean = true;
  @Input() showSearch: boolean = true;
  @Input() pageSizeOptions: number[] = [5, 10, 20];
  @Input() pageSize: number = 5;
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Input() columns: string[] = [];
  @Input() data: any[] = [];

  filteredData: any[] = [];

  constructor() { }

  ngOnChanges(): void {
    this.updateFilteredData();
  }

  onPageSizeChange(): void {
    this.updateFilteredData();
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updateFilteredData();
  }

  onSearch(searchValue: string): void {
  }

  private updateFilteredData(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredData = this.data.slice(startIndex, endIndex);
  }
}


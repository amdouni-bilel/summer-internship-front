import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Input() pageSize: number;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onPageChange(pageNumber: number): void {
    this.pageChange.emit(pageNumber);
  }

  getPagesArray(): number[] {
    const pagesArray = [];
    for (let i = 0; i < this.totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }
}

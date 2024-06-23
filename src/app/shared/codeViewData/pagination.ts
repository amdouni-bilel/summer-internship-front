export let paginationHTML1 = 
`<p>Default pagination:</p>
<ngb-pagination [collectionSize]="70" [(page)]="basicPage" aria-label="Default pagination"></ngb-pagination>
<p>No direction links:</p>
<ngb-pagination [collectionSize]="70" [(page)]="basicPage" [directionLinks]="false"></ngb-pagination>
<p>With boundary links:</p>
<ngb-pagination [collectionSize]="70" [(page)]="basicPage" [boundaryLinks]="true"></ngb-pagination>
<hr>
<pre>Current page: {{basicPage}}</pre>`
export let paginationTS1 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  basicPage = 1;
  constructor() { }

  ngOnInit(): void {
  }

}`
export let paginationHTML2 = 
`<p>Restricted size, no rotation:</p>
<ngb-pagination [collectionSize]="120" [(page)]="advPage" [maxSize]="5" [boundaryLinks]="true">
</ngb-pagination>
<p>Restricted size with rotation:</p>
<ngb-pagination [collectionSize]="120" [(page)]="advPage" [maxSize]="5" [rotate]="true"
    [boundaryLinks]="true"></ngb-pagination>
<p>Restricted size with rotation and no ellipses:</p>
<ngb-pagination [collectionSize]="120" [(page)]="advPage" [maxSize]="5" [rotate]="true" [ellipses]="false"
    [boundaryLinks]="true"></ngb-pagination>
<hr>
<pre>Current page: {{advPage}}</pre>`
export let paginationTS2 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  advPage = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
`
export let paginationHTML3 = 
`<p>A pagination with customized links:</p>
<ngb-pagination [collectionSize]="70" [(page)]="alphabetpage" aria-label="Custom pagination">
    <ng-template ngbPaginationPrevious>Prev</ng-template>
    <ng-template ngbPaginationNext>Next</ng-template>
    <ng-template ngbPaginationNumber let-p>{{ getPageSymbol(p) }}</ng-template>
</ngb-pagination>
<hr>

<pre>Current page: {{alphabetpage}}</pre>`
export let paginationTS3 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  alphabetpage = 1;
  constructor() { }

  ngOnInit(): void {
  }
  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

}
`
export let paginationHTML4 = 
`<ngb-pagination [collectionSize]="50" [(page)]="currentPage" size="lg"></ngb-pagination>
<ngb-pagination [collectionSize]="50" [(page)]="currentPage"></ngb-pagination>
<ngb-pagination [collectionSize]="50" [(page)]="currentPage" size="sm"></ngb-pagination>`
export let paginationTS4 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
 
  currentPage = 3;
  constructor() { }

  ngOnInit(): void {
  }
}
`
export let paginationHTML5 = 
`<<p>Change the alignment of pagination components with flexbox utilities.</p>
<ngb-pagination class="d-flex justify-content-start" [collectionSize]="70" [(page)]="alignPage">
</ngb-pagination>
<ngb-pagination class="d-flex justify-content-center" [collectionSize]="70" [(page)]="alignPage">
</ngb-pagination>
<ngb-pagination class="d-flex justify-content-end" [collectionSize]="70" [(page)]="alignPage">
</ngb-pagination>`
export let paginationTS5 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  alignPage = 1;
  constructor() { }

  ngOnInit(): void {
  }
}
`
export let paginationHTML6 = 
`<p>Pagination control can be disabled:</p>
<ngb-pagination [collectionSize]="70" [(page)]="page" [disabled]='isDisabled'></ngb-pagination>
<hr>
<button class="btn btn-sm btn-outline-primary" (click)="toggleDisabled()">
    Toggle disabled
</button>`
export let paginationTS6 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  page = 1;
  isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
`
export let paginationHTML7 = 
`<p>This pagination uses custom default values</p>
<ngb-pagination [collectionSize]="70" [(page)]="globlePage"></ngb-pagination>`
export let paginationTS7 = 
`
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  globlePage = 1;
  constructor() { }

  ngOnInit(): void {
  }
}
`
import { Component, OnInit } from '@angular/core';
import { blogContent2 } from 'src/app/shared/data/blog/blog2';

@Component({
  selector: 'app-blog2',
  templateUrl: './blog2.component.html',
  styleUrls: ['./blog2.component.scss']
})
export class Blog2Component implements OnInit {

  public CardData = blogContent2
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { blogContent1 } from 'src/app/shared/data/blog/blog1';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.scss']
})
export class Blog1Component implements OnInit {
  public CardData = blogContent1;
  constructor() { }

  ngOnInit(): void {
  }

}

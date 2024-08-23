import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent implements OnInit {
  public isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
    
  }

 

}

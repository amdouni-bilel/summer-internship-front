import { Component, OnInit } from '@angular/core';
import { on } from 'process';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public isCollapsed = false;
  public isClosed = false;
  
  constructor() { }

  ngOnInit(): void {

  }
  Collapsetoggle() {
    this.isCollapsed = !this.isCollapsed;
  }
  Closetoggle() {
    this.isClosed = true
  }
  cardClose(){
    document.addEventListener('toggle', () => {
      document.querySelector('card').classList.add('card-collapsed');
    })
  }
  



}

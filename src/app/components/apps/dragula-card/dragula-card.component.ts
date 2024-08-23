import { Component, OnInit } from '@angular/core';
import {dragula} from 'ng2-dragula';
@Component({
  selector: 'app-dragula-card',
  templateUrl: './dragula-card.component.html',
  styleUrls: ['./dragula-card.component.scss']
})
export class DragulaCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    dragula(
      [
        document.querySelector('#left-defaults'), 
        document.querySelector('#right-defaults'),
        document.querySelector('#left-events'),
      ]);
  }

}

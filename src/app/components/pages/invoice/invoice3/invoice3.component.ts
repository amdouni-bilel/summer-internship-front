import { Component, OnInit } from '@angular/core';
import { Invoice3Data } from 'src/app/shared/data/invoice/invoice3';

@Component({
  selector: 'app-invoice3',
  templateUrl: './invoice3.component.html',
  styleUrls: ['./invoice3.component.scss']
})
export class Invoice3Component implements OnInit {

  public InvoiceData = Invoice3Data;
  active;
  Tab1 : boolean = true;
  Tab2 : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  invoiceShow(){
    this.Tab1 = false;
    this.Tab2 = true;
  }

}

import { Component, OnInit } from '@angular/core';
import { invoiceListData } from 'src/app/shared/data/invoice/invoicelist';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  public invoiceList = invoiceListData;
  constructor() { }

  ngOnInit(): void {
  }

}

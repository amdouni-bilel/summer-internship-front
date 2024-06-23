import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FactureClass } from '../FactureClass';
import { OcrService } from '../ocr.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
 

  facture

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog, private service :OcrService) { }

  ngOnInit(): void {
    console.log(this.data.facture)
    this.facture = this.data.facture
  }

  save(): void {

    this.service.updateItem(this.facture)
    this.dialog.closeAll();
  }


  cancel(): void {
    // Close the dialog without any changes
    this.dialog.closeAll();
    }


}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OcrService } from '../ocr.service';

@Component({
  selector: 'app-editfrais',
  templateUrl: './editfrais.component.html',
  styleUrls: ['./editfrais.component.scss']
})
export class EditfraisComponent implements OnInit {

  frais
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog, private service :OcrService) { }

  ngOnInit(): void {
    this.frais = this.service.getfrais();
  }


  save(): void {
    this.service.updatefrais(this.frais)
    this.dialog.closeAll();
  }


  cancel(): void {
    this.dialog.closeAll();
    }

}

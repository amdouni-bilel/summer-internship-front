import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comptableimage',
  templateUrl: './comptableimage.component.html',
  styleUrls: ['./comptableimage.component.scss']
})
export class ComptableimageComponent implements OnInit {

  src
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.src = this.data.selectedImage
  }

}

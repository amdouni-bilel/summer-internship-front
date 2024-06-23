import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-commentmodel',
  templateUrl: './commentmodel.component.html',
  styleUrls: ['./commentmodel.component.scss']
})
export class CommentmodelComponent implements OnInit {
  comments
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.comments = this.data
    console.log(this.data)
  }

  dismiss(){
    this.dialog.closeAll()
  }

}

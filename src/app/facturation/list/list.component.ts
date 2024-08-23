import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponentComponent } from '../image-popup-component/image-popup-component.component';
import { OcrService } from '../ocr.service';

import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
   items;
  constructor(private dialog: MatDialog,private service:OcrService) { }
  isEditing = false
  ngOnInit(): void {
    this.items = this.service.containers;
  }

  openImagePopup(item) {
    const dialogRef = this.dialog.open(ImagePopupComponentComponent, {
      width: '500px',
      data: { selectedImage: item.image }
    });
  
  }

  downloadImage(item) {
    const file = item.image ;
    if (file) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file);
      link.download = file.name;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
      URL.revokeObjectURL(link.href);
    }
  }
  


  openEdit(item): void {
   
    const dialogRef = this.dialog.open(EditComponent, {
      width: '500px',
      data: { facture: item }
    });
  }


  deleteItem(item){
    console.log("Delete ")
  this.service.deleteItem(item)
  }

}

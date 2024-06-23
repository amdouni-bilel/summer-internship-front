import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-popup-component',
  templateUrl: './image-popup-component.component.html',
  styleUrls: ['./image-popup-component.component.scss']
})
export class ImagePopupComponentComponent implements OnInit {
  selectedImage: File;
  imageSrc: string | ArrayBuffer;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.selectedImage = this.data.selectedImage;
    this.displayImage();
  }

  displayImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result;
    };
    reader.readAsDataURL(this.selectedImage);
  }
}

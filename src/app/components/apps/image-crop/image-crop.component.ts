import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CropperComponent, ImageCropperResult } from 'angular-cropperjs';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.scss']
})
export class ImageCropComponent implements OnInit {

  @ViewChild('angularCropper') public angularCropper: CropperComponent

  config = [];
  imageUrl = "../../assets/images/photos/1.jpg";

  resultImage: any;
  resultResult: any;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
  }

  CropMe() {
    this.angularCropper.exportCanvas();
  }
  Zoom() {
    this.angularCropper.cropper.zoom(1.1);
    this.angularCropper.cropperOptions = Object.assign({
      zoomable: true
    }, this.angularCropper.cropperOptions)

  }
  resultImageFun(event: ImageCropperResult) {
    this.resultResult = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/png');

  }
  checkstatus(event: any) {
    console.log(event.blob);
    if (event.blob === undefined) {
      return;
    }
    // this.resultResult = event.blob;
    let urlCreator = window.URL;
    this.resultResult = this.sanitizer.bypassSecurityTrustUrl(
      urlCreator.createObjectURL(new Blob(event.blob))
    );

  }



  // imageLoaded(ev: Event) {
  //   //
  //   // Unset load error state
  //   this.angularCropper.loadError = false;

  //   //
  //   // Setup image element
  //   const image = ev.target as HTMLImageElement;
  //   this.angularCropper.imageElement = image;

  //   //
  //   // Add crossOrigin?
  //   if (this.angularCropper.cropperOptions.checkCrossOrigin) {
  //     image.crossOrigin = 'anonymous';
  //   }
  //   //
  //   // Image on ready event
  //   image.addEventListener('ready', () => {
  //     //
  //     // Emit ready
  //     this.angularCropper.ready.emit(true);

  //     //
  //     // Unset loading state
  //     this.angularCropper.isLoading = false;

  //     //
  //     // Validate cropbox existance
  //     if (this.angularCropper.cropbox) {
  //       //
  //       // Set cropbox data
  //       this.angularCropper.cropper.setCropBoxData(this.angularCropper.cropbox);
  //     }
  //   });

  //   //
  //   // Setup aspect ratio according to settings
  //   let aspectRatio = NaN;
  //   if (this.angularCropper.settings) {
  //     const { width, height } = this.angularCropper.settings;
  //     aspectRatio = width / height;
  //   }
  //   //
  //   // Set crop options
  //   // extend default with custom config
  //   this.angularCropper.cropperOptions = Object.assign({
  //     aspectRatio,
  //     movable: false,
  //     scalable: false,
  //     zoomable: false,
  //     viewMode: 1,
  //     checkCrossOrigin: true
  //   }, this.angularCropper.cropperOptions);

  //   //
  //   // Set cropperjs
  //   if (this.angularCropper.cropper) {
  //     this.angularCropper.cropper.destroy();
  //     this.angularCropper.cropper = undefined;
  //   }
  //   this.angularCropper.cropper = new Cropper(image, this.angularCropper.cropperOptions);
  // }

  // imageLoadError(event: any){
  //   //
  //   //set load Error state
  //   this.angularCropper.loadError = true;


  //   //
  //   //Unset loading state
  //   this.angularCropper.isLoading = false;
  // }







}

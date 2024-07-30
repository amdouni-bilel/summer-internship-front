import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OcrService } from '../ocr.service';
import { FactureClass } from '../FactureClass';
import { ToastrService } from 'ngx-toastr';

import { Image } from '../models/Image';
import { TypeServiceService } from 'src/app/administration/type-service.service';


@Component({
  selector: 'app-popupfac',
  templateUrl: './popupfac.component.html',
  styleUrls: ['./popupfac.component.scss']
})
export class PopupfacComponent implements OnInit {
  selectedImage: File;
  form: FormGroup;
  showProgress
  options 
  user
  bytes
  dropdown = new FormControl();
  selectedOption: string = ""
  Types =[]
  
  constructor(private servicetp:TypeServiceService, private formBuilder: FormBuilder,private dialog: MatDialog,private service:OcrService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      image: ['', [Validators.required, this.fileTypeValidator]], // Use an array for multiple validators
      option: ['', Validators.required],
    });
    this.user = this.service.getUserData()
    this.showProgress = this.service.showProgress
    this.servicetp.getAllNotesFrais().subscribe(notesFraisList => {
    
      if (notesFraisList.length === 0) {
        this.options = ['Restaurant', 'Public Transportation'];
      } else {
        this.options = notesFraisList.map(noteFrais => noteFrais.name);
      }
      
     });
  }

  fileTypeValidator(control: AbstractControl): { [key: string]: any } | null {
    const file = control.value;
    if (file instanceof File) {
      const allowedExtensions = ['jpg', 'jpeg', 'png']; // Add your allowed extensions
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (allowedExtensions.indexOf(fileExtension) === -1) {
        return { invalidFileType: true };
      }
    }
    return null;
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    this.selectedImage = file;
  }

  close() {
    const formData = this.form.value;
     this.dialog.closeAll()
  
  }
  save() {
    const file: File = this.selectedImage;
    if (!file) {
      return;
    }
  
    this.service.setfile(file);
  
    this.showProgress = true;
  
    this.service.processImage(file)
      .then(response => {
      
  
        if (!response || response.length === 0) {
          // Show an error toaster when the response is empty
          this.toastr.warning("The image quality is not sufficient for processing. Please use a higher-quality image.");

        } else {
          this.service.saveImages(this.selectedImage);
          const factureInstance = this.createFactureInstance(response,this.selectedImage);
          this.service.fillthelist(factureInstance);
        }
  
        this.showProgress = false;
      })
      .catch(error => {
        this.showProgress = false;
        console.log(error);
        this.toastr.error("An error occurred while processing the image.");
      })
      .finally(() => {
        this.dialog.closeAll();
      });
  }
  
  onOptionChange(selectedValue: string) {
    this.selectedOption = selectedValue;
  }



  
  createFactureInstance(response: any,selec): FactureClass {
    var factureInstance = new FactureClass();
    factureInstance.id = this.service.generateRandomId(5);
    factureInstance.title = this.selectedOption;
    factureInstance.date = new Date().toLocaleDateString();
    factureInstance.dividerTitle = this.selectedImage;
    if (this.user) {
      factureInstance.dividerText = this.user.ufunction || '';
    } else {
      factureInstance.dividerText = '';
    }
    const tvaItem = response.find(item => item.name === 'tva');
    const totalHtItem = response.find(item => item.name === 'totalht');
    const totalItem = response.find(item => item.name === 'total');
    const htItem = response.find(item => item.name === 'ht');
    
    factureInstance.tva = tvaItem ? tvaItem.value : 0;
    factureInstance.price = totalItem ? totalItem.value : 0;
    factureInstance.ht = totalHtItem ? totalHtItem.value: 0;
    factureInstance.image = selec

    this.service.saveDataToMongo(this.selectedImage,new Image(factureInstance.id ,"total", factureInstance.price),new Image( factureInstance.id ,"tva", factureInstance.tva),
    new Image(factureInstance.id ,"totalht", factureInstance.ht))
    factureInstance.list = this.service.getima()
   
 
    console.log("Facture is",factureInstance)
    return factureInstance;
  }


  
}

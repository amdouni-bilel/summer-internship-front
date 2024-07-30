import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BackClass } from '../models/BackClass';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentmodelComponent } from '../commentmodel/commentmodel.component';
import { MatDialog } from '@angular/material/dialog';
import { OcrService } from '../ocr.service';
import { ImagePopupComponentComponent } from '../image-popup-component/image-popup-component.component';
import { ComptableimageComponent } from '../comptableimage/comptableimage.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comptable',
  templateUrl: './comptable.component.html',
  styleUrls: ['./comptable.component.scss']
})
export class ComptableComponent implements OnInit {

  yourFormGroup: FormGroup;
  backClassData: BackClass[]; 
  data: any[];

  constructor(private fb: FormBuilder,private dialog: MatDialog , private service:OcrService,private toastr: ToastrService) {
    this.yourFormGroup = this.fb.group({
      user: [''], 
      type: [''],
      date: [''],
      userFunct: [''],
      frais: [''],
      list: [[]], 
      images: [[]], 
      comments: [[]] 
    });


  }

  ngOnInit(): void {
    this.fetchData();

  }

   fetchData() {
    this.service.getFactures() .then(response => {
      
  console.log(response)
  this.data = response
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
    });
  }

  openImagePopup(src) {
     this.dialog.open(ComptableimageComponent, {
      width: '500px',
      data: { selectedImage: src }
    });
  
  }
  

  openCommentModal(item) {
     this.dialog.open(CommentmodelComponent, {
      data: item
    });
  }
  Accept(item) {
    this.service.updateFactureName(item.id, "Accepted").subscribe(
      response => {
        if (response.status === 200) {
          // Display toast only if the response status is 200
          this.toastr.success("Facture Accepted !");
        }
        this.ngOnInit(); // Refresh the data after the update
      },
      error => {

        if (error.status === 200) {
          
          this.toastr.success("Facture Accepted !");
          this.ngOnInit();
        }

        console.error('Error updating data', error);
      }
    );
  }
  
  
  Refuse(item){
    this.service.updateFactureName(item.id, "Refused")
    .subscribe(
      response => {
        if (response.status === 200) {
          
          this.toastr.warning("Facture Refused !")
          this.ngOnInit();
        }
      },
      error => {
        if (error.status === 200) {
          
          this.toastr.warning("Facture Refused !")
          this.ngOnInit();
        }
        console.error('Error updating data', error);
      
      }
    );
  }

}

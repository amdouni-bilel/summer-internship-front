import { Component, OnInit } from '@angular/core';
import { OcrService } from '../ocr.service';
import { ForfClass } from '../models/ForfClass';

@Component({
  selector: 'app-forfaitaires',
  templateUrl: './forfaitaires.component.html',
  styleUrls: ['./forfaitaires.component.scss']
})

export class ForfaitairesComponent implements OnInit {

  constructor(private service:OcrService) { }
  
  isChecked: boolean ;
   value
   forf: ForfClass 
  
  ngOnInit(): void {
    
   this.forf = this.service.forfait
   this.isChecked = this.forf.etat
    this.value = this.service.sum; // Get the initial sum value
    // Subscribe to changes in the sum
    this.service.sumUpdated.subscribe((updatedSum) => {
      this.value = updatedSum;
      this.forf.tobepayed = this.value
      this.forf.sum = this.value
    });
    
  }

  toggleSwitch() {
    this.isChecked = !this.isChecked;
    this.service.forfait.etat = this.isChecked
  }
}

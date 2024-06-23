import { Component, OnInit } from '@angular/core';
import { OcrService } from 'src/app/facturation/ocr.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  user
  constructor(private service:OcrService) { }

  ngOnInit(): void {
   this.user = this.service.getUserData()
   console.log("User",this.user)
  }

}

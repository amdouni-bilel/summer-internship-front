import { Component, OnInit } from '@angular/core';
import { OcrService } from '../ocr.service';

@Component({
  selector: 'app-listcomment',
  templateUrl: './listcomment.component.html',
  styleUrls: ['./listcomment.component.scss']
})
export class ListcommentComponent implements OnInit {

  constructor(private service:OcrService) { }

  CommentList

  ngOnInit(): void {
    this.service.comments$.subscribe(comments => {
      this.CommentList = comments;
    });
  }

}

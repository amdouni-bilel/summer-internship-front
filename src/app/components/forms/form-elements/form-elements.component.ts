import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {
  active;
  @ViewChild('labelImport')
  labelImport: ElementRef;

  fileToUpload: File = null;

  constructor() { }

  ngOnInit(): void {
  }
  countries = [
    { id: 1, name: 'Brazil' },
    { id: 1, name: 'Czech Republic' },
    { id: 1, name: 'Germany' },
    { id: 1, name: 'Poland' },
  ]

  months = [
    { id: 1, month: 'January' },
    { id: 2, month: 'February' },
    { id: 3, month: 'March' },
    { id: 4, month: 'April' },
    { id: 5, month: 'May' },
    { id: 6, month: 'June' },
    { id: 7, month: 'July' },
    { id: 8, month: 'August' },
    { id: 9, month: 'September' },
    { id: 10, month: 'October' },
    { id: 11, month: 'November' },
    { id: 12, month: 'December' },
  ]

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(',');
    this.fileToUpload = files.item(0);
  }

}

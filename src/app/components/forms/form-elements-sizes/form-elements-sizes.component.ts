import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/codeViewData/formElementSize'

@Component({
  selector: 'app-form-elements-sizes',
  templateUrl: './form-elements-sizes.component.html',
  styleUrls: ['./form-elements-sizes.component.scss']
})
export class FormElementsSizesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  html1 = codeData.formElementHTML1;
  ts1 = codeData.formElementTS1;
  html2 = codeData.formElementHTML2;
  ts2 = codeData.formElementTS2;
  html3 = codeData.formElementHTML3;
  ts3 = codeData.formElementTS3;
  html4 = codeData.formElementHTML4;
  ts4 = codeData.formElementTS4;
  html5 = codeData.formElementHTML5;
  ts5 = codeData.formElementTS5;

}

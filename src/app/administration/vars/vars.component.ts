import { Component, OnInit } from '@angular/core';
import { VarsService } from './vars.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrService } from 'ngx-toastr';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AnyARecord } from 'dns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { get } from 'http';


@Component({
  selector: 'app-vars',
  templateUrl: './vars.component.html',
  styleUrls: ['./vars.component.scss'],
})
export class VarsComponent implements OnInit {

  options = ['Aujourd hui', 'Dernier jour de la semaine', 'Premier jour de la semaine','Dernier jour du mois','Premier jour du mois'];
  options2 = ['jj-mm-aaaa','jj/mm/aaaa','jj mois année'];
  user: any;
  variableList: any;
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  variables: any[]; // Assuming you have an array of Variable objects

  modalOpen: boolean = false;
  selectedVariable: any;

  constructor(private variablesService: VarsService,private toaster: ToastrService, private modalService: NgbModal,private http: HttpClient,
    ) {}



  ngOnInit(): void {
    const userString = window.localStorage.getItem('user');

    if (userString) {
      this.user = JSON.parse(userString);
    }

    this.getVars();
  }

  getVars(){

    this.variablesService.getallvars().subscribe((res) => {
      this.variableList = res;
      this.variables = this.variableList.filter((item) => item.user === this.user.username);
      console.log('vars after: ', this.variables);
    });
  }
  openUpdateModal(basicmodal,variable: any) {
    this.modalService.open(basicmodal);
    this.selectedVariable = { ...variable };
  }

  closeModal() {
    this.selectedVariable = null;
  }

  updateVariable() {

    console.log('selectedVariable: ', this.selectedVariable);
    this.http.put('http://localhost:8080/variables/updateOne', this.selectedVariable).subscribe(
      (response) => {
    //     if (response === 'ok') {
    //       this.getVars();
    //     console.log('Update successful:', response);
    //     this.toaster.success('Variable mise à jour avec succès', 'Succès', {
    //       timeOut: 3000,
    //     });
    //     this.closeModal();

    // }else {
    //     this.toaster.success('Variable mise à jour avec succès', 'Succès', {
    //       timeOut: 3000,
    //     });
    //   }
    this.toaster.success('Variable mise à jour avec succès', 'Succès', {
      timeOut: 3000,
    });
    
    },
    
    );

  }

}
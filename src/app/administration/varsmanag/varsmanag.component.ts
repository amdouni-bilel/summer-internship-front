import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VarsmanagService } from './varsmanag.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { companyDB } from 'src/app/shared/data/table/datatable';

@Component({
  selector: 'app-varsmanag',
  templateUrl: './varsmanag.component.html',
  styleUrls: ['./varsmanag.component.scss'],
})
export class VarsmanagComponent implements OnInit {
  coordonnee1: FormGroup;

  vars: any[];

  user;
  formGroups: FormGroup[] = [];

  type: any;
  itemFormGroup: FormGroup;

  variables: any[] = [];
  formGroupsLength: number;

  public countryData = [{ name: 'date' }, { name: 'text' }];

  constructor(
    private toaster: ToastrService,
    private variablesService: VarsmanagService,
    private _formBuilder1: FormBuilder,
    private _formBuilder2: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.company = companyDB.data;
  }
  public company = [];

  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  columns = [{ name: 'Nom' }, { name: 'Type' }, { name: 'Description' }];

  createFormGroup(): void {
    this.itemFormGroup = this._formBuilder1.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
      user: [this.user.username, ''],
    });
    this.formGroups.push(this.itemFormGroup);
    this.itemFormGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnInit(): void {
    this.columns.push({ name: 'Actions' });
    const userString = window.localStorage.getItem('user');

    if (userString) {
      this.user = JSON.parse(userString);
    }

    this.getVariables(this.user.username);
  }
  submitAllForms(): void {
    for (const formGroup of this.formGroups) {
      formGroup.markAllAsTouched();
    }

    if (this.isAnyFormInvalid()) {
      // Handle invalid forms
      //show a toaster for failed to add variables form are empty
      this.toaster.error('Veuillez remplir tous les champs', 'Erreur', {
        timeOut: 3000,
        closeButton: true,
        progressBar: true,
      });
    } else {
      this.savevars();
    }
  }

  isAnyFormInvalid(): boolean {
    this.formGroups.forEach((formGroup) => {
      formGroup.updateValueAndValidity();
    });
    return this.formGroups.some((formGroup) => formGroup.invalid);
  }
  deleteVar(row: any) {
    const rowIndex = this.variables.indexOf(row);
    if (rowIndex !== -1) {
      const id = row.id;

      this.variablesService.deleteVariable(id).subscribe(
        (response) => {
          if (response.includes('Deleted successfully')) {
            this.variables.splice(rowIndex, 1);
            this.toaster.success('Variable supprimée avec succès', 'Succès', {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
            });
          }
        },
        (error) => {
          console.error('Failed to delete row:', error);
        }
      );
    }
  }

  getVariables(user: string) {
    this.variablesService.getVariablesByUser(user)
      .subscribe(
        (response) => {
          this.variables = response;
          console.log('Variables:', this.variables);
        },
        (error) => {
          console.error('Failed to fetch variables:', error);
        }
      );
  }

  getFormGroupsValues(): void {
    this.vars = this.formGroups.map((formGroup) => formGroup.value);
  }

  refreshDataTable() {
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 1000);
  }
  savevars() {
    var bool = false;
    this.getFormGroupsValues();

    let arr = this.vars.filter(
      ((item) => item.nom != '') ||
        ((item) => item.type != '') ||
        ((item) => item.description != '')
    );
    //check if var has item with value present in this.variables
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].type === 'date'){
              arr[i].format ='jj-mm-aaaa';
              arr[i].date = 'Dernier jour du mois';
              arr[i].prefix ='';
              arr[i].sufix = '';
      } else{
        arr[i].prefix ='';
        arr[i].sufix = '';
        arr[i].textval ='';
      }
      for (let j = 0; j < this.variables.length; j++) {
        if (arr[i].nom === this.variables[j].nom) {
          bool = true;
          this.toaster.error(
            'Variable "' + arr[i].nom + '" existe déjà',
            'Erreur',
            { timeOut: 3000, closeButton: true, progressBar: true }
          );
        }
      }}

      if (bool == false) {
        this.variablesService.savevars(arr).subscribe(
          (response) => {
            if (response === 'Variables added successfully') {
              this.getVariables(this.user.username);

            //  this.variables.push(arr);
              this.refreshDataTable();
              this.toaster.success('Ajouté avec success', 'Succès', {
                timeOut: 3000,
                closeButton: true,
                progressBar: true,
              });
            } else {
              console.error("Erreur lors de l'ajout, ", response);
            }
          },
          (error) => {
            console.error('Error:', error);
          }
        );
      }

      //data =>  this.toaster.success('Successfully added'));

  }
  deleteFormGroup(index: number): void {
    this.formGroups.splice(index, 1);
    this.getFormGroupsValues();
    console.log(this.vars);
  }
}
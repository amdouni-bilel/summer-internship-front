import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  NgWizardConfig,
  NgWizardService,
  StepChangedArgs,
  StepValidationArgs,
  STEP_STATE,
  THEME,
} from 'ng-wizard';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { OrganigrammeService } from './organigramme.service';
import { el } from 'date-fns/locale';

interface Person {
  nom: string;
  niveau: number;
  children: Person[];
  poste: string;
  superieur: string;
}
@Component({
  selector: 'app-organigramme',
  templateUrl: './organigramme.component.html',
  styleUrls: ['./organigramme.component.scss'],
})
export class OrganigrammeComponent implements OnInit {
  // structureArray:any[];
  organigrammeCoord: FormGroup;
  tab: any;
  Array: Person[] = [];
  Array2: Person[] = [];
  parserArray: [] = [];
  next: boolean = true;
  ok: boolean = false;

  x: number;
  niveau: number = 1;
  mainForm: FormGroup;
  dynamicForms: FormArray;
  checkValid = true;

  config1: NgWizardConfig = {
    selected: 0,
    theme: THEME.dots,
    anchorSettings: {
      anchorClickable: false,
      enableAllAnchors: false,
      markDoneStep: true,
      markAllPreviousStepsAsDone: true,
      removeDoneStepOnNavigateBack: false,
      enableAnchorOnDoneStep: true,
    },
    toolbarSettings: {
      showPreviousButton: false,
      showNextButton: false,
    },
  };


  constructor(
    private toaster: ToastrService,
    private modalService: NgbModal,
    private _formBuilder: FormBuilder,
    private orgService: OrganigrammeService, 
    private fb: FormBuilder,
    private ngWizardService: NgWizardService
  ) {
  }
  ngOnInit(): void {

    this.persoForm = this._formBuilder.group({
      nom: '',
      poste: '',
    });

    this.mainForm = this.fb.group({
      numberOfForms: new FormControl(1), // Default value for the number input
    });

    // Initialize the FormArray for dynamic forms
    this.dynamicForms = this.fb.array([]);
    this.mainForm.addControl('dynamicForms', this.dynamicForms);

    // this.tab = this.orgService.getAllOrganigrammes();
    this.getOrgs();

    this.organigrammeCoord = this._formBuilder.group({
      titre: ['', Validators.required],
      nbreNiveaux: ['',[ Validators.required, Validators.min]],
    });

    // this.organigrammeCoord
    //   .get('nbreNiveaux')
    //   .valueChanges.subscribe((value) => {
    //     this.x = value;
    //   });

  }

  getNbreNiveaux() {
    return this.organigrammeCoord.get('nbreNiveaux').value;
  }

  stepChanged(args: StepChangedArgs) {
    //console.log(args.step);
  }

  getOrgs(){
    this.orgService.getAllOrganigrammes().subscribe((data) => {
      console.log("data = ", data)
      this.tab = data;
      console.log(this.tab);
    })
  }

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  deleteOrg(id){
    this.orgService.DeleteOrganigramme(id).subscribe((data) => {
      this.toaster.success('Organigramme supprimé avec succès');
      this.getOrgs()
    },
    (error) => {
      if (error.status===200) {
        this.toaster.success('Organigramme supprimé avec succès');
        this.getOrgs()

      }
      else {
        this.toaster.error('Erreur lors de la suppression de l\'organigramme');
        this.getOrgs()

      }

    })
  }


  clearDynamicForms(){
    while (this.dynamicForms.length !== 0) {
      this.dynamicForms.removeAt(0);
    }
    this.dynamicForms.clear();
    this.dynamicForms.reset();
    console.log("touli : ",this.dynamicForms.length)

  }


  createDynamicForms() {

    const numberOfForms = this.mainForm.value.numberOfForms;
    console.log("9adeh men personnel hachtek ? ",numberOfForms)
    this.clearDynamicForms();

    for (let i = 0; i < numberOfForms; i++) {
      const formGroup = this.fb.group({
        textInput: new FormControl('', Validators.required),
        selectInput: new FormControl(''),
        posteInput: new FormControl(''),
      });
      this.dynamicForms.push(formGroup);
      console.log("touli ",this.dynamicForms.length)
      this.mainForm.get('numberOfForms').setValue(1);
    }

  }

  checkDynamicFormsValidity() {
    for (const formGroup of this.dynamicForms.controls) {
      if (formGroup.valid) {
        this.checkValid = true;
      } else {
        this.checkValid = false;
      }
    }
    return this.checkValid;
  }
  onSubmit() {
    // Handle form submission here
    //console.log(this.mainForm.value);

    if (this.checkDynamicFormsValidity()) {
      if (this.niveau == 1) {
        for (let i = 0; i < this.dynamicForms.length; i++) {
          const person: Person = {
            nom: this.mainForm.value.dynamicForms[i].textInput,
            niveau: this.niveau,
            children: [],
            poste: this.mainForm.value.dynamicForms[i].posteInput,
            superieur: '',
          };
          this.Array.push(person);
          this.Array2.push(person);

        }
        this.clearDynamicForms();

      } else {
        for (let i = 0; i < this.dynamicForms.length; i++) {
          const child: Person = {
            nom: this.mainForm.value.dynamicForms[i].textInput,
            niveau: this.niveau,
            children: [],
            poste: this.mainForm.value.dynamicForms[i].posteInput,
            superieur: this.mainForm.value.dynamicForms[i].selectInput,
          };
          this.Array.push(child);
          this.Array2.push(child);
        }
        this.clearDynamicForms();

      }
      console.log(this.Array);
      this.clearDynamicForms();

      this.niveau++;
      for (let i = 0; i < this.Array2.length; i++) {
        var diff = this.niveau - this.Array2[i].niveau;
        if (diff != 1) {
          this.Array2.splice(i, 1);
          i--;
        }
      }

      if (this.niveau <= this.x) {
        this.ngWizardService.next();
      }
      if (this.x == this.niveau) {
        this.next = false;
        this.ok = true;
      }
      this.checkValid = false;
      this.clearDynamicForms();

    } else {
      this.toaster.error('Veuillez remplir tous les champs');
    }
  }

  create() {
    for (let i = 0; i < this.dynamicForms.length; i++) {
      const child: Person = {
        nom: this.mainForm.value.dynamicForms[i].textInput,
        niveau: this.niveau,
        children: [],
        poste: this.mainForm.value.dynamicForms[i].posteInput,
        superieur: this.mainForm.value.dynamicForms[i].selectInput,
      };
      this.Array.push(child);
    }
    const nestedArray: Person[] = this.nestPersons(this.Array);
    console.log('nested array : ', nestedArray);

    //full structure array + cleaning json to send to back
    const organigrammeCoordObject = this.organigrammeCoord.getRawValue();
    organigrammeCoordObject.personnels = nestedArray;
    this.deleteSuperieurAndNiveau(organigrammeCoordObject.personnels);
    console.log('structure array',organigrammeCoordObject);

    this.orgService.createOrganigramme(organigrammeCoordObject).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        if (error.status===200) {
          this.toaster.success('Organigramme créé avec succès');
          this.organigrammeCoord.reset();
          while (this.dynamicForms.length !== 0) {
            this.dynamicForms.removeAt(0);
          }
          this.getOrgs();

        }
        else {
          this.toaster.error('Erreur lors de la création de l\'organigramme');
        }

      }
    );

    this.modalService.dismissAll();
    this.mainForm.value.numberOfForms = 0;
    this.dynamicForms.clear();
    this.niveau = 1;
    this.next = false;
    this.ok = false;

  }


  deleteSuperieurAndNiveau(persons: any[]): void {
    persons.forEach(person => {
      delete person.superieur;
      delete person.niveau;
      if (person.children && person.children.length > 0) {
        this.deleteSuperieurAndNiveau(person.children);
      }
    });
  }



  openAddWizard(content) {
    if(!this.organigrammeCoord.valid){
      this.toaster.error('Un organigramme doit contenir au moins 1 niveau ');
    }else{
        this.x=this.getNbreNiveaux();
        if(this.x==1){
          this.next = false;
          this.ok = true;
        }else{
          this.next = true;
          this.ok = false;
        }
        this.modalService.open(content, { size: 'lg' });
        this.toaster.info('X :'+this.x, );
    }
  }

  nestPersons(persons: Person[]): Person[] {
    const map: { [key: string]: Person } = {};

    persons.forEach((person) => {
      map[person.nom] = person;
      person.children = [];
    });

    const result: Person[] = [];

    persons.forEach((person) => {
      if (person.superieur !== '') {
        if (map[person.superieur]) {
          map[person.superieur].children.push(person);
        }
      } else {
        result.push(person);
      }
    });

    return result;
  }




  treeData:any = {

  };


  scale = 0.9; // Facteur d'échelle initial

    // Méthode pour effectuer le zoom in
    zoomIn() {

      this.scale += 0.1;
    }

    // Méthode pour effectuer le zoom out
    zoomOut() {
      if (this.scale > 0.2) { // Limite minimale pour éviter un zoom trop petit
        this.scale -= 0.1;
      }
    }




    orgModalRef:NgbModalRef
    orgModal:any
    currentstructure:any=null
    openOrgModal(orgModal,structure) {
      this.currentstructure=structure
      this.orgModal=orgModal
      this.treeData=this.currentstructure.personnels
     this.orgModalRef= this.modalService.open(orgModal, { size: 'lg' });
    }



  deletePerso(id:any){
    console.log("idddd",id)
   // this.treeData.items[0].idDeleted=true
    this.orgService.updatePersonnel(id, {}).subscribe(()=>{
       
    })

    this.orgService.getAllOrganigrammes().subscribe((data) => {
      console.log("data = ", data)
      this.tab = data;
      console.log(this.tab);
      console.log("struc ancien", this.currentstructure)

      if (this.currentstructure!=null){
       this.currentstructure=  this.tab.find(struc=>struc.id==this.currentstructure.id)
       this.treeData=this.currentstructure.personnels

      }
      console.log("struc new", this.currentstructure)

    })
  }

  persoForm: FormGroup;

  parentIdToAdd:any
  persoModalRef:NgbModalRef
  openPersoModal(id:any,persoModal:any){
    this.orgModalRef.close()
    this.parentIdToAdd=id
  this.persoModalRef=  this.modalService.open(persoModal, { size: 'sm' });
  }


  persoToAdd:any={}
  createPerso(){
    this.persoToAdd=this.persoForm.value
    this.persoToAdd.isDeleted=false
    console.log(this.persoToAdd);
    this.persoModalRef.close()
    this.orgModalRef= this.modalService.open(this.orgModal, { size: 'lg' });
    this.orgService.addPersonnel(this.parentIdToAdd,this.persoToAdd).subscribe(data=>{
      this.toaster.success('Personnel créé avec succès');
     
    })
    this.persoForm.reset()


    this.orgService.getAllOrganigrammes().subscribe((data) => {
      console.log("data = ", data)
      this.tab = data;
      console.log(this.tab);
      if (this.currentstructure!=null){
        this.currentstructure=  this.tab.find(struc=>struc.id==this.currentstructure.id)
        this.treeData=this.currentstructure.personnels

       }

    })
  }

}
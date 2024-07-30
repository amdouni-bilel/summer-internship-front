import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation, } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import 'flatpickr/dist/flatpickr.css';
import PerfectScrollbar from 'perfect-scrollbar';
import { ContactsService } from './contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


const colors: any = {
  red: {
    primary: '#705ec8',
    secondary: '#6958be',
  },
  blue: {
    primary: '#fb1c52',
    secondary: '#f83e6b',
  },
  yellow: {
    primary: '#ffab00',
    secondary: '#f3a403',
  },
};

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  // encapsulation: ViewEncapsulation.None

})
export class ContactsComponent implements OnInit {

  coordonneeGroup: FormGroup;
  contacts:any=[]
  displayedContact:any={"nom":"","prenom":"","adresseSociete":"","commentaire":"","id":"","post":"","societe":"","telephone":"","telephoneSociete":"",}
 
  
  constructor(private modal: NgbModal,
              private contactService: ContactsService,
              private toaster : ToastrService,
              private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.displayedContact={"nom":"","prenom":"","adresseSociete":"","commentaire":"","id":"","post":"","societe":"","telephone":"","telephoneSociete":"",}

    this.allContacts()
    this.emptyForm()

  }

  ngAfterViewInit(){
    const scroll1 = document.querySelector('#mainContactList');

    let ps = new PerfectScrollbar(scroll1);

  }

  saveContact(){

    if(this.coordonneeGroup.valid){
      this.contactService.savecontact(

        this.coordonneeGroup.value

    ).subscribe(data => {
      this.toaster.success('Successfully Added')
      this.allContacts()
      this.closePopup()
      this.emptyForm()



    }


      );

    }
   else{
    this.toaster.error('please, fill the form with valid data')

   }
  }


  deleteContact(){
    console.log("deleting : ",this.displayedContact)
    this.contactService.deletecontact(this.displayedContact.id).subscribe(data =>
{
  console.log("heloo delete")
     // this.toaster.success('Successfully Deleted')
      this.allContacts()
    }    ,
    err=>{
      this.allContacts()

    }


      );
  }


  updateContact(){
    if(this.coordonneeGroup.valid){
    
      this.contactService.updatecontact(

        this.coordonneeGroup.value

    ).subscribe(data => {
      this.toaster.success('Successfully updated')
      this.allContacts()
      this.closePopup()
      this.emptyForm()

    }


      );

    }
   else{
    this.toaster.error('please, fill the form with valid data')

   }
  }


  allContacts(){

    this.contactService.getallcontacts(
  ).subscribe(data =>{
    console.log("data = ", data)
    this.contacts=data
    if(data.length!=0){
      this.displayedContact=data[0]
    }
  }
    );

  }

  changeDisplayedContact(newDispContact){
    this.displayedContact=newDispContact
  }

// popup

@ViewChild('modalContent') modalContent!: TemplateRef<any>;
modalRef: NgbModalRef | undefined;
modalData: {
  action: string;
  event: CalendarEvent;
} = {
  action: '',
  event: null!
};


isCreate:Boolean=false

handleEvent(action: string, event: CalendarEvent, contact:any): void {

  if(contact!=undefined && contact!=null){
    this.isCreate=false
    this.coordonneeGroup.patchValue(contact)
  }else{
    this.isCreate=true
  }
  console.log("contact= ", contact)

  this.modalData = { action, event };
  this.modalRef = this.modal.open(this.modalContent, { size: 'lg' });
}

closePopup(): void {
  this.isCreate=false
  this.emptyForm()

  this.modalRef?.close();
}

emptyForm(){
  this.coordonneeGroup = this._formBuilder.group({
    id: ['',''],
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    post: ['', Validators.required],
    societe: ['', ''],
    telephone: ['',  [Validators.required, Validators.pattern('^[0-9]+$')]],
    telephoneSociete: ['',  [Validators.required, Validators.pattern('^[0-9]+$')]],
    adresseSociete: ['', Validators.required],
    commentaire: ['', ''],

  });
}





searchText: string = '';

get filteredContacts(): any[] {
  if (!this.searchText.trim()) {
    return this.contacts;
  }
  return this.contacts.filter(contact =>
    (contact.nom + ' ' + contact.prenom).toLowerCase().includes(this.searchText.trim().toLowerCase())
  );
}

clearSearch() {
  this.searchText = '';
}
 }
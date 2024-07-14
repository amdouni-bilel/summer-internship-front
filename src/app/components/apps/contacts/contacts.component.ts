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
  loadContacts() {
    this.contactService.getAllContacts().subscribe(
      (data) => {
        this.contacts = data; // Met à jour la liste des contacts dans le composant
        console.log('Contacts:', this.contacts); // Affiche les contacts dans la console
      },
      (error) => {
        console.error('Error fetching contacts:', error); // Gère les erreurs éventuelles
      }
    );
  }
  constructor(private modal: NgbModal,
              private contactService: ContactsService,
              private toaster : ToastrService,
              private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loadContacts();

    this.displayedContact={"nom":"","prenom":"","adresseSociete":"","commentaire":"","id":"","post":"","societe":"","telephone":"","telephoneSociete":"",}
    this.contacts;
    this.allContacts()
    this.emptyForm()

  }

  ngAfterViewInit(){
    const scroll1 = document.querySelector('#mainContactList');

    let ps = new PerfectScrollbar(scroll1);

  }

 /* saveContact(){

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
  }*/
  saveContact() {
    if (this.coordonneeGroup.valid) {
      console.log('Valeur du formulaire:', this.coordonneeGroup.value); // Ajoutez cette ligne pour afficher la valeur du formulaire

      this.contactService.savecontact(this.coordonneeGroup.value)
        .subscribe(
          data => {
            this.toaster.success('Contact ajouté avec succès');
            this.closePopup(); // Fermer le popup ou modal
            this.emptyForm(); // Vider le formulaire après ajout
          },
          error => {
            console.error('Erreur lors de l\'ajout du contact:', error);
            this.toaster.error('Erreur lors de l\'ajout du contact');
          }
        );
    } else {
      this.toaster.error('Veuillez remplir le formulaire avec des données valides');
    }
  }

  /*deleteContact(){
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
  }*/
  deleteContact(id: any) {
    console.log("Deleting contact with ID: ", id);

    this.contactService.deletecontact(id).subscribe(
      () => {
        console.log("Delete successful");
        // Ajoutez ici toute logique supplémentaire après la suppression réussie
        this.allContacts(); // Exemple : rechargez la liste des contacts
      },
      error => {
        console.error("Delete failed:", error);
        // Gérez l'erreur ici (par exemple, affichez un message d'erreur à l'utilisateur)
        this.allContacts(); // Exemple : rechargez la liste des contacts en cas d'erreur
      }
    );
  }

  updateContact() {
    if (this.coordonneeGroup.valid) {
      const id = this.coordonneeGroup.value.id; // Récupérer l'ID depuis le formulaire

      this.contactService.updateContact(id, this.coordonneeGroup.value).subscribe(
        data => {
          this.toaster.success('Successfully updated');
          this.closePopup(); // Exemple : fermer une popup après mise à jour réussie
          this.emptyForm(); // Exemple : vider le formulaire après mise à jour réussie
        },
        error => {
          console.error('Update failed:', error);
          this.toaster.error('Failed to update'); // Gérez l'erreur ici (par exemple, affichez un message d'erreur à l'utilisateur)
        }
      );
    } else {
      this.toaster.error('Please fill the form with valid data');
    }
  }


  allContacts(){

    this.contactService.getAllContacts(
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
  // Création du formulaire avec Reactive Form
  /*id: ['',''],
     nom: ['', Validators.required],
     prenom: ['', Validators.required],
     post: ['', Validators.required],
     societe: ['', ''],
     telephone: ['',  [Validators.required, Validators.pattern('^[0-9]+$')]],
     telephoneSociete: ['',  [Validators.required, Validators.pattern('^[0-9]+$')]],
     adresseSociete: ['', Validators.required],
     commentaire: ['', ''],
     id: ['',''],*/
  /*emptyForm(){
    this.coordonneeGroup = this._formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      societe: ['', Validators.required],
      socadd: [''],
      soctlph: ['', Validators.required],
      tlph: [''],
      post: [''],
      comment: ['']
    });
  }*/
  emptyForm() {
    this.coordonneeGroup = this._formBuilder.group({
      fname: [''],
      lname: [''],
      societe: [''],
      socadd: [''],
      soctlph: [''],
      tlph: [''],
      post: [''],
      comment: ['']
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

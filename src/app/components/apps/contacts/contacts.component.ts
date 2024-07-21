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
  contacts: any[] = [];
  filteredContacts: any[] = [];
  displayedContact: any = {"nom":"","prenom":"","adresseSociete":"","commentaire":"","id":"","post":"","societe":"","telephone":"","telephoneSociete":""};
  searchText: string = '';

  constructor(private modal: NgbModal,
              private contactService: ContactsService,
              private toaster: ToastrService,
              private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loadContacts();
    this.emptyForm();
  }

  loadContacts() {
    this.contactService.getAllContacts().subscribe(
      (data) => {
        this.contacts = data;
        this.filteredContacts = this.contacts;
        console.log('Contacts:', this.contacts);
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }

  searchContacts() {
    this.filteredContacts = this.contacts.filter(contact =>
      (contact.nom + ' ' + contact.prenom).toLowerCase().includes(this.searchText.trim().toLowerCase())
    );
  }

  clearSearch() {
    this.searchText = '';
    this.filteredContacts = this.contacts;
  }

  saveContact() {
    if (this.coordonneeGroup.valid) {
      console.log('Form Value:', this.coordonneeGroup.value);

      this.contactService.savecontact(this.coordonneeGroup.value)
        .subscribe(
          data => {
            this.toaster.success('Contact ajouté avec succès');
            this.closePopup();
            this.emptyForm();
            this.loadContacts();
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

  deleteContact(id: any) {
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce contact ?");
    if (confirmation) {
      this.contactService.deletecontact(id).subscribe(
        () => {
          console.log("Delete successful");
          this.loadContacts();
        },
        error => {
          console.error("Delete failed:", error);
          this.loadContacts();
        }
      );
    } else {
      console.log("Suppression annulée par l'utilisateur");
    }
  }

  updateContact() {
    if (this.coordonneeGroup.valid) {
      const id = this.coordonneeGroup.value.id;
      this.contactService.updateContact(id, this.coordonneeGroup.value).subscribe(
        data => {
          this.toaster.success('Successfully updated');
          this.closePopup();
          this.emptyForm();
          this.loadContacts();
        },
        error => {
          console.error('Update failed:', error);
          this.toaster.error('Failed to update');
        }
      );
    } else {
      this.toaster.error('Please fill the form with valid data');
    }
  }

  changeDisplayedContact(newDispContact: any) {
    this.displayedContact = newDispContact;
  }

  @ViewChild('modalContent') modalContent!: TemplateRef<any>;
  modalRef: NgbModalRef | undefined;
  modalData: {
    action: string;
    event: CalendarEvent;
  } = {
    action: '',
    event: null!
  };

  isCreate: Boolean = false;

  handleEvent(action: string, event: CalendarEvent, contact: any): void {
    if (contact != undefined && contact != null) {
      this.isCreate = false;
      this.coordonneeGroup.patchValue(contact);
    } else {
      this.isCreate = true;
    }
    console.log("contact= ", contact);

    this.modalData = { action, event };
    this.modalRef = this.modal.open(this.modalContent, { size: 'lg' });
  }

  closePopup(): void {
    this.isCreate = false;
    this.emptyForm();
    this.modalRef?.close();
  }

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

  ngAfterViewInit() {
    const scroll1 = document.querySelector('#mainContactList');
    let ps = new PerfectScrollbar(scroll1);
  }
}

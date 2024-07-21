import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation, ElementRef } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import {Observable, Subject} from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import 'flatpickr/dist/flatpickr.css';
import PerfectScrollbar from 'perfect-scrollbar';
import { ContactsService } from './contacts.service';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { lettersOnlyValidator, phoneNumberValidator } from '../validators/custom-validators'; // Importez vos validateurs
import {catchError, map, switchMap} from 'rxjs/operators';

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
  encapsulation: ViewEncapsulation.None
})
export class ContactsComponent implements OnInit {

  coordonneeGroup: FormGroup;
  contacts: any[] = [];
  filteredContacts: any[] = [];
  displayedContact: any = {
    nom: "",
    prenom: "",
    adresseSociete: "",
    commentaire: "",
    id: "",
    post: "",
    societe: "",
    telephone: "",
    telephoneSociete: "",
    image: ''
  };
  searchText: string = '';
  imageSrc: string = '../../assets/images/users/2.jpg'; // Default image source

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private modal: NgbModal,
              private contactService: ContactsService,
              private toaster: ToastrService,
              private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loadContacts();
    this.emptyForm();
  }

  onCameraClick(): void {
    this.fileInput.nativeElement.click();
  }

  /*onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
*/
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
      (contact.fname + ' ' + contact.lname).toLowerCase().includes(this.searchText.trim().toLowerCase())
    );
  }

  clearSearch() {
    this.searchText = '';
    this.filteredContacts = this.contacts;
  }
  saveContact() {
    if (this.coordonneeGroup.valid) {
      const soctlph = this.coordonneeGroup.get('soctlph').value;
      const tlph = this.coordonneeGroup.get('tlph').value;

      this.contactService.checkPhoneExists(soctlph).pipe(
        switchMap(soctlphExists => {
          if (soctlphExists) {
            this.toaster.error('Le numéro de téléphone de la société existe déjà.');
            return new Observable<void>(); // Retourne un observable vide
          } else {
            return this.contactService.checkPhoneExists(tlph).pipe(
              switchMap(tlphExists => {
                if (tlphExists) {
                  this.toaster.error('Le numéro de téléphone existe déjà.');
                  return new Observable<void>(); // Retourne un observable vide
                } else {
                  return this.contactService.savecontact(this.coordonneeGroup.value).pipe(
                    map(() => {
                      this.toaster.success('Contact ajouté avec succès');
                      this.coordonneeGroup.reset();
                    }),
                    catchError(error => {
                      console.error('Erreur lors de l\'ajout du contact:', error);
                      this.toaster.error('Erreur lors de l\'ajout du contact');
                      return new Observable<void>();
                    })
                  );
                }
              })
            );
          }
        })
      ).subscribe();
    } else {
      this.toaster.error('Veuillez remplir le formulaire avec des données valides');
    }
  }
  /*saveContact() {
    if (this.coordonneeGroup.valid) {
      console.log('Valeur du formulaire:', this.coordonneeGroup.value);

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
  }*/

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

  updateContact(id:any) {
    if (this.coordonneeGroup.valid) {
      //const id = this.coordonneeGroup.value.id;
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

 /* emptyForm() {
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
  }*/
  emptyForm() {
    this.coordonneeGroup = this._formBuilder.group({
      fname: ['', [Validators.required, lettersOnlyValidator()]],
      lname: ['', [Validators.required, lettersOnlyValidator()]],
      societe: [''],
      socadd: [''],
      soctlph: ['', [Validators.required, phoneNumberValidator()]],
      tlph: ['', [Validators.required, phoneNumberValidator()]],
      post: [''],
      comment: ['']
    });
  }

  ngAfterViewInit() {
    const scroll1 = document.querySelector('#mainContactList');
    let ps = new PerfectScrollbar(scroll1);
  }
  // contacts.component.ts
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };

      reader.readAsDataURL(file);

      // Vérifiez que le contact est sélectionné
      if (this.displayedContact && this.displayedContact.id) {
        this.uploadImage(this.displayedContact.id, file);
      } else {
        this.toaster.error('Veuillez sélectionner un contact avant de télécharger une image.');
      }
    }
  }

  uploadImage(contactId: number, file: File): void {
    this.contactService.uploadImage(contactId, file).subscribe(
      (response) => {
        this.displayedContact.image = response.image;
        this.toaster.success('Image uploaded successfully');
        this.loadContacts(); // Rechargez la liste des contacts pour refléter les modifications
      },
      (error) => {
        console.error('Error uploading image:', error);
        this.toaster.error('Error uploading image');
      }
    );
  }
}

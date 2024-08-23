import {Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation, ElementRef} from '@angular/core';
import {CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView} from 'angular-calendar';
import {startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours} from 'date-fns';
import {Observable, Subject} from 'rxjs';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import 'flatpickr/dist/flatpickr.css';
import PerfectScrollbar from 'perfect-scrollbar';
import {ContactsService} from './contacts.service';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {lettersOnlyValidator, noSpacesValidator, phoneNumberValidator} from '../validators/custom-validators'; // Importez vos validateurs
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import Qrious from 'qrious';
// import * as jsPDF from "jspdf";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {Contacts} from './Contacts';

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

  constructor(private modal: NgbModal,
              private contactService: ContactsService,
              private toaster: ToastrService,
              // tslint:disable-next-line:variable-name
              private _formBuilder: FormBuilder) {
  }
  qrCodeImage: string;
  coordonneeGroup: FormGroup;
  contacts: any[] = [];
  groupedContacts: { [key: string]: Contacts[] } = {};
  groupedContactKeys: string[] = [];
  filteredContacts: any[] = [];
  imagePreview: string | ArrayBuffer | null = null;
  imageError: string | null = null;
  selectedFile: File | null = null;
  selectedImage: string | ArrayBuffer | null = null;

  displayedContact: any = {
    nom: '',
    prenom: '',
    adresseSociete: '',
    commentaire: '',
    id: '',
    post: '',
    societe: '',
    telephone: '',
    telephoneSociete: '',
    image: '',
    // qr_code: 'initial_base64_encoded_qr_code'
    qr_code: ''
  };
  searchText = '';
  imageSrc = '../../assets/images/users/2.jpg'; // Default image source
  fileToUpload: File | null = null;
  currentPage = 1;
  itemsPerPage = 7;
  totalItems = 0;

  @ViewChild('fileInput') fileInput: ElementRef;
  private http: any;

  // tslint:disable-next-line:ban-types
  isCreate: Boolean = false;

  @ViewChild('modalContent') modalContent!: TemplateRef<any>;
  modalRef: NgbModalRef | undefined;
  modalData: {
    action: string;
    event: CalendarEvent;
  } = {
    action: '',
    // tslint:disable-next-line:no-non-null-assertion
    event: null!
  };

  ngOnInit(): void {
    this.generateQRCode();
    this.loadContacts();
    this.emptyForm();

  }

  // tslint:disable-next-line:typedef
  generateQRCode() {
    const qr = new Qrious({
      value: this.displayedContact.qrcode
    });

    this.qrCodeImage = qr.toDataURL();
  }

  // tslint:disable-next-line:typedef
  loadContacts1() {
    this.contactService.getAllContacts().subscribe(
      (data) => {
        this.contacts = data;

        // Grouper les contacts par lettre initiale
        this.groupedContacts = this.groupContactsByLetter(this.contacts);

        this.totalItems = this.contacts.length; // Set total items
        this.filteredContacts = this.contacts;
        console.log('Contacts:', this.contacts);
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }
  groupContactsByLetter(contacts: any[]): any {
    return contacts.reduce((acc, contact) => {
      const letter = contact.fname.charAt(0).toUpperCase();
      if (!acc[letter]) {
        acc[letter] = [];
      }
      acc[letter].push(contact);
      return acc;
    }, {} as any);
  }
  // tslint:disable-next-line:typedef
  loadContacts5() {
    // @ts-ignore
    this.contactService.getcontact().subscribe(
      (data) => {
        // Tri des contacts par fname en ordre alphabétique croissant
        const sortedContacts = data.sort((a, b) => a.fname.localeCompare(b.fname));

        // Regroupement des contacts par la première lettre de fname
        this.groupedContacts = sortedContacts.reduce((groups, contact) => {
          const firstLetter = contact.fname.charAt(0).toUpperCase();
          if (!groups[firstLetter]) {
            groups[firstLetter] = [];
          }
          groups[firstLetter].push(contact);
          return groups;
        }, {});
      },
      (error) => {
        console.error('Erreur lors du chargement des contacts', error);
      }
    );
  }
  getSortedKeys(obj: { [key: string]: any }): string[] {
    return Object.keys(obj).sort();
  }

  // tslint:disable-next-line:typedef
  loadContacts() {
    this.contactService.getAllContacts().subscribe(
      (data) => {
        this.contacts = data.sort((a, b) => a.fname.localeCompare(b.fname));
       // this.contacts = data;
        this.totalItems = this.contacts.length; // Set total items
        this.filteredContacts = this.contacts;
        console.log('Contacts:', this.contacts);
      },
      (error) => {
        console.error('Error fetching contacts:', error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  saveContact() {
    if (this.coordonneeGroup.valid) {
      this.modalRef?.close(); // Close the popup to ensure the SweetAlert2 dialog is on top

      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Voulez-vous vraiment ajouter ce contact?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, ajouter!',
        cancelButtonText: 'Annuler'
      }).then((result) => {
        if (result.isConfirmed) {
          const contactData = this.coordonneeGroup.value;

          if (this.fileToUpload) {
            // Upload image without contact ID
            this.contactService.uploadImageWithoutId(this.fileToUpload).subscribe(
              (imageUrl: string) => { // Ensure imageUrl is typed as string
                contactData.image = imageUrl;
                this.contactService.savecontact(contactData).subscribe(
                  () => {
                    this.toaster.success('Contact added successfully');
                    this.loadContacts();
                    this.emptyForm();
                    this.closePopup();
                  },
                  error => {
                    console.error('Error adding contact:', error);
                    this.toaster.error('Error adding contact');
                  }
                );
              },
              error => {
                console.error('Error uploading image:', error);
                this.toaster.error('Error uploading image');
              }
            );
          } else {
            // If no image is uploaded
            this.contactService.savecontact(contactData).subscribe(
              () => {
                this.toaster.success('Contact added successfully');
                this.loadContacts();
                this.emptyForm();
                this.closePopup();
              },
              error => {
                console.error('Error adding contact:', error);
                this.toaster.error('Error adding contact');
              }
            );
          }
        } else {
          // Reopen the popup if the action was canceled
          this.modalRef = this.modal.open(this.modalContent, { size: 'lg' });
          Swal.fire(
            'Annulé',
            'Le contact n\'a pas été ajouté.',
            'info'
          );
        }
      });
    } else {
      this.toaster.error('Please fill the form with valid data');
    }
  }


  // tslint:disable-next-line:typedef
  saveContact1() {
    if (this.coordonneeGroup.valid) {
      this.modalRef?.close(); // Close the popup to ensure the SweetAlert2 dialog is on top

      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Voulez-vous vraiment ajouter ce contact?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, ajouter!',
        cancelButtonText: 'Annuler'
      }).then((result) => {
        if (result.isConfirmed) {
          const contactData = this.coordonneeGroup.value;

          if (this.fileToUpload) {
            // Upload image without contact ID
            this.contactService.uploadImageWithoutId(this.fileToUpload).subscribe(
              (imageUrl: string) => { // Ensure imageUrl is typed as string
                contactData.image = imageUrl;
                contactData.setImage(imageUrl);
                this.contactService.savecontact(contactData).subscribe(
                  () => {
                    this.toaster.success('Contact added successfully');
                    this.loadContacts();
                    this.emptyForm();
                    this.closePopup();
                  },
                  error => {
                    console.error('Error adding contact:', error);
                    this.toaster.error('Error adding contact');
                  }
                );
              },
              error => {
                console.error('Error uploading image:', error);
                this.toaster.error('Error uploading image');
              }
            );
          } else {
            this.contactService.savecontact(contactData).subscribe(
              () => {
                this.toaster.success('Contact added successfully');
                this.loadContacts();
                this.emptyForm();
                this.closePopup();
              },
              error => {
                console.error('Error adding contact:', error);
                this.toaster.error('Error adding contact');
              }
            );
          }
        } else {
          // Reopen the popup if the action was canceled
          this.modalRef = this.modal.open(this.modalContent, {size: 'lg'});
          Swal.fire(
            'Annulé',
            'Le contact n\'a pas été ajouté.',
            'info'
          );
        }
      });
    } else {
      this.toaster.error('Please fill the form with valid data');
    }
  }

  // tslint:disable-next-line:typedef
  updateContact3(id: any) {
    if (this.coordonneeGroup.valid) {
      this.modalRef?.close(); // Close the popup to ensure the SweetAlert2 dialog is on top

      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Voulez-vous vraiment mettre à jour ce contact?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, mettre à jour!',
        cancelButtonText: 'Annuler'
      }).then((result) => {
        if (result.isConfirmed) {
          const contactData = this.coordonneeGroup.value;

          if (this.fileToUpload) {
            this.contactService.uploadFile(this.fileToUpload).subscribe(
              (imageUrl) => {
                contactData.image = imageUrl; // Set the new image URL
                this.contactService.updateContact(id, contactData).subscribe(
                  (updatedContact) => {
                    const index = this.contacts.findIndex(contact => contact.id === id);
                    if (index !== -1) {
                      this.contacts[index] = {...this.contacts[index], ...contactData};
                      this.displayedContact = this.contacts[index];
                    }

                    this.toaster.success('Contact updated successfully');
                    this.loadContacts();
                    this.emptyForm();
                    this.closePopup();
                  },
                  error => {
                    console.error('Error updating contact:', error);
                    this.toaster.error('Error updating contact');
                  }
                );
              },
              error => {
                console.error('Error uploading image:', error);
                this.toaster.error('Error uploading image');
              }
            );
          } else {
            this.contactService.updateContact(id, {
              ...contactData,
              image: this.displayedContact.image // Keep the existing image URL
            }).subscribe(
              (updatedContact) => {
                const index = this.contacts.findIndex(contact => contact.id === id);
                if (index !== -1) {
                  this.contacts[index] = {...this.contacts[index], ...contactData};
                  this.displayedContact = this.contacts[index];
                }

                this.toaster.success('Contact updated successfully');
                this.loadContacts();
                this.emptyForm();
                this.closePopup();
              },
              error => {
                console.error('Error updating contact:', error);
                this.toaster.error('Error updating contact');
              }
            );
          }
        } else {
          this.modalRef = this.modal.open(this.modalContent, {size: 'lg'});
          Swal.fire(
            'Annulé',
            'Le contact n\'a pas été mis à jour.',
            'info'
          );
        }
      });
    } else {
      this.toaster.error('Please fill the form with valid data');
    }
  }

  // tslint:disable-next-line:typedef
  updateContact(id: any) {
    if (this.coordonneeGroup.valid) {
      this.modalRef?.close(); // Close the popup to ensure the SweetAlert2 dialog is on top

      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Voulez-vous vraiment mettre à jour ce contact?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, mettre à jour!',
        cancelButtonText: 'Annuler'
      }).then((result) => {
        if (result.isConfirmed) {
          const contactData = this.coordonneeGroup.value;

          if (this.fileToUpload) {
            // Upload new image if provided
            this.contactService.uploadImageWithoutId(this.fileToUpload).subscribe(
              (imageUrl: string) => {
                contactData.image = imageUrl; // Set the new image URL

                this.contactService.updateContact(id, contactData).subscribe(
                  () => {
                    const index = this.contacts.findIndex(contact => contact.id === id);
                    if (index !== -1) {
                      this.contacts[index] = { ...this.contacts[index], ...contactData };
                      this.displayedContact = this.contacts[index];
                    }

                    this.toaster.success('Contact updated successfully');
                    this.loadContacts();
                    this.emptyForm();
                    this.closePopup();
                  },
                  error => {
                    console.error('Error updating contact:', error);
                    this.toaster.error('Error updating contact');
                  }
                );
              },
              error => {
                console.error('Error uploading image:', error);
                this.toaster.error('Error uploading image');
              }
            );
          } else {
            // No new image, keep existing image
            this.contactService.updateContact(id, {
              ...contactData,
              image: this.displayedContact.image // Retain existing image URL
            }).subscribe(
              () => {
                const index = this.contacts.findIndex(contact => contact.id === id);
                if (index !== -1) {
                  this.contacts[index] = { ...this.contacts[index], ...contactData };
                  this.displayedContact = this.contacts[index];
                }

                this.toaster.success('Contact updated successfully');
                this.loadContacts();
                this.emptyForm();
                this.closePopup();
              },
              error => {
                console.error('Error updating contact:', error);
                this.toaster.error('Error updating contact');
              }
            );
          }
        } else {
          // Reopen the popup if the action was canceled
          this.modalRef = this.modal.open(this.modalContent, { size: 'lg' });
          Swal.fire(
            'Annulé',
            'Le contact n\'a pas été mis à jour.',
            'info'
          );
        }
      });
    } else {
      this.toaster.error('Please fill the form with valid data');
    }
  }

  // tslint:disable-next-line:typedef
  onCameraClick() {
    this.fileInput.nativeElement.click();
  }

  // tslint:disable-next-line:typedef
  onCameraClick1() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected3(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.imagePreview = e.target?.result;
      };

      reader.readAsDataURL(file);

      this.fileToUpload = file;
    }
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.contactService.uploadImage(this.displayedContact.id, file).subscribe(
        (response: any) => {
          // Use the Cloudinary URL returned from the backend
          this.displayedContact.image = response.imageUrl;
          this.toaster.success('Image uploaded successfully');
        },
        error => {
          console.error('Error uploading image:', error);
          this.toaster.error('Error uploading image');
        }
      );
    } else {
      this.toaster.error('Please select a file to upload.');
    }
  }

  // tslint:disable-next-line:typedef
  clearSearch() {
    this.searchText = '';
    this.filteredContacts = this.contacts;
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewInit() {
    const scroll1 = document.querySelector('#mainContactList');
    const ps = new PerfectScrollbar(scroll1);
  }

  // tslint:disable-next-line:typedef
  emptyForm() {
    this.coordonneeGroup = this._formBuilder.group({
      fname: ['', [Validators.required, lettersOnlyValidator(), noSpacesValidator()]],
      lname: ['', [Validators.required, lettersOnlyValidator(), noSpacesValidator()]],
      societe: ['', noSpacesValidator()],
      socadd: ['', noSpacesValidator()],
      soctlph: ['', [Validators.required, phoneNumberValidator(), noSpacesValidator()]],
      tlph: ['', [Validators.required, phoneNumberValidator(), noSpacesValidator()]],
      post: ['', noSpacesValidator()],
      comment: ['', noSpacesValidator()]
    });
    this.imageSrc = '../../assets/images/users/2.jpg'; // Reset to default or empty image
    this.fileToUpload = null; // Clear the file input
  }

  closePopup(): void {
    this.isCreate = false;
    this.emptyForm();
    this.modalRef?.close();
  }
  handleEvent(action: string, event: CalendarEvent, contact: any): void {
    console.log('contact= ', contact);

    if (contact) {
      this.isCreate = false;
      try {
        // Ensuring contact is a proper object before patching the value
        if (Object.keys(contact).length > 0) {
          this.coordonneeGroup.patchValue(contact);
        } else {
          console.warn('Empty contact object provided');
        }
      } catch (error) {
        console.error('Error patching form group with contact:', error);
      }
    } else {
      this.isCreate = true;
    }

    this.modalData = {action, event};
    this.modalRef = this.modal.open(this.modalContent, {size: 'lg'});
  }

  handleEvent1(action: string, event: CalendarEvent, contact: any): void {
    if (contact !== undefined) {
      this.isCreate = false;
      this.coordonneeGroup.patchValue(contact);
    } else {
      this.isCreate = true;
    }
    console.log('contact= ', contact);

    this.modalData = {action, event};
    this.modalRef = this.modal.open(this.modalContent, {size: 'lg'});
  }

  // tslint:disable-next-line:typedef
  changeDisplayedContact(newDispContact: any) {
    this.displayedContact = newDispContact;
  }

  // tslint:disable-next-line:typedef
  exportToPDF() {
    const doc = new jsPDF('p', 'mm', 'a4');

    // Définir les colonnes et les données pour le tableau
    const columns = [
      {header: 'Nom et Prénom', dataKey: 'fullname'},
      {header: 'Société', dataKey: 'societe'},
      {header: 'Adresse Société', dataKey: 'socadd'},
      {header: 'Téléphone', dataKey: 'tlph'},
      {header: 'Téléphone Société', dataKey: 'soctlph'},
      {header: 'Image', dataKey: 'image'}
    ];

    // Préparer les données avec des images en base64
    const data = this.contacts.map(contact => ({
      fullname: `${contact.fname} ${contact.lname}`, // Combiner fname et lname
      societe: contact.societe,
      socadd: contact.socadd,
      tlph: contact.tlph,
      soctlph: contact.soctlph,
      image: contact.image ? contact.image : '' // Données d'image en base64
    }));

    // Ajouter le tableau au PDF
    (doc as any).autoTable({
      columns,
      body: data,
      margin: {top: 20},
      styles: {
        fontSize: 10,
        cellPadding: 5,
        valign: 'middle',
        halign: 'center',
        fillColor: [255, 255, 255], // Fond blanc
        textColor: [0, 0, 0], // Texte noir
        lineColor: [44, 62, 80], // Lignes gris foncé
        lineWidth: 0.1
      },
      headStyles: {
        fillColor: [44, 62, 80], // Fond gris foncé pour l'en-tête
        textColor: [255, 255, 255], // Texte blanc dans l'en-tête
        fontSize: 12
      },
      columnStyles: {
        image: {
          cellWidth: 25, // Ajuster la largeur de la colonne pour les images
          cellPadding: 0, // Pas de padding pour éviter d'afficher du texte
          halign: 'center', // Aligner l'image au centre
          valign: 'middle' // Aligner l'image au milieu
        }
      },
      // tslint:disable-next-line:no-shadowed-variable
      didDrawCell: (data: any) => {
        if (data.column.dataKey === 'image' && data.cell.raw) {
          const imageData = data.cell.raw as string;

          // Déterminer le type de l'image
          const imageType = imageData.startsWith('data:image/jpeg') ? 'JPEG' : 'PNG';

          try {
            // Ajouter l'image à la cellule
            doc.addImage(imageData, imageType, data.cell.x, data.cell.y, data.cell.width, data.cell.height);
          } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'image:', error);
          }

          // Réinitialiser la valeur de la cellule pour éviter l'affichage du texte
          data.cell.raw = '';
        }
      }
    });

    // Sauvegarder le PDF
    doc.save('contacts-list.pdf');
  }

  // tslint:disable-next-line:typedef
  deleteContact(id: any) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer ce contact ?',
      text: 'Cette action est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactService.deletecontact(id).subscribe(
          () => {
            Swal.fire(
              'Supprimé!',
              'Le contact a été supprimé avec succès.',
              'success'
            );

            // Enlever le contact supprimé de la liste des contacts
            this.contacts = this.contacts.filter(contact => contact.id !== id);
            this.filteredContacts = this.filteredContacts.filter(contact => contact.id !== id);
            this.displayedContact = {
              nom: '',
              prenom: '',
              adresseSociete: '',
              commentaire: '',
              id: '',
              post: '',
              societe: '',
              telephone: '',
              telephoneSociete: '',
              image: ''
            };

          },
          error => {
            Swal.fire(
              'Erreur!',
              'La suppression a échoué.',
              'error'
            );
            this.loadContacts();
          }
        );
      } else {
        Swal.fire(
          'Annulé',
          'La suppression a été annulée.',
          'info'
        );
      }
    });
  }
  // tslint:disable-next-line:typedef
  searchContacts() {
    this.filteredContacts = this.contacts.filter(contact =>
      (contact.fname + ' ' + contact.lname).toLowerCase().includes(this.searchText.trim().toLowerCase())
    );
  }

  onFileSelected2(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.contactService.uploadImageWithoutId(file).subscribe(
        (imageUrl: string) => {
          this.imageSrc = imageUrl; // Update the image source for display
          this.toaster.success('Image uploaded successfully');
        },
        error => {
          console.error('Error uploading image:', error);
          this.toaster.error('Error uploading image');
        }
      );
    } else {
      this.toaster.error('Please select a file to upload.');
    }
  }


  // Open file input dialog
  onCameraClick3(): void {
    this.fileInput.nativeElement.click();
  }
}

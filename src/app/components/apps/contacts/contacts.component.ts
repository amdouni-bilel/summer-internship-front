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
import {lettersOnlyValidator, phoneNumberValidator} from '../validators/custom-validators'; // Importez vos validateurs
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import Qrious from 'qrious';
//import * as jsPDF from "jspdf";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
  qrCodeImage: string;
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
    image: '',
    //qr_code: 'initial_base64_encoded_qr_code'
    qr_code: ""
  };
  searchText: string = '';
  imageSrc: string = '../../assets/images/users/2.jpg'; // Default image source

  @ViewChild('fileInput') fileInput: ElementRef;
  private http: any;

  constructor(private modal: NgbModal,
              private contactService: ContactsService,
              private toaster: ToastrService,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.generateQRCode();
    this.loadContacts();
    this.emptyForm();
  }

  generateQRCode() {
    const qr = new Qrious({
      value: this.displayedContact.qrcode
    });

    this.qrCodeImage = qr.toDataURL();
  }

  /* onCameraClick(): void {
     this.fileInput.nativeElement.click();
   }**/

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
  /*
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
*/

  // contacts.component.ts
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

  /*saveContact() {
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
                  // Préparez l'objet contactData avec les valeurs du formulaire
                  const contactData = this.coordonneeGroup.value;

                  // Gérer le téléchargement de l'image s'il y en a une
                  if (this.fileInput.nativeElement.files.length) {
                    const file = this.fileInput.nativeElement.files[0];
                    return this.contactService.uploadImage2(file).pipe(
                      switchMap(imageUrl => {
                        // Ajouter l'URL de l'image à l'objet contactData
                        contactData.image = imageUrl;
                        // Ajouter le contact avec l'URL de l'image
                        return this.contactService.savecontact(contactData).pipe(
                          map(() => {
                            this.toaster.success('Contact ajouté avec succès et image téléchargée');
                            this.loadContacts();
                            this.coordonneeGroup.reset();
                          }),
                          catchError(error => {
                            console.error('Erreur lors de l\'ajout du contact:', error);
                            this.toaster.error('Erreur lors de l\'ajout du contact');
                            return new Observable<void>(); // Retourne un observable vide
                          })
                        );
                      }),
                      catchError(error => {
                        console.error('Erreur lors du téléchargement de l\'image:', error);
                        this.toaster.error('Erreur lors du téléchargement de l\'image');
                        return new Observable<void>(); // Retourne un observable vide
                      })
                    );
                  } else {
                    // Ajouter le contact sans image
                    return this.contactService.savecontact(contactData).pipe(
                      map(() => {
                        this.toaster.success('Contact ajouté avec succès');
                        this.loadContacts();
                        this.coordonneeGroup.reset();
                      }),
                      catchError(error => {
                        console.error('Erreur lors de l\'ajout du contact:', error);
                        this.toaster.error('Erreur lors de l\'ajout du contact');
                        return new Observable<void>(); // Retourne un observable vide
                      })
                    );
                  }
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
*/

  // contacts.component.ts
  saveContact() {
    if (this.coordonneeGroup.valid) {
      const contactData = this.coordonneeGroup.value;

      if (this.fileInput.nativeElement.files.length) {
        const file = this.fileInput.nativeElement.files[0];
        this.contactService.uploadImage2(file).pipe(
          switchMap(imageUrl => {
            contactData.image = imageUrl;
            return this.contactService.savecontact(contactData);
          })
        ).subscribe(
          contact => {
            this.toaster.success('Contact added successfully');
            this.loadContacts();
          },
          error => {
            console.error('Error adding contact:', error);
            this.toaster.error('Error adding contact');
          }
        );
      } else {
        this.contactService.savecontact(contactData).subscribe(
          contact => {
            this.toaster.success('Contact added successfully');
            this.loadContacts();
          },
          error => {
            console.error('Error adding contact:', error);
            this.toaster.error('Error adding contact');
          }
        );
      }
    } else {
      this.toaster.error('Please fill the form with valid data');
    }
  }

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

  updateContact(id: any) {
    if (this.coordonneeGroup.valid) {
      const contactData = this.coordonneeGroup.value;
      const index = this.contacts.findIndex(contact => contact.id === id);
      if (index !== -1) {
        this.contacts[index] = {...this.contacts[index], ...this.coordonneeGroup.value};
      }

      // Réinitialiser le formulaire et le contact affiché
      this.displayedContact = this.contacts[index];
      if (!this.fileInput.nativeElement.files.length) {
        contactData.image = this.displayedContact.image;
      }

      this.contactService.updateContact(this.displayedContact.id, contactData).subscribe(
        (file: File) => {
          if (this.fileInput.nativeElement.files.length) {
            const file = this.fileInput.nativeElement.files[0];
            this.contactService.uploadImage(this.displayedContact.id, file).subscribe(
              () => {
                this.toaster.success('Contact updated and image uploaded successfully');
                this.loadContacts();
                this.emptyForm();
                this.closePopup();
              },
              error => {
                console.error('Error uploading image:', error);
                this.toaster.error('Error uploading image');
              }
            );
          } else {
            this.toaster.success('Contact updated successfully');
            this.emptyForm();
            this.closePopup();
            this.loadContacts();
          }
        },
        error => {
          console.error('Error updating contact:', error);
          this.toaster.error('Error updating contact');
        }
      );
    } else {
      this.toaster.error('Please fill the form with valid data');
    }
  }


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
      columns: columns,
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

  /*updateContact(id: any) {
    if (this.coordonneeGroup.valid) {
      this.contactService.updateContact(id, this.coordonneeGroup.value).subscribe(
        data => {
          this.toaster.success('Successfully updated');

          // Mettre à jour le contact dans la liste des contacts
          const index = this.contacts.findIndex(contact => contact.id === id);
          if (index !== -1) {
            this.contacts[index] = {...this.contacts[index], ...this.coordonneeGroup.value};
          }

          // Réinitialiser le formulaire et le contact affiché
          this.displayedContact = this.contacts[index];
          this.emptyForm();
          this.closePopup();
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
*/
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

    this.modalData = {action, event};
    this.modalRef = this.modal.open(this.modalContent, {size: 'lg'});
  }

  closePopup(): void {
    this.isCreate = false;
    this.emptyForm();
    this.modalRef?.close();
  }

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

  onCameraClick() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };

      reader.readAsDataURL(file);

      if (this.displayedContact.id) {
        this.contactService.uploadImage(this.displayedContact.id, file).subscribe(
          () => {
            this.displayedContact.image = `http://localhost:9001/files/${file.name}`;
            this.toaster.success('Image uploaded successfully');
          },
          error => {
            console.error('Error uploading image:', error);
            this.toaster.error('Error uploading image');
          }
        );
      } else {
        this.toaster.error('Please select a contact before uploading an image.');
      }
    }
  }
}

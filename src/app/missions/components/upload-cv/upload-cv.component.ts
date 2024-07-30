import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MissionControllerService } from 'src/app/missions/config/services';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UploadCvService} from "../../services/upload-cv.service";
import {ToastrService} from "ngx-toastr";
import Swal from "sweetalert2";

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.scss']
})
export class UploadCvComponent implements OnInit{
  missions: any;
   missionId: any ;
  uploadCVForm: FormGroup;
  fileToUpload: File = null;
  @ViewChild('labelImport') labelImport: ElementRef;
  timerInterval: any;
   userId: any;
  constructor(
    private missionService: MissionControllerService,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private uploadCvService: UploadCvService,
    private toastr: ToastrService  )
  {
    this.route.paramMap.subscribe(params => {
      this.missionId = +params.get('id');
      console.log('ID de la mission récupéré :', this.missionId);
    });
  }

  ngOnInit(): void {
    this.uploadCVFormBuilder()
    this.getDetailsMission()

    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    if (parsedUser) {
      this.userId = parsedUser.id;
      console.log(this.userId, 'id user');
      console.log(user);
    } else {
      console.error('L\'utilisateur n\'est pas défini dans le local storage ou ne peut pas être analysé.');
    }
  }



  getDetailsMission() {
    this.missionService.getMissionById(this.missionId).subscribe(
      (data: any) => {
        this.missions = data;
        console.log('this.missions: ', this.missions);
      },
        (error) => {
          console.log('Error fetching missions: ', error);
        }
    );
    }

  uploadCVFormBuilder(): void {
    this.uploadCVForm = this._formBuilder.group({
      nameClient: ['', ''],
      mail: ['', ''],
      descriptif: ['', ''],
      tjm: ['', ''],
    });
  }
    onFileChange(files: FileList) {
      this.labelImport.nativeElement.innerText = Array.from(files)
        .map(f => f.name)
        .join(',');
      this.fileToUpload = files.item(0);
    }

  uploadFile() {
    if (this.fileToUpload) {
      this.openModalSweatAlert();
      this.uploadCvService.uploadAndSaveData(this.fileToUpload , this.userId ,this.missionId ).subscribe(
        (response) => {
          console.log('CV uploadé avec succès : ', response);
          this.toastr.success('CV uploadé avec succès', 'Success');
          this.closeModalSweatAlert();
          this.fileToUpload = null;
          this.labelImport.nativeElement.innerText = "Choisir un fichier";

        },
        (error) => {
          console.error('Erreur lors de l\'upload du CV : ', error);
          this.toastr.error('Erreur lors de l\'upload du CV', 'Erreur');
          this.closeModalSweatAlert();
        }
      );
    } else {
      console.error('Aucun fichier sélectionné');
      this.toastr.error('Aucun fichier sélectionné', 'Erreur');
    }
  }

  closeModalSweatAlert() {
    Swal.close();
  }


  openModalSweatAlert() {
    this.timerInterval;
    Swal.fire({
      title: "Upload en cours!",
      html: "",
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        if (timer) {
          this.timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        }
      },
      willClose: () => {
        clearInterval(this.timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }
}





import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeService } from '../resume.service';
import { Resume } from '../resume.model';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ApiConfiguration } from 'src/app/api/api-configuration';


@Component({
  selector: 'app-maincv',
  templateUrl: './maincv.component.html',
  styleUrls: ['./maincv.component.scss']
})
export class MaincvComponent implements OnInit {
  public isEditMode: boolean = false;
  resume: any;
  modifiedResume: any;
  fileToUpload: File | null ;
  data:any;
  GESTION_CV = this.apiconf.gestioncv;
  URL_CV = '/mycv';
  responseReceived = false;

  constructor( private router: Router,
    private http: HttpClient,
    private servicd: ResumeService, private toast: ToastrService, private apiconf : ApiConfiguration) { }

  ngOnInit(): void {
    const data = this.servicd.getItem('mycv');
    this.resume = data;

  }



  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }




 

  uploadFile(event: any) {
    const file = event.target.files[0];

    if (!file) {
      this.toast.error('Please upload a file');
      return;
    }

    const uploadData = new FormData();
    uploadData.append('file', file);
    this.servicd.file = uploadData;

    this.http.post<any>(this.GESTION_CV + this.URL_CV, uploadData).subscribe(
      (response) => {
        this.servicd.setItem('mycv', JSON.stringify(response));
        this.resume = response;
        this.modifiedResume = { ...this.resume };
        this.responseReceived = true;
      },
      (error) => {
        if (error.response && error.response.status === 404) {
          this.toast.error('Error occurred while uploading the file');;
          console.log("Error occurred while uploading the file:", error);

        } else if (error.response && error.response.status === 500) {

          console.log("Server error:", error);

        } else {

          console.log("Other error:", error);

        }


      }
    );
  }



  navigateToExperience() {
    this.servicd.setItem('mycv', JSON.stringify(this.resume));
    this.router.navigate(['gestion-cv/experience']);
  }
  navigateToMatching() {

    this.router.navigate(['gestion-cv/matching']);
  }
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.servicd.setItem('mycv', JSON.stringify(this.resume));
  }

  saveChanges() {
    this.isEditMode = false;
    this.resume = { ...this.modifiedResume };
    this.servicd.setItem('mycv', JSON.stringify(this.resume));
  }
  modifyFields() {
    this.servicd.setItem('mycv', JSON.stringify(this.resume));

  }

}

import { Component, OnInit } from '@angular/core';
import { Formation, Resume } from '../resume.model';
import { environment } from 'src/environments/environment';
import { ResumeService } from '../resume.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiConfiguration } from 'src/app/api/api-configuration';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  resume!: Resume;
  formations!: Formation[];
  fileToUpload: File | null ;
  modifiedResume: any;
  GESTION_CV  = this.apiconf.gestioncv;
  URL_FOR = '/myfor';

  public isEditMode: boolean = false;
  constructor(private resumeService: ResumeService,
    private http: HttpClient,private route: Router, private toast: ToastrService, private apiconf : ApiConfiguration) { }

  ngOnInit(): void {
    this.uploadFile();
     this.resume = this.resumeService.getResume();
     this.formations = this.resume.formations;
  }
  uploadFile() {
    if (!this.resumeService.file) {
      this.toast.error('Please upload a file');
      return;
    }else{

    this.http.post<any>( this.GESTION_CV + this.URL_FOR, this.resumeService.file).subscribe(
      (response) => {
        this.resumeService.setItem('myfor', response);
        console.log(response);
        this.resume.formations = response;
        this.modifiedResume = { ...this.resume.formations };
      },
      (error) => {
        if (error.response && error.response.status === 404) {
          this.toast.error('Error occurred while uploading the file');
          console.log("Error occurred while uploading the file:", error);

        } else if (error.response && error.response.status === 500) {

          console.log("Server error:", error);

        } else {

          console.log("Other error:", error);

        }


      }
    );}
  }
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.resumeService.setItem('myfor', JSON.stringify(this.resume.formations));
  }

  deleteFormation(form :any){
    if(this.isEditMode){
      const index = this.resume.formations.indexOf(form);
      if (index !== -1) {
        this.resume.formations.splice(index, 1);
      }
      this.resumeService.setItem('myfor', JSON.stringify(this.resume.formations));
    }
  }
  addFormation() {
    if(this.isEditMode){
    const newFormation: Formation = {

      titre_f: '',
      ecole: '',
      date_debut_f:'',
      date_fin_f:''
    };

    this.resume.formations.push(newFormation);
    console.log(this.resume.formations)
    this.resumeService.setItem('myfor', JSON.stringify(this.resume.formations));
  }
  }


}

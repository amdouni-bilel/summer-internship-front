import { Component, OnInit } from '@angular/core';
import { Experience, Formation, Resume } from '../resume.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ResumeService } from '../resume.service';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { ApiConfiguration } from 'src/app/api/api-configuration';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  fileToUpload: File | null ;
  modifiedResume: any;
  resume!: Resume;
  experiences!: Experience[];

  GESTION_CV = this.apiconf.gestioncv;
  URL_EXP = '/myexp';
  SAV_EXP= '/savExp';
  SAV_FOR='/savFor';
  SAV_CV= '/sav';

  public isEditMode: boolean = false;

  showDropdown: boolean = false;
  selectedFormat: string = '';

  constructor(private router : Router , private resumeService: ResumeService,

    private http: HttpClient, private toast: ToastrService, private apiconf : ApiConfiguration) { }

  ngOnInit() {
   this.uploadFile()
    this.resume = this.resumeService.getResume();

    this.experiences = this.resume.experience;

  }




  uploadFile() {
    if (!this.resumeService.file) {
      this.toast.error('Please upload a file');
      return;
    }

    this.http.post<any>(this.GESTION_CV + this.URL_EXP, this.resumeService.file).subscribe(
      (response) => {
        console.log(response);
        this.resumeService.setItem('myexp', response);
        this.resume.experience = response;
        this.modifiedResume = { ...this.resume.experience };
      },
      (error) => {
        console.error('Error occurred while uploading the file:', error);
        this.toast.error('Error occurred while uploading the file');

      }
    );
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.resumeService.setItem('myexp', JSON.stringify(this.resume.experience));


  }

  async sendDataToBackendExp() {
    try {

      this.resume.experience.forEach(element => {
        if (typeof element.environnement === 'string') {
          element.environnement = [element.environnement];
        }
        if (typeof element.tache === 'string') {
          element.tache = [element.tache];
        }
      });

      this.resumeService.setItem('myexp', JSON.stringify(this.resume.experience));
      const storedData = this.resumeService.getItem('myexp');

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const id = this.resumeService.generatedId;

      const response = await this.http.post( this.GESTION_CV+`/savExp/${id}`, this.resume.experience, { headers }).toPromise();

      console.log('Data sent successfully Experience:', response);
    } catch (error) {
      if (error.response && error.response.status === 404) {

        console.log("Err sending data", error);

      } else if (error.response && error.response.status === 500) {

        console.log("Server error:", error);

      } else {

        console.log("Other error:", error);

      }
    }
  }


  deleteExperience(exp: any) {
    if(this.isEditMode){
    const index = this.resume.experience.indexOf(exp);
    if (index !== -1) {
      this.resume.experience.splice(index, 1);
    }
    this.resumeService.setItem('myexp', JSON.stringify(this.resume.experience));
  }
  }
  addExperience() {
    if(this.isEditMode){
    const newExperience: Experience = {

      titre_E: '',
      societe: '',
      tache: ['',''],
      environnement: ['',''],
      date_debut_E: '',
      date_fin_E: ''
    };

    this.resume.experience.push(newExperience);

    this.resumeService.setItem('myexp', JSON.stringify(this.resume.experience));
  }
  }
  saveChanges(): void {
    this.isEditMode = false;
    this.resumeService.setItem('myexp', JSON.stringify(this.resume.experience));
  }


  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectFormat(format: string) {
    this.selectedFormat = format;
    this.downloadResume();
    this.showDropdown = false;
  }

  downloadResume() {
    if (this.selectedFormat === 'pdf') {
      this.downloadResumePdf();
    } else if (this.selectedFormat === 'word') {
      this.downloadResumeWord();
    }
  }



  downloadResumePdf() {
    const id = this.resumeService.generatedId;
    if (id) {
      this.resumeService.downloadResume(id).subscribe(
        (response) => {
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(response);
          link.download = 'resume.pdf';
          link.click();

          window.URL.revokeObjectURL(link.href);
        },
        (error) => {
          if (error.response && error.response.status === 404) {
            this.toast.error('Error downloading resume. Please save the CV before downloading.');
            console.log("Resource not found:", error);

          } else if (error.response && error.response.status === 500) {

            console.log("Server error:", error);

          } else {

            console.log("Other error:", error);

          }

        }
      );
    } else {
      console.log('Invalid ID. Unable to download resume.');
      this.toast.error('Please save the CV before downloading.');
    }
  }

  downloadResumeWord() {
    const id = this.resumeService.generatedId;
    const name = this.resumeService.getResume.name;
    if (id && name) {
      const fileName = name.substring(0, 2) + '_resume.docx';

      this.resumeService.downloadResumeword(id).subscribe(
        (response) => {
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(response);
          link.download = fileName;
          link.click();

          window.URL.revokeObjectURL(link.href);
        },
        (error) => {
          if (error.response && error.response.status === 404) {
            this.toast.error('Error downloading resume. Please save the CV before downloading.');
            console.log("Error downloading resume:", error);

          } else if (error.response && error.response.status === 500) {

            console.log("Server error:", error);

          } else {

            console.log("Other error:", error);

          }


        }
      );
    } else {
      console.log('Invalid ID. Unable to download resume.');
      this.toast.error('Please save the CV before downloading.');
    }
  }

    async sendDataToBackendcv() {
      try {
        const storedData = this.resumeService.getItem('mycv');
        const resume: Resume = JSON.parse(storedData);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        const response = await this.http.post(this.GESTION_CV+'/sav', resume, { headers }).toPromise();

        const gene = response['id'];
        console.log('Generated ID:', gene);
        this.resumeService.generatedId = gene;
        console.log('Data sent successfully CV:', response);

        await this.sendDataToBackendExp();
        await this.sendDataToBackendfor();


      } catch (error) {
        if (error.response && error.response.status === 404) {

          console.log("Error sending data:", error);

        } else if (error.response && error.response.status === 500) {

          console.log("Server error:", error);

        } else {

          console.log("Other error:", error);

        }


      }
    }
    async sendDataToBackendfor() {
      try {
        const storedData = this.resumeService.getItem('myfor');
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const id = this.resumeService.generatedId;
        console.log('Formation Generated Id :'+id);
      const val=  await this.http.post(this.GESTION_CV+'/savFor/' + id, storedData, { headers }).toPromise();

        console.log('Formation Data sent successfully :'+val);

      }catch (error) {
        if (error.response && error.response.status === 404) {

          console.log("Error sending formation data:", error);

        } else if (error.response && error.response.status === 500) {

          console.log("Server error:", error);

        } else {

          console.log("Other error:", error);

        }

      }
    }

    formatTasks(tachList: string[]): string[] {
      const linesWithLineBreak: string[] = [];

      for (const line of tachList) {
        if (line.includes(":")) {
          linesWithLineBreak.push("\n" + line);
        } else {
          linesWithLineBreak.push(line);
        }
      }
      this.resumeService.setItem('myexp', JSON.stringify(this.resume.experience));
      return linesWithLineBreak;
    }


}

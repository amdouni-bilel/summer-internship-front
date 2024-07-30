import { Injectable } from '@angular/core';
import { Resume } from './resume.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, map } from 'rxjs';
import { ApiConfiguration } from '../api/api-configuration';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {


  
  file
  generatedId
  setfile(data){
    this.file = data
  }
  constructor(private http: HttpClient,private api:ApiConfiguration) {}

  url = this.api.gestioncv
  private resumeData: Resume = {
    id:'',
    name: '',
    mail: '',
    titre:'',
    addresse: 'Experienced software developer with a passion for Angular.',
    phone: '55555555',
    nb_an_exp:'3 ans',
    langues: ['eng','fr'],
    experience: [
      {titre_E: 'ABC Inc.', societe: 'Senior Developer', tache:[''],environnement:[''], date_debut_E: '2019-01', date_fin_E: '2021-12' },
      {titre_E: 'XYZ Corp.', societe: 'Junior Developer',tache:[''],environnement:[''], date_debut_E: '2017-06', date_fin_E: '2018-12' }
    ],
    formations: [
      { titre_f: 'Bachelor of Science', ecole: 'University of ABC', date_debut_f: '2014-09', date_fin_f: '2018-05' },
      { titre_f: 'High School Diploma', ecole: 'XYZ High School', date_debut_f: '2010-09', date_fin_f: '2014-05' }
    ],
    competences: ['Angular', 'JavaScript', 'HTML', 'CSS']
  };

  getResume(): Resume {
    return this.resumeData;
  }
  updateResume(updatedResume: Resume) {
    this.resumeData.name = updatedResume.name;
    this.resumeData.mail = updatedResume.mail;
    this.resumeData.titre = updatedResume.titre;
    this.resumeData.phone = updatedResume.phone;
    this.resumeData.addresse = updatedResume.addresse;
    this.resumeData.nb_an_exp = updatedResume.nb_an_exp;
    this.resumeData.langues = [...updatedResume.langues];
    this.resumeData.experience = [...updatedResume.experience];
    this.resumeData.formations = [...updatedResume.formations];
    this.resumeData.competences = [...updatedResume.competences];
  }
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }

  setItem(key: string, value: any): void {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  }
  downloadResume(Id: string): Observable<Blob> {
    const options = {
      responseType: 'blob' as 'json', // Set the response type as Blob
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(this.url+'/download/'+Id, options)
      .pipe(
        map((response: any) => {
          return new Blob([response], { type: 'application/pdf' });
        })
      );
  }
  downloadResumeword(Id: string): Observable<Blob> {
    const options = {
      responseType: 'blob' as 'json', // Set the response type as Blob
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(this.url+'/downloadword/' + Id, options)
      .pipe(
        map((response: any) => {
          return new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        })
      );
  }

}

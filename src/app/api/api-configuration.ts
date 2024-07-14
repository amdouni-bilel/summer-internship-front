/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = environment.apiUrl;
  gestioncv : string  = environment.gestioncv;
   OCR_SaveUrl : string = environment.OCR_SaveUrl;
   OCR_Pre: string = environment.OCR_Pre;
  //MAIL_MANAGER_URL:string=environment.mailManagerURL;
  MAIL_MANAGER_URL = 'http://localhost:8080/api'; // Mettez ici l'URL de votre backend Spring Boot

  ORGANIGRAMME_STRUCTURES_URL: string=environment.organigrammeURL+'/structures/';
  ORGANIGRAMME_PERSONNEL_URL: string=environment.organigrammeURL+'/personnel/';
  AWS_URL: string=environment.s3URL+'aws';
  AWS_URL_Boite_Mail: string=environment.s3URL+'BoiteMail';
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
  gestioncv?:string;
}

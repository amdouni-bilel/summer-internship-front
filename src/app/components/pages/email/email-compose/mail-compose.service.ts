import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { MailmanagerService } from 'src/app/administration/mailmanager/mailmanager.service';

@Injectable({
  providedIn: 'root'
})
export class MailComposeService {

  private apiUrl = this.apiconf.MAIL_MANAGER_URL+'mail';


  constructor(private mailService:MailmanagerService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ,private apiconf : ApiConfiguration
    ) { }

  public sendEmail(coordonee:any): Observable<any>
  {
   
      return this.http.post<any>(this.apiUrl,coordonee);
  }

  getallEmails(){
    return this.http.get<any>(this.apiUrl);
  }

  deleteEmail(id:any){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
 

  sanitizedString: SafeHtml;

  sanitizeString(htmlString: string): String {
    const prefix = 'SafeValue must use [property]=binding: ';
    const suffix = ' (see http://g.co/ng/security#xss)';

   
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlString, 'text/html');
    const textContent = parsedHtml.body.textContent;
   
    let model = this.sanitizer.bypassSecurityTrustHtml(textContent).toString()
    if (model.startsWith(prefix)) {
      model = model.substring(prefix.length);
    }
    
    if (model.endsWith(suffix)) {
      model = model.substring(0, model.length - suffix.length);
    }
    
    return model
  }

}
 
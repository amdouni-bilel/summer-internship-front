import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

export abstract class GenericService {
     basrUrl = environment.apiUrl;
    baseApi = environment.prefixApi;
    newurl = environment.apiUrlProcess

    apiUrl = this.basrUrl+environment.prefixModuleAuth+this.baseApi;
    apiFacturationUrl = this.basrUrl+environment.prefixModuleFacuration;
    apiMissionUrl = this.basrUrl+environment.prefixModuleMission;
    public = environment.public;
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },),
    observe: "response" as "body"
  };

    headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
     });
   handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
        } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
     //   window.alert(errorMessage);
        return throwError(() => {
        return errorMessage;
        });
  }

}

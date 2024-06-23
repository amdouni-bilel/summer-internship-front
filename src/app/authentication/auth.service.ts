import { Injectable } from '@angular/core';
import { GenericService } from '../generic.services';
import { Login } from './login-page/login.model';

import { Observable } from 'rxjs';
import { AuthenticatedUser } from './login-page/authenticated.user.model';
import { retry, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService extends GenericService{


  constructor(private http: HttpClient) {
    super();
  }


  public login(login: Login): Observable<any>
  {

  let options = { headers: this.headers};

    return this.http
      .post<any>(this.newurl + this.public+'/login',login,options);

     // .pipe(retry(1), catchError(this.handleError));
  }

  isLoggedIn(){
    let token = localStorage.getItem("token");
    if (token) {
      return true ;
    } else {
      return false;
    }
  }

  getCurrentUser(): Observable<any> {
    // Ajouter le jeton d'authentification dans l'en-tête de la requête

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    return this.http.get<any>(this.apiUrl, { headers: headers });
  }


  //private apiUrlCheckUsername = 'http://localhost:9001/api/admin/user';
  private apiUrlCheckUsername = 'http://104.225.216.185:9012/api/admin/user';
  private token = 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJjb20ubW9zb2Z0eSIsInN1YiI6IjIsc2ltcGxldXNlckBnbWFpbC5jb20iLCJleHAiOjE3MDY4MTczODEsImlhdCI6MTcwNjc4MTM4MSwicm9sZXMiOiJTSU1QTEVfVVNFUiJ9.DfE0siS2rxQtq3MBw3kHHCz8kWvA-UpogJFX0mhyt1-5pnlPHeEDUgUbya1bAGgw11vLwNDq9Y4fUe-LYm7TT9hLLaX7VkW1E1eC7uBI2uXnxqZZSNiZIsO7wZSqKbPnXD3R_Vu3Skw7HcddEnhXhcaadYYr_AHpZ0HG7i2wUXoE65pQ2dyqkVhY5FMCOzc7NmPgC0CHEADhY5Eq_lK9fNI1lVTn-HGmlGRTesd-7YBimpDSLne_r6z97j8jSKOwqqon1azB4zgzKoYQAhNse3QpCoOTMe0RNIx9_2ZkQej_P710hnPrlHOqiX5GZt-HV1YWe432rkQMKqoXUuduO6bdlmiASF9pgkP6VtKETjGcMRde-KfWi2d-neJPI_7wVYqQ8adAuUAwEtItEWPkJ98-H4DZeGYo46erNxhGWCifQRl2nMmRedAtZB4x1LtKL94DI6-BBMbbGRij6p97AR8OnpTRLRUpQjcPodN5k7itJtodDkw3k2HJrXkkktacz0R-6V7rIqHcK7O4Ppo6Oe1Ud5IZpjyFKBNw84uDcOIp3ieLuD4IgsiqYDQJ9y2flP3P9y91uNtf05tK12ekOAQjZNbLuDqyS1FoZsrnVEeWB4emkgKAYutztAwZddy284PhkleK_UcTW1-60ztIOkGi0H1QXWWSTmXTTzO4c24';
  checkUsernameExists(username: string): Observable<{ exists: boolean }> {
    // Création de l'en-tête avec le jeton d'authentification
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<{ exists: boolean }>(`${this.apiUrlCheckUsername}/usernameExists?username=${username}`, { headers });
  }
}

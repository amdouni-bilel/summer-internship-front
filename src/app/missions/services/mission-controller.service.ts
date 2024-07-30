import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {BaseService} from '../config/base-service';
import {ApiConfiguration} from '../config/api-configuration';
import {StrictHttpResponse} from '../config/strict-http-response';
import {RequestBuilder} from '../config/request-builder';
import {Observable, of} from 'rxjs';
import {map, filter, tap} from 'rxjs/operators';
import {MissionReceived} from '../models/mission-received';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class MissionControllerService extends BaseService {
  missions: any;
  private apiUrlUpload = `${environment.missionApiUrl}/upload`;
  private apiUrlAllMissions = `${environment.missionApiUrl}/missions/`;
  private apiUrlMyMissions = `${environment.missionApiUrl}/missions/my-missions`;
  static readonly CreateMissionPath = '/create-mission';

  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }


  getAllMissions(page: number, size: number): Observable<any> {
    const url = `${this.apiUrlAllMissions}?page=${page}&size=${size}`;
    return this.http.get<any>(url, {headers: this.getHeaders()});
  }

  getMyMissions(page: number, size: number): Observable<any> {
    const url = `${this.apiUrlMyMissions}?page=${page}&size=${size}`;
    return this.http.get<any>(url, {headers: this.getHeaders()});
  }


  checkMissionsForCandidate(candidateId: number, missionId: number): Observable<boolean> {
    const url = `${this.apiUrlUpload}/candidates/${candidateId}/missions/${missionId}/hasMissions`;
    return this.http.get<boolean>(url , {headers: this.getHeaders()});
  }








  getMissions(): Observable<any> {
    if (this.missions) {
      return of(this.missions);
    } else {
      return this.http.get<any>(`${this.apiUrlAllMissions}/missions`, {headers: this.getHeaders()}).pipe(
        tap(missions => this.missions = missions)
      );
    }
  }

  getMissionById(id: number): Observable<any> {
    return this.http.get(`${environment.missionApiUrl}/missions/${id}`, {headers: this.getHeaders()});
  }

  addMission(missionData: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${environment.missionApiUrl}/missions`, missionData, {headers})
  }


  createMission$Response(params: {
    body: MissionReceived
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MissionControllerService.CreateMissionPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({

      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }

  createMission(params: {
    body: MissionReceived
  }): Observable<void> {

    return this.createMission$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

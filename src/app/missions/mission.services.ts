import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntityModelMission } from './models/entity-model-mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private baseUrl = 'http://localhost:9001/api/mission';

  constructor(private http: HttpClient) { }

  getAllMissions(): Observable<EntityModelMission[]> {
    return this.http.get<EntityModelMission[]>(`${this.baseUrl}`);
  }

  getMissionById(id: number): Observable<EntityModelMission> {
    return this.http.get<EntityModelMission>(`${this.baseUrl}/${id}`);
  }

  createMission(mission: EntityModelMission): Observable<EntityModelMission> {
    return this.http.post<EntityModelMission>(`${this.baseUrl}`, mission);
  }

  updateMission(id: number, mission: EntityModelMission): Observable<EntityModelMission> {
    return this.http.put<EntityModelMission>(`${this.baseUrl}/${id}`, mission);
  }

  deleteMission(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }






  



}

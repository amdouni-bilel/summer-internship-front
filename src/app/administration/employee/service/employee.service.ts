import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {EmployeeResponse} from '../model/employee-response';
import {EmployeeRequest} from '../model/employee-request';
import {Page} from '../../../shared/interfaces/Page';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeesByCompany(page: number = 0, size: number = 5): Observable<Page<EmployeeResponse>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    // TODO: change company id
    return this.http.get<Page<EmployeeResponse>>(`${environment.employeeApiUrl}/company/1`, { params });
  }

  createEmployee(employeeRequest: EmployeeRequest): Observable<EmployeeResponse> {
    return this.http.post<EmployeeResponse>(`${environment.employeeApiUrl}`, employeeRequest);
  }

  getEmployees(): Observable<EmployeeResponse[]> {
    return this.http.get<EmployeeResponse[]>(`${environment.employeeApiUrl}`);
  }

  getEmployeeById(id: number): Observable<EmployeeResponse> {
    return this.http.get<EmployeeResponse>(`${environment.employeeApiUrl}/${id}`);
  }

  updateEmployee(id: number, employeeRequest: EmployeeRequest): Observable<EmployeeResponse> {
    return this.http.put<EmployeeResponse>(`${environment.employeeApiUrl}/${id}`, employeeRequest);
  }

  assignManagerToEmployee(employeeId: number, managerId: number): Observable<EmployeeResponse> {
    return this.http.patch<EmployeeResponse>(`${environment.employeeApiUrl}/${employeeId}/managers/${managerId}`, {});
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.employeeApiUrl}/${id}`);
  }
}

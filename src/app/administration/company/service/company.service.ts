import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {CompanyRequest} from '../model/company-request';
import {CompanyResponse} from '../model/company-response';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  createCompany(company: CompanyRequest): Observable<CompanyResponse> {
    return this.http.post<CompanyResponse>(`${environment.companyApiUrl}`, company);
  }

  getCompanies(): Observable<CompanyResponse[]> {
    return this.http.get<CompanyResponse[]>(`${environment.companyApiUrl}`);
  }

  getCompanyById(id: number): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${environment.companyApiUrl}/${id}`);
  }

  updateCompany(id: number, company: CompanyRequest): Observable<CompanyResponse> {
    return this.http.put<CompanyResponse>(`${environment.companyApiUrl}/${id}`, company);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${environment.companyApiUrl}/${id}`);
  }
}

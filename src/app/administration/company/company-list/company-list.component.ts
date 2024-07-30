import { Component, OnInit } from '@angular/core';
import {CompanyResponse} from '../model/company-response';
import {CompanyService} from '../service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies: CompanyResponse[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(
      (companies: CompanyResponse[]) => {
        this.companies = companies;
      },
      (error) => {
        console.error('Error fetching companies: ', error);
      }
    );
  }
}

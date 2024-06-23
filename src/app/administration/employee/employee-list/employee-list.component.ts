import {Component, OnInit} from '@angular/core';
import {EmployeeResponse} from '../model/employee-response';
import {CompanyResponse} from '../../company/model/company-response';
import {EmployeeService} from '../service/employee.service';
import {CompanyService} from '../../company/service/company.service';
import {Page} from '../../../shared/interfaces/Page';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  display = true;
  managers: EmployeeResponse[];
  companies: CompanyResponse[];
  employees: EmployeeResponse[];

  currentPage = 0;
  pageSize = 5;
  employeesPage: Page<EmployeeResponse>;
  constructor(
    private employeeService: EmployeeService,
    private companyService: CompanyService,
  ) { }

  ngOnInit(): void {
    // this.fetchManagers();
    // this.fetchCompanies();
    // this.fetchEmployees();
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployeesByCompany(this.currentPage, this.pageSize)
      .subscribe((data: Page<EmployeeResponse>) => {
        this.employeesPage = data;
      });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.loadEmployees();
  }

  fetchCompanies(): void {
    this.companyService.getCompanies().subscribe(
      (companies: CompanyResponse[]) => {
        this.companies = companies;
      },
      (error) => {
        console.error('Error fetching companies:', error);
      }
    );
  }

  fetchManagers(): void {
    this.employeeService.getEmployees().subscribe(
      (employees: EmployeeResponse[]) => {
        this.managers = employees;
      },
      (error) => {
        console.error('Error fetching managers:', error);
      }
    );
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (employees: EmployeeResponse[]) => {
        this.employees = employees;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  show(): void {
    this.display = !this.display;
  }
}

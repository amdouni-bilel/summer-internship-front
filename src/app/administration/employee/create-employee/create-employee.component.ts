import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../service/employee.service';
import {CompanyService} from '../../company/service/company.service';
import {EmployeeResponse} from '../model/employee-response';
import {CompanyResponse} from '../../company/model/company-response';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeFormGroup: FormGroup;
  managers: EmployeeResponse[];
  companies: CompanyResponse[];
  employees: EmployeeResponse[];
  constructor(
    private toaster: ToastrService,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.employeeFormGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      title: ['', Validators.required],
      managerId: ['', Validators.required],
      companyId: ['', Validators.required]
    });
    this.fetchCompanies();
  }

  fetchCompanies(): void {
    // Fetch companies
    this.companyService.getCompanies().subscribe(
      (companies: CompanyResponse[]) => {
        this.companies = companies;
      },
      (error) => {
        console.error('Error fetching companies:', error);
      }
    );
  }
  fetchManagersByCompanyId(): void {
    // Fetch managers
    this.employeeService.getEmployees().subscribe(
      (employees: EmployeeResponse[]) => {
        this.managers = employees;
      },
      (error) => {
        console.error('Error fetching managers:', error);
      }
    );
  }
  submitForm(): void {
    if (this.employeeFormGroup.valid) {
      const employeeData = this.employeeFormGroup.value;
      this.employeeService.createEmployee(employeeData).subscribe(
        (response: EmployeeResponse) => {
          this.toaster.success('Employee saved successfully!');
          this.employeeFormGroup.reset();
        },
        (error) => {
          console.error('Error saving employee:', error);
          this.toaster.error('Error saving employee. Please try again.');
        }
      );
    }
  }
}

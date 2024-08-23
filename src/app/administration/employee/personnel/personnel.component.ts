import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeResponse } from '../model/employee-response';
import { CompanyResponse } from '../../company/model/company-response';
import { EmployeeService } from '../service/employee.service';
import { CompanyService } from '../../company/service/company.service';

@Component({
  selector: 'personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.scss']
})
export class PersonnelComponent implements OnInit {
  modalRef: NgbModalRef;
  employeeFormGroup: FormGroup;
  managers: EmployeeResponse[];
  companies: CompanyResponse[];
  employees: EmployeeResponse[];

  constructor(
    private toaster: ToastrService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private companyService: CompanyService
  ) {}

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

    // Fetch managers
    this.employeeService.getEmployees().subscribe(
      (employees: EmployeeResponse[]) => {
        this.managers = employees;
      },
      (error) => {
        console.error('Error fetching managers:', error);
      }
    );

    // Fetch companies
    this.companyService.getCompanies().subscribe(
      (companies: CompanyResponse[]) => {
        this.companies = companies;
      },
      (error) => {
        console.error('Error fetching companies:', error);
      }
    );

    // Fetch all employees
    this.fetchAllEmployees();
  }

  openAddWizard(content): void {
    this.modalRef = this.modalService.open(content, { size: 'lg' });
  }

  submitForm(): void {
    if (this.employeeFormGroup.valid) {
      const employeeData = this.employeeFormGroup.value;
      this.employeeService.createEmployee(employeeData).subscribe(
        (response: EmployeeResponse) => {
          this.toaster.success('Employee saved successfully!');
          this.fetchAllEmployees(); // Refresh employee list
          this.employeeFormGroup.reset(); // Reset form
          this.modalRef.close(); // Close modal
        },
        (error) => {
          console.error('Error saving employee:', error);
          this.toaster.error('Error saving employee. Please try again.');
        }
      );
    }
  }

  fetchAllEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (employees: EmployeeResponse[]) => {
        this.employees = employees;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
}

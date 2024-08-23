import {CompanyResponse} from '../../company/model/company-response';
import {EmployeeRequest} from './employee-request';

export interface EmployeeResponse {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  title: string;
  department: string;
  manager?: EmployeeRequest;
  company?: CompanyResponse;
}

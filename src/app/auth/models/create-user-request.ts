/* tslint:disable */
/* eslint-disable */
import { RoleView } from './role-view';
export interface CreateUserRequest {
  authorities?: Array<RoleView>;
  fullName: string;
  password: string;
  rePassword: string;
  username: string;
}

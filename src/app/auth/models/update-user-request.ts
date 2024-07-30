/* tslint:disable */
/* eslint-disable */
import { RoleView } from './role-view';
export interface UpdateUserRequest {
  authorities?: Array<RoleView>;
  fullName: string;
}

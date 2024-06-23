/* tslint:disable */
/* eslint-disable */
import { CompanyDto } from './company-dto';
import { FacturationDto } from './facturation-dto';
import { MissionDto } from './mission-dto';
export interface MissionReceived {
  company?: CompanyDto;
  facturation?: FacturationDto;
  mission?: MissionDto;
}

/* tslint:disable */
/* eslint-disable */
import { Links } from './links';
export interface EntityModelMission {
  '_links'?: Links;
  assigned?: boolean;
  descriptif?: string;
  endDate?: string;
  idClient?: number;
  idReferencedESN?: number;
  idUser?: number;
  idUserAssigned?: number;
  requiredCriteria?: string;
  startDate?: string;
  title?: string;
  tjmHt?: number;
  turnover?: number;
  weighting?: number;
}

/* tslint:disable */
/* eslint-disable */
export interface MissionRequestBody {
  assigned?: boolean;
  descriptif?: string;
  devise?: string;
  domaine?: Array<string>;
  duration?: string;
  endDate?: string;
  id?: number;
  idClient?: number;
  idReferencedESN?: number;
  idUser?: number;
  idUserAssigned?: number;
  requiredCriteria?: string;
  startDate?: string;
  title?: string;
  tjmHt?: number;
  turnover?: number;
  type?: string;
  weighting?: number;
}

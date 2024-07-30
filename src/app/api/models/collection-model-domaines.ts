/* tslint:disable */
/* eslint-disable */
import { DomainesResponse } from './domaines-response';
import { Links } from './links';
export interface CollectionModelDomaines {
  '_embedded'?: { 'domaineses'?: Array<DomainesResponse> };
  '_links'?: Links;
}

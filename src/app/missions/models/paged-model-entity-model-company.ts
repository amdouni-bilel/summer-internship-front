/* tslint:disable */
/* eslint-disable */
import { EntityModelCompany } from './entity-model-company';
import { Links } from './links';
import { PageMetadata } from './page-metadata';
export interface PagedModelEntityModelCompany {
  '_embedded'?: { 'companies'?: Array<EntityModelCompany> };
  '_links'?: Links;
  page?: PageMetadata;
}

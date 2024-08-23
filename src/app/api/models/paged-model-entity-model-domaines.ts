/* tslint:disable */
/* eslint-disable */
import { EntityModelDomaines } from './entity-model-domaines';
import { Links } from './links';
import { PageMetadata } from './page-metadata';
export interface PagedModelEntityModelDomaines {
  '_embedded'?: { 'domaineses'?: Array<EntityModelDomaines> };
  '_links'?: Links;
  page?: PageMetadata;
}

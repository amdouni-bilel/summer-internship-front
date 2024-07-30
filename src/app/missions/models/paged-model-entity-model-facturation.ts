/* tslint:disable */
/* eslint-disable */
import { EntityModelFacturation } from './entity-model-facturation';
import { Links } from './links';
import { PageMetadata } from './page-metadata';
export interface PagedModelEntityModelFacturation {
  '_embedded'?: { 'facturations'?: Array<EntityModelFacturation> };
  '_links'?: Links;
  page?: PageMetadata;
}

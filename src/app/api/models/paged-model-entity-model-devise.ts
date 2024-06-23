/* tslint:disable */
/* eslint-disable */
import { EntityModelDevise } from './entity-model-devise';
import { Links } from './links';
import { PageMetadata } from './page-metadata';
export interface PagedModelEntityModelDevise {
  '_embedded'?: { 'devises'?: Array<EntityModelDevise> };
  '_links'?: Links;
  page?: PageMetadata;
}

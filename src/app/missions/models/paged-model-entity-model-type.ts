/* tslint:disable */
/* eslint-disable */
import { EntityModelType } from './entity-model-type';
import { Links } from './links';
import { PageMetadata } from './page-metadata';
export interface PagedModelEntityModelType {
  '_embedded'?: { 'types'?: Array<EntityModelType> };
  '_links'?: Links;
  page?: PageMetadata;
}

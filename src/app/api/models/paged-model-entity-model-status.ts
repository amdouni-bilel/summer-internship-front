/* tslint:disable */
/* eslint-disable */
import { EntityModelStatus } from './entity-model-status';
import { Links } from './links';
import { PageMetadata } from './page-metadata';
export interface PagedModelEntityModelStatus {
  '_embedded'?: { 'statuses'?: Array<EntityModelStatus> };
  '_links'?: Links;
  page?: PageMetadata;
}

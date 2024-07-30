/* tslint:disable */
/* eslint-disable */
import { EntityModelMission } from './entity-model-mission';
import { Links } from './links';
import { PageMetadata } from './page-metadata';
export interface PagedModelEntityModelMission {
  '_embedded'?: { 'missions'?: Array<EntityModelMission> };
  '_links'?: Links;
  page?: PageMetadata;
}

/* tslint:disable */
/* eslint-disable */
import { Links } from './links';
export interface EntityModelMission {
  '_links'?: Links;
  id?: number;
  name: string;
  endDate?: string;
  freeDays?: number;
  isForMe?: boolean;
  sellDays?: boolean;
  shareMission?: boolean;
  startDate?: string;
  tjm?: number;
}

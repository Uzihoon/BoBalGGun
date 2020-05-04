import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { IImmutableMap } from '../types';

export type StatusAction = ActionType<typeof actions>;

export interface IStatusState {
  initialCheck: boolean;
  permission: null | string;
  target: null | ITarget;
  isIos: null | boolean;
}

export type StatusState = IImmutableMap<IStatusState>;

export interface ISetData {
  key: keyof IStatusState;
  value: any;
}

export interface ITarget {
  color: string;
  state: boolean;
  line: string;
  prev: IStation;
  next: IStation;
  current: IStation;
}

interface IStation {
  code: string;
  stationNm: string;
}

export interface ISetStation {
  station: string;
  analysis: boolean;
}

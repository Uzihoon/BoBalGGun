import {ActionType} from 'typesafe-actions';
import * as actions from './actions';
import {IImmutableMap} from '../types';
import {Map, List} from 'immutable';

export type StationAction = ActionType<typeof actions>;

export interface ISationState {
  lineList: List<string>;
  lineInfo: Map<string, ILineInfo>;
  modalLine: string | null;
}
export type StationState = IImmutableMap<ISationState>;

export interface ISetData {
  key: keyof ISationState;
  value: any;
}

export interface ILineInfo {
  title: string;
  color: string;
}

export interface IStation {
  line_num: string;
  station_cd: string;
  station_nm_eng: string;
  station_nm: string;
  fr_code: string;
}

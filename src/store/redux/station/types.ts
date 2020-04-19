import {ActionType} from 'typesafe-actions';
import * as actions from './actions';
import {IImmutableMap} from '../types';
import {Map, List} from 'immutable';

export type StationAction = ActionType<typeof actions>;

export interface ISationState {
  lineList: List<string>;
  lineInfo: Map<string, ILineInfo>;
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

import {ActionType} from 'typesafe-actions';
import * as actions from './actions';
import {IImmutableMap} from '../types';
import {Map} from 'immutable';

export type StationAction = ActionType<typeof actions>;

export interface ISationState {
  colorList: Map<string, string>;
}
export type StationState = IImmutableMap<ISationState>;

export interface ISetData {
  key: keyof StationState;
  value: any;
}

import {ActionType} from 'typesafe-actions';
import * as actions from './actions';
import {IImmutableMap} from '../types';

export type StationAction = ActionType<typeof actions>;

export type StationState = IImmutableMap<{
  colorList: {[P: string]: string};
}>;

export interface ISetData {
  key: keyof StationState;
  value: any;
}

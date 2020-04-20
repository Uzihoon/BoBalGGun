import {ActionType} from 'typesafe-actions';
import * as actions from './actions';
import {IImmutableMap} from '../types';

export type AnalysisAction = ActionType<typeof actions>;

export interface IAnalysisState {}

export type AnalysisState = IImmutableMap<IAnalysisState>;

export interface ISetData {
  key: keyof IAnalysisState;
  value: any;
}

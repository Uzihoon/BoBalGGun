import {ActionType} from 'typesafe-actions';
import * as actions from './actions';
import {IImmutableMap} from '../types';

export type AnalysisAction = ActionType<typeof actions>;

export interface IAnalysisState {
  analysis: IImmutableMap<IAnalysis>;
  analysisError: boolean;
}

export type AnalysisState = IImmutableMap<IAnalysisState>;

export interface ISetData {
  key: keyof IAnalysisState;
  value: any;
}

export interface IAnalysis {
  up: IImmutableMap<ILevel>;
  down: IImmutableMap<ILevel>;
  analysised: boolean;
}

export interface ILevel {
  confusion: number;
  level: string;
}

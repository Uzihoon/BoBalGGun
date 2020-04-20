import {createAction} from 'typesafe-actions';
import {ISetData} from './types';
import {ITarget} from 'src/store/redux/status';

export const SET_DATA = 'analysis/SET_DATA';
export const ANALYSIS_STATION = 'analysis/ANALYSIS_STATION';

export const setData = createAction(SET_DATA)<ISetData>();
export const analysisStation = createAction(ANALYSIS_STATION)<ITarget>();

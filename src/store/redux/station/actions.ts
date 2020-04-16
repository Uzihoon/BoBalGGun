import {createAction} from 'typesafe-actions';
import {ISetData} from './types';

export const SET_DATA = 'station/SET_DATA';

export const setData = createAction(SET_DATA)<ISetData>();

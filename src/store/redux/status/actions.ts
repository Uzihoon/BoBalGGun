import {createAction} from 'typesafe-actions';
import {ISetData, ISetStation} from './types';
import {GeolocationResponse} from '@react-native-community/geolocation';

export const SET_DATA = 'status/SET_DATA';
export const ON_INITIAL_CHECK = 'status/ON_INITIAL_CHECK';
export const GET_STATION = 'status/GET_STATION';
export const GET_PERMISSION = 'status/GET_PERMISSION';
export const SET_TARGET_STATION = 'status/SET_TARGET_STATION';

export const setData = createAction(SET_DATA)<ISetData>();
export const onInitialCheck = createAction(ON_INITIAL_CHECK)();
export const getStation = createAction(GET_STATION)<GeolocationResponse>();
export const getPermission = createAction(GET_PERMISSION)();
export const setTargetStation = createAction(SET_TARGET_STATION)<ISetStation>();

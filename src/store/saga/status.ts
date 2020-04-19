import {put, all, call} from 'redux-saga/effects';
import {check, PERMISSIONS} from 'react-native-permissions';
import {IAction} from './types';
import {GeolocationResponse} from '@react-native-community/geolocation';

// Reducer
import * as StatusActions from '../redux/status';

/**
 * Permission
 *
 * RESULT.UNAVAILABLE : This feature is not avaliable(on this device)
 *
 * RESULT.DENIED : The permission has not been requested / is denied but requestable
 *
 * RESULT.GRANTED : The permission is granted
 *
 * RESULTS.BLOCKED : The permission is denied and not reuqestable anymore
 */

export function* onInitialCheck() {
  const permission = yield call(check, PERMISSIONS.IOS.LOCATION_ALWAYS);
  yield all([
    put(StatusActions.setData({key: 'initialCheck', value: true})),
    put(StatusActions.setData({key: 'permission', value: permission})),
  ]);
}

export function* getPermission() {
  const permission = yield call(check, PERMISSIONS.IOS.LOCATION_ALWAYS);
  yield put(StatusActions.setData({key: 'permission', value: permission}));
}

export function* getStation(action: IAction<GeolocationResponse>) {
  try {
    const {payload: location} = action;

    // TODO: get station
    const station = '0227';

    yield put(
      StatusActions.setData({
        key: 'target',
        value: {
          state: true,
          code: station,
        },
      }),
    );
  } catch (error) {
    yield put(
      StatusActions.setData({key: 'target', value: {state: false, code: ''}}),
    );
    console.log('?');
  }
}

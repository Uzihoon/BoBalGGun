import {put, all, call, select, delay} from 'redux-saga/effects';
import {check, PERMISSIONS} from 'react-native-permissions';
import {IAction} from './types';
import {GeolocationResponse} from '@react-native-community/geolocation';
import stationList from '../redux/station/station.json';

// Reducer
import * as StatusActions from '../redux/status';
import {RootState} from '../../store/redux';

const getStationDataFromStore = (state: RootState) => state.station;

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
    yield delay(3000);
    const station = '0150';

    const stationData = stationList.DATA;
    const stationIndex = stationData.findIndex(
      (list: any) => list.station_cd === station,
    );

    if (stationIndex < 0) {
      yield put(StatusActions.setData({key: 'target', value: {state: false}}));
      return;
    }
    const current = stationData[stationIndex];
    let prev = stationData[stationIndex - 1];
    let next = stationData[stationIndex + 1];

    const stationStore = yield select(getStationDataFromStore);
    const lineInfo = stationStore.get('lineInfo');
    const color = lineInfo.getIn([current.line_num, 'color']);
    const line = lineInfo.getIn([current.line_num, 'title']);

    if (prev.line_num !== current.line_num) {
      if (current.fr_code === '201') {
        // 2호선일 경우 순환한다.
        prev = {
          line_num: '02호선',
          station_cd: '0243',
          station_nm_eng: 'Chungjeongno',
          station_nm: '충정로',
          fr_code: '243',
        };
      } else {
        prev = {};
      }
    }

    if (next.line_num !== current.line_num) {
      if (current.fr_code === '243') {
        next = {
          line_num: '02호선',
          station_cd: '0201',
          station_nm_eng: 'City Hall',
          station_nm: '시청',
          fr_code: '201',
        };
      } else {
        next = {};
      }
    }

    yield put(
      StatusActions.setData({
        key: 'target',
        value: {
          line,
          color,
          state: true,
          prev: {
            code: prev.fr_code || '',
            stationNm: prev.station_nm || '',
          },
          next: {
            code: next.fr_code || '',
            stationNm: next.station_nm || '',
          },
          current: {
            code: station,
            stationNm: current.station_nm,
          },
        },
      }),
    );
  } catch (error) {
    yield put(
      StatusActions.setData({key: 'target', value: {state: false, code: ''}}),
    );
  }
}

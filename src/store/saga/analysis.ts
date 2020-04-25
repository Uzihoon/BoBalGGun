import {put, delay, all} from 'redux-saga/effects';
import {IAction} from './types';
import {ITarget} from '../redux/status';
import moment from 'moment';
import confusion from './confusion.json';
import _ from 'lodash';
import {fromJS} from 'immutable';

import * as AnalysisActions from 'src/store/redux/analysis';

type Date = '평일' | '일요일' | '토요일';

interface IConfusion {
  date: Date;
  line: string;
  type: '상선' | '하선';
  station: string;
  id: string;
  [P: string]: string;
}

const confusionList: IConfusion[] = confusion;

export function* analysisStation(action: IAction<ITarget>) {
  yield delay(1000);
  const {payload: target} = action;
  const targetHour = moment().format('HH');
  const weekend = moment().day();

  let date: Date;

  switch (weekend) {
    case 6:
      date = '토요일';
      break;
    case 0:
      date = '일요일';
      break;
    default:
      date = '평일';
  }

  const line = target.line;
  const id = target.current.code;

  const targetStation = confusionList.filter(
    (confusion) =>
      confusion.line === line &&
      +confusion.id === +id &&
      confusion.date === date,
  );
  if (!targetStation || targetStation.length <= 0) {
    yield all([
      put(AnalysisActions.setData({key: 'analysisError', value: true})),
      put(
        AnalysisActions.setData({
          key: 'analysis',
          value: fromJS({
            up: {
              confusion: -1,
              level: 'empty',
            },
            down: {
              confusion: -1,
              level: 'empty',
            },
            analysised: true,
          }),
        }),
      ),
    ]);
    return;
  }

  const upKey = ['외선', '상선'];
  const downKey = ['내선', '하선'];

  const analysisData = _.fromPairs(
    targetStation.map((target) => {
      const hour =
        String(targetHour).length < 2 ? `0${targetHour}` : targetHour;
      const confusion = +target[`${hour}:00`] || -1;
      const upType = upKey.includes(target.type);
      const key = upType ? 'up' : 'down';

      let level: string;
      if (confusion < 0) {
        level = 'empty';
      } else if (confusion >= 0 && confusion < 25) {
        level = 'good';
      } else if (confusion >= 25 && confusion < 55) {
        level = 'bad';
      } else if (confusion >= 55 && confusion < 80) {
        level = 'sad';
      } else {
        level = 'hell';
      }

      return [key, {confusion, level}];
    }),
  );
  yield put(AnalysisActions.setData({key: 'analysisError', value: false}));
  yield put(
    AnalysisActions.setData({
      key: 'analysis',
      value: fromJS({...analysisData, analysised: true}),
    }),
  );
}

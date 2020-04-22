import {put} from 'redux-saga/effects';
import {IAction} from './types';
import {ITarget} from '../redux/status';
import moment from 'moment';
import confusion from './confusion.json';

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

export function* analysisStation(action: IAction<ITarget>) {
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

  const targetStation = confusion.filter(
    (confusion: IConfusion) =>
      confusion.line === line &&
      +confusion.id === +id &&
      confusion.date === date,
  );

  if (!targetStation || targetStation.length <= 0) {
    yield put(AnalysisActions.setData({key: 'analysisError', value: true}));
    return;
  }
}

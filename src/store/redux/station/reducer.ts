import {StationAction, StationState} from './types';
import {createReducer} from 'typesafe-actions';
import {Map, List} from 'immutable';
import {SET_DATA} from './actions';

const initialState: StationState = Map({
  lineList: List([
    '01호선',
    '02호선',
    '03호선',
    '04호선',
    '05호선',
    '06호선',
    '07호선',
    '08호선',
    '09호선',
    '경춘선',
    '경의선',
    '분당선',
    '경강선',
    '수인선',
    '인천선',
    '인천2호선',
    '공항철도',
    '신분당선',
    '용인경전철',
    '우이신설경전철',
    '서해선',
    '김포도시철도',
  ]),
  lineInfo: Map({
    '01호선': {
      color: '#263c96',
      title: '1호선',
    },
    '02호선': {
      color: '#3cb44a',
      title: '2호선',
    },
    '03호선': {
      color: '#f57305',
      title: '3호선',
    },
    '04호선': {
      color: '#389ede',
      title: '4호선',
    },
    '05호선': {
      color: '#8936e0',
      title: '5호선',
    },
    '06호선': {
      color: '#b5500c',
      title: '6호선',
    },
    '07호선': {
      color: '#697214',
      title: '7호선',
    },
    '08호선': {
      color: '#e51e6e',
      title: '8호선',
    },
    '09호선': {
      color: '#cea43a',
      title: '9호선',
    },
    경춘선: {
      color: '#39af7a',
      title: '경춘',
    },
    경의선: {
      color: '#7cc4a5',
      title: '경의중앙',
    },
    분당선: {
      color: '#fad44d',
      title: '분당',
    },
    경강선: {
      color: '#3183f2',
      title: '경강',
    },
    수인선: {
      color: '#face33',
      title: '수인',
    },
    인천선: {
      color: '#263c96',
      title: '인천1',
    },
    인천2호선: {
      color: '#f8b850',
      title: '인천2',
    },
    공항철도: {
      color: '#96c8eb',
      title: '공항철도',
    },
    신분당선: {
      color: '#a71f31',
      title: '신분당',
    },
    용인경전철: {
      color: '#77c371',
      title: '에버라인',
    },
    의정부경전철: {
      color: '#f8ae4d',
      title: '의정부',
    },
    우이신설경전철: {
      color: '#c6c102',
      title: '우이신설',
    },
    서해선: {
      color: '#8bc53e',
      title: '서해',
    },
    김포도시철도: {
      color: '#96710b',
      title: '김포골드',
    },
  }),
});

const status = createReducer<StationState, StationAction>(initialState, {
  [SET_DATA]: (state, action) => {
    const {key, value} = action.payload;
    return state.set(key, value);
  },
});

export default status;

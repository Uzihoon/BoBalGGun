import {StationAction, StationState} from './types';
import {createReducer} from 'typesafe-actions';
import {Map} from 'immutable';
import {SET_DATA} from './actions';

const initialState: StationState = Map({
  colorList: Map({
    '01호선': '#263c96',
    '02호선': '#3cb44a',
    '03호선': '#f57305',
    '04호선': '#389ede',
    '05호선': '#8936e0',
    '06호선': '#b5500c',
    '07호선': '#697214',
    '08호선': '#e51e6e',
    '09호선': '#cea43a',
    경춘선: '#39af7a',
    경의선: '#7cc4a5',
    분당선: '#fad44d',
    경강선: '#3183f2',
    수인선: '#face33',
    인천선: '#263c96',
    인천2호선: '#f8b850',
    공항철도: '#96c8eb',
    신분당선: '#a71f31',
    용인경전철: '#77c371',
    의정부경전철: '#f8ae4d',
    우이신설경전철: '#c6c102',
    서해선: '#8bc53e',
    김포도시철도: '#96710b',
    인천1호선: '#6f99d0',
  }),
});

const status = createReducer<StationState, StationAction>(initialState, {
  [SET_DATA]: (state, action) => {
    const {key, value} = action.payload;
    return state.set(key, value);
  },
});

export default status;

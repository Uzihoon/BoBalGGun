import {AnalysisState, AnalysisAction} from './types';
import {createReducer} from 'typesafe-actions';
import {Map} from 'immutable';
import {SET_DATA} from './actions';

const initialState: AnalysisState = Map({
  analysis: {
    up: {
      confusion: -1,
      level: 'good',
    },
    down: {
      confusion: -1,
      level: 'good',
    },
  },
  analysisError: false,
});

const status = createReducer<AnalysisState, AnalysisAction>(initialState, {
  [SET_DATA]: (state, action) => {
    const {key, value} = action.payload;
    return state.set(key, value);
  },
});

export default status;

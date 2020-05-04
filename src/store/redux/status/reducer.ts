import {StatusAction, StatusState} from './types';
import {createReducer} from 'typesafe-actions';
import {Map} from 'immutable';
import {SET_DATA} from './actions';

const initialState: StatusState = Map({
  initialCheck: false,
  permission: null,
  target: null,
  isIos: null
});

const status = createReducer<StatusState, StatusAction>(initialState, {
  [SET_DATA]: (state, action) => {
    const {key, value} = action.payload;
    return state.set(key, value);
  },
});

export default status;

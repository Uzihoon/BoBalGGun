import {combineReducers} from 'redux';
import station from './station';
import status from './status';

const rootReducer = combineReducers({
  station,
  status,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

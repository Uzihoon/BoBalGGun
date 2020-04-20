import {combineReducers} from 'redux';
import station from './station';
import status from './status';
import analysis from './analysis';

const rootReducer = combineReducers({
  station,
  status,
  analysis,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

import {combineReducers} from 'redux';
import station from './station';

const rootReducer = combineReducers({
  station,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

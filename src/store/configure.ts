import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import rootReducer from './redux';

const sagaMiddleware = createSagaMiddleware();

export default function configure() {
  const store = createStore(
    rootReducer,
    {}, // pre-loaded state
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

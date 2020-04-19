import {all, takeEvery, fork} from 'redux-saga/effects';

// Reducer
import * as StatusActions from '../redux/status';

// Saga
import * as StatusSaga from './status';

export default function* rootSaga() {
  yield all([fork(handleStatus)]);
}

function* handleStatus() {
  yield takeEvery(StatusActions.onInitialCheck, StatusSaga.onInitialCheck);
  yield takeEvery(StatusActions.getStation, StatusSaga.getStation);
  yield takeEvery(StatusActions.getPermission, StatusSaga.getPermission);
}

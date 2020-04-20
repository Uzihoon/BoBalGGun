import {all, takeEvery, fork} from 'redux-saga/effects';

// Reducer
import * as StatusActions from '../redux/status';
import * as AnalysisActions from '../redux/analysis';

// Saga
import * as StatusSaga from './status';
import * as AnalysisSaga from './analysis';

export default function* rootSaga() {
  yield all([fork(handleStatus), fork(handleAnalysis)]);
}

function* handleStatus() {
  yield takeEvery(StatusActions.onInitialCheck, StatusSaga.onInitialCheck);
  yield takeEvery(StatusActions.getStation, StatusSaga.getStation);
  yield takeEvery(StatusActions.getPermission, StatusSaga.getPermission);
}

function* handleAnalysis() {
  yield takeEvery(
    AnalysisActions.analysisStation,
    AnalysisSaga.analysisStation,
  );
}

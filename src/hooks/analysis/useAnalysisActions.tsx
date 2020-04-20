import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import * as AnalysisActions from 'src/store/redux/analysis/actions';
import {ISetData} from 'src/store/redux/analysis';
import {ITarget} from 'src/store/redux/status';

export default function useAnalysisActions() {
  const dispatch = useDispatch();

  const onSetData = useCallback(
    (param: ISetData) => dispatch(AnalysisActions.setData(param)),
    [dispatch],
  );

  const onAnalysisStation = useCallback(
    (param: ITarget) => dispatch(AnalysisActions.analysisStation(param)),
    [dispatch],
  );

  return {
    onAnalysisStation,
    onSetData,
  };
}

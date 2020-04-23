import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import * as StationActions from 'src/store/redux/station';
import {ISetData} from 'src/store/redux/station';

export default function useStationActions() {
  const dispatch = useDispatch();

  const onSetData = useCallback(
    (param: ISetData) => dispatch(StationActions.setData(param)),
    [dispatch],
  );

  return {
    onSetData,
  };
}

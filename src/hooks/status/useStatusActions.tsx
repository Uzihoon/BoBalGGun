import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {GeolocationResponse} from '@react-native-community/geolocation';
import * as StatusActions from 'src/store/redux/status';

export default function useStatusActions() {
  const dispatch = useDispatch();

  const onInitialCheck = useCallback(
    () => dispatch(StatusActions.onInitialCheck()),
    [dispatch],
  );

  const onGetStation = useCallback(
    (param: GeolocationResponse) => dispatch(StatusActions.getStation(param)),
    [dispatch],
  );

  return {
    onInitialCheck,
    onGetStation,
  };
}

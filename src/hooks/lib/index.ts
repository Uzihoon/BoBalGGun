import {useSelector} from 'react-redux';
import {RootState} from '../../store/redux';

// Reducer state
import {ISationState} from '../../store/redux/station';
import {IStatusState} from '../../store/redux/status';

export function useStationGet<T extends keyof ISationState>(
  item: T,
): ISationState[T] {
  return useSelector((state: RootState) => state.station.get(item));
}

export function useStatusGet<T extends keyof IStatusState>(
  item: T,
): IStatusState[T] {
  return useSelector((state: RootState) => state.status.get(item));
}

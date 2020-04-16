import {ISationState} from '../../store/redux/station';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/redux';

export function useStationGet<T extends keyof ISationState>(
  item: T,
): ISationState[T] {
  return useSelector((state: RootState) => state.station.get(item));
}

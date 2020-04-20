import {IAction} from './types';
import {ITarget} from '../redux/status';

export function* analysisStation(action: IAction<ITarget>) {
  const {payload: target} = action;

  console.log(target);
}

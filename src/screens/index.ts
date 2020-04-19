import {Navigation} from 'react-native-navigation';
import Root from '../Root';

export function registerScreens() {
  Navigation.registerComponent('Initializing', () => Root);
}

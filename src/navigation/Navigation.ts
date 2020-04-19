import {Navigation} from 'react-native-navigation';
import registerScreens from './registerScreens';

import {INITIAL_SCREEN} from './Screens';

registerScreens();

export function pushScreen() {
  Navigation.setRoot({
    root: {
      component: {
        name: INITIAL_SCREEN,
      },
    },
  });
}

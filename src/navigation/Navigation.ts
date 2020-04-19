import {Navigation} from 'react-native-navigation';
import registerScreens from './registerScreens';

import {
  INITIAL_SCREEN,
  PERMISSION_SCREEN,
  CONFIRMATION_SCREEN,
} from './Screens';

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

export function pushPermission() {
  Navigation.setRoot({
    root: {
      component: {
        name: PERMISSION_SCREEN,
      },
    },
  });
}

export function pushConfirmation() {
  Navigation.setRoot({
    root: {
      component: {
        name: CONFIRMATION_SCREEN,
      },
    },
  });
}

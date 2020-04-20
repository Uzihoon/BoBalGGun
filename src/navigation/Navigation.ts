import {Navigation} from 'react-native-navigation';
import registerScreens from './registerScreens';

import {
  INITIAL_SCREEN,
  PERMISSION_SCREEN,
  CONFIRMATION_SCREEN,
  LOADING_SCREEN,
  FAILED_SCREEN,
  ANALYSIS_SCREEN,
  SEARCH_SCREEN,
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

export function pushLoading() {
  Navigation.setRoot({
    root: {
      component: {
        name: LOADING_SCREEN,
      },
    },
  });
}

export function pushFail() {
  Navigation.setRoot({
    root: {
      component: {
        name: FAILED_SCREEN,
      },
    },
  });
}

export function pushAnalysis() {
  Navigation.setRoot({
    root: {
      component: {
        name: ANALYSIS_SCREEN,
      },
    },
  });
}

export function pushSearch() {
  Navigation.setRoot({
    root: {
      component: {
        name: SEARCH_SCREEN,
      },
    },
  });
}

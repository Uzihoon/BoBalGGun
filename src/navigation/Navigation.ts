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
  LINE_MODAL_SCREEN,
} from './Screens';

registerScreens();

export function pushScreen() {
  // Navigation.setDefaultOptions({
  //   animations: {
  //     setRoot: {
  //       alpha: {
  //         from: 0,
  //         to: 1,
  //         duration: 400,
  //         startDelay: 100,
  //         interpolation: 'accelerate',
  //       },
  //     },
  //   },
  // });

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
        options: {
          statusBar: {
            backgroundColor: 'black',
            style: 'dark',
          },
        },
      },
    },
  });
}

export function pushLoading() {
  Navigation.setRoot({
    root: {
      component: {
        name: LOADING_SCREEN,
        options: {
          animations: {
            push: {
              content: {
                alpha: {
                  from: 0,
                  to: 1,
                  duration: 500,
                },
              },
            },
          },
        },
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
        options: {
          statusBar: {
            backgroundColor: 'black',
            style: 'dark',
          },
        },
      },
    },
  });
}

export function openSearchModal(line: string) {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: LINE_MODAL_SCREEN,
            options: {
              topBar: {
                title: {
                  text: line,
                },
              },
            },
          },
        },
      ],
    },
  });
}

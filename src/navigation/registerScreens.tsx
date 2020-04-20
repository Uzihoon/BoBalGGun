import React from 'react';
import {Navigation} from 'react-native-navigation';

import Provider from 'src/store/provider';

import Initial from 'src/components/Initial';
import Permission from 'src/components/Permission';
import Confirmation from 'src/components/Confirmation';
import Loading from 'src/components/Loading';
import Empty from 'src/components/Empty';
import Search from 'src/components/Search';
import Analysis from 'src/components/Analysis';

import {
  INITIAL_SCREEN,
  PERMISSION_SCREEN,
  CONFIRMATION_SCREEN,
  LOADING_SCREEN,
  FAILED_SCREEN,
  ANALYSIS_SCREEN,
  SEARCH_SCREEN,
} from './Screens';

function WrappedComponent(Component: any) {
  return function inject(props: any) {
    const EnhancedComponent = () => (
      <Provider>
        <Component {...props} />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}
export default function () {
  Navigation.registerComponent(INITIAL_SCREEN, () => WrappedComponent(Initial));
  Navigation.registerComponent(PERMISSION_SCREEN, () =>
    WrappedComponent(Permission),
  );
  Navigation.registerComponent(CONFIRMATION_SCREEN, () =>
    WrappedComponent(Confirmation),
  );
  Navigation.registerComponent(LOADING_SCREEN, () => WrappedComponent(Loading));
  Navigation.registerComponent(FAILED_SCREEN, () => WrappedComponent(Empty));
  Navigation.registerComponent(ANALYSIS_SCREEN, () =>
    WrappedComponent(Analysis),
  );
  Navigation.registerComponent(SEARCH_SCREEN, () => WrappedComponent(Search));
}

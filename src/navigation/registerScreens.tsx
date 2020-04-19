import React from 'react';
import {Navigation} from 'react-native-navigation';

import Provider from 'src/store/provider';

import Initial from 'src/components/Initial';
import Permission from 'src/components/Permission';
import Confirmation from 'src/components/Confirmation';

import {
  INITIAL_SCREEN,
  PERMISSION_SCREEN,
  CONFIRMATION_SCREEN,
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
}

import React from 'react';
import {Navigation} from 'react-native-navigation';

import Provider from 'src/store/provider';

import Initial from 'src/components/Initial';

import {INITIAL_SCREEN} from './Screens';

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
}

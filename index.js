/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';
import {AppRegistry} from 'react-native';
import Root from './src/Root';
import {name as appName} from './app.json';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing',
      },
    },
  });
});

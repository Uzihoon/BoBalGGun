/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import {pushScreen} from 'src/navigation';

Navigation.events().registerAppLaunchedListener(() => pushScreen());

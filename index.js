/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import {AppRegistry} from 'react-native';
import Root from './src/Root';
import {name as appName} from './app.json';

// Navigation.registerComponent(`com.${appName}.WelcomeScreen`, () => Root);
// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: `com.${appName}.WelcomeScreen`,
//             },
//           },
//         ],
//       },
//     },
//   });
// });

AppRegistry.registerComponent(appName, () => Root);

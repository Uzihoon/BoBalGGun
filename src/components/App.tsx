import React, {useEffect} from 'react';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Permission from './Permission';
import Confirmation from './Confirmation';
import Analysis from './Analysis';
import Search from './Search';
import Empty from './Empty';

function App() {
  useEffect(() => {
    request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
      console.log(result);
    });
    check(PERMISSIONS.IOS.LOCATION_ALWAYS)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(() => {
        console.log('error');
      });
  }, []);
  return <Permission />;
}
export default App;

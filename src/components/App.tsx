import React, {useEffect} from 'react';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';

// Hooks
import useStatusActions from '../hooks/status/useStatusActions';
import {useStatusGet} from '../hooks/lib';

// Components
import Permission from './Permission';
import Confirmation from './Confirmation';
import Analysis from './Analysis';
import Search from './Search';
import Empty from './Empty';

function App() {
  const statusActions = useStatusActions();
  const initialCheck = useStatusGet('initialCheck');
  const permission = useStatusGet('permission');

  useEffect(() => {
    statusActions.onInitialCheck();
  }, []);

  if (initialCheck && permission !== RESULTS.GRANTED) return <Permission />;

  return <Confirmation />;
}
export default App;

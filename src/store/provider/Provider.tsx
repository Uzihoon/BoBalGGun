import React from 'react';
import {Provider} from 'react-redux';
import configure from 'src/store/configure';

const store = configure();

interface IAppProviderProps {
  children: JSX.Element | JSX.Element[];
}

function AppProvider({children}: IAppProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default AppProvider;

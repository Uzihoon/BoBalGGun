import {name as appName} from '../../app.json';

const setScreen = (screen: string) => `${appName}.${screen}`;

export const INITIAL_SCREEN = setScreen('INITIAL');

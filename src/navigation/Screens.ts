import {name as appName} from '../../app.json';

const setScreen = (screen: string) => `${appName}.${screen}`;

export const INITIAL_SCREEN = setScreen('INITIAL');
export const PERMISSION_SCREEN = setScreen('PERMISSION');
export const CONFIRMATION_SCREEN = setScreen('CONFIRMATION');
export const LOADING_SCREEN = setScreen('LOADING');
export const FAILED_SCREEN = setScreen('FAILED');

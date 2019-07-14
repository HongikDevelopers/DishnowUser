import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Splash from '../container/splash';
import Login from '../container/login'
import Main from './mainTab'

const rootNav = createSwitchNavigator(
    {
        Splash,
        Login,
        Main,
    },
    {
        initialRouteName : 'Main',
        headerMode : 'none',
    }
);

export default createAppContainer(rootNav);
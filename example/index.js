/**
 * @file App Registry
 * @author author-Afresh(danding_ge@qq.com)
 */

import {AppRegistry, YellowBox} from 'react-native';

import './app/util/Global';

import App from './app/App';
import {name as appName} from './app.json';

if (!__DEV__) {
    global.console = {
        info: () => {},
        log: () => {},
        warn: () => {},
        error: () => {}
    };
}

YellowBox.ignoreWarnings(['Require cycle:', 'Warning: Expected instance props to match', '[mobx.array]']);

// console.ignoredYellowBox = ['Warning: isMounted(...)', 'Require cycle: app/utils'];

AppRegistry.registerComponent(appName, () => App);

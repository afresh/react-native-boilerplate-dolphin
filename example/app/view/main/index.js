/**
 * @file (Initialize) Main Scene
 * @author author-Afresh(danding_ge@qq.com)
 */

import React from 'react';
import {Scene} from 'react-native-router-flux';

import {HomeScene} from './Home';
import {ComponentsScene} from '../components';
import {MineScene} from '../mine';

const InitMainScene = (
    <Scene
        key={'main'}
        tabs={true}
        initial={true}
        hideNavBar={true}
        activeTintColor={COLOR.primary}
        inactiveTintColor={COLOR.dark}
    >
        {HomeScene}
        {ComponentsScene}
        {MineScene}
    </Scene>
);

const MainScene = (
    <Scene
        key={'main'}
        tabs={true}
        hideNavBar={true}
        activeTintColor={COLOR.primary}
        inactiveTintColor={COLOR.dark}
    >
        {HomeScene}
        {ComponentsScene}
        {MineScene}
    </Scene>
);

export {InitMainScene, MainScene};

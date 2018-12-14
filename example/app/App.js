/**
 * @file Application Entry
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'mobx-react';

import AppRouter from './router/AppRouter';
import * as RootStore from './store/RootStore';
import {Theme} from './util';

export default class App extends Component<any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Provider {...RootStore}>
                <View style={Theme.app}>
                    <AppRouter/>
                </View>
            </Provider>
        );
    }
}

/**
 * @file Application Entry
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'mobx-react';

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
                    <Text>Welcome to React Native!</Text>
                    <Text>To get started, edit App.js</Text>
                </View>
            </Provider>
        );
    }
}

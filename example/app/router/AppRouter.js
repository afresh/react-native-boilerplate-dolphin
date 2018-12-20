/**
 * @file App Router
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {View, TouchableOpacity, Image, AsyncStorage, Platform, Alert, Linking} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';

import {Theme, Version} from '../util';
import {Images} from "../resource/images";
import {MainMobx} from '../mobx/main';

// Scenes
import {InitMainScene, MainScene, WebScene} from '../view/main';
import {InputScene} from '../view/components';

@observer
class AppRouter extends Component {
    mainMobx: MainMobx;

    constructor(props) {
        super(props);
        this.mainMobx = new MainMobx();
        this.state = {
            initializeScene: "",
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('TOKEN', (error: ?Error, result: ?string) => {
            global.TOKEN = result;
            console.log("TOKEN===" + TOKEN);
        });
    }

    componentDidMount() {
        this._getVersion();
    }

    _getVersion = async () => {
        let self = this;
        try {
            const res = await this.mainMobx.getAppVersion();
            if (res.code === 200) {
                const isNew = Version.isNewestVersion(Platform.OS === "ios" ? res.data.ios : res.data.android);
                if (isNew === false) {
                    Alert.alert(
                        '发现新版本',
                        Platform.OS === 'ios' ? '点击确定前往AppStore安装' : '点击确定前往浏览器下载安装',
                        [
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'OK', onPress: () => {self._installApp()}},
                        ],
                        {cancelable: false}
                    );
                }
            }
        } catch(error) {
            console.info(error);
        }
    };

    _installApp = () => {
        console.log('OK Pressed');
        setTimeout(() => {
            // const url = Platform.OS === "ios" ? "https://itunes.apple.com/cn/app/idxxxxxxxxxx?mt=8" : "https://a.app.qq.com/o/simple.jsp?pkgname=com.dolphin";
            const url = Platform.OS === "ios" ? "https://itunes.apple.com/cn/app/idxxxxxxxxxx?mt=8" : "https://play.google.com/store/apps/details?id=com.dolphin";
            Linking.openURL(url).catch(err => console.error('An error occurred', err));
        }, 500);
    };

    _renderBackButton = () => {
        return (
            <TouchableOpacity style={[Theme.sceneBackButton]} onPress={() => {Actions.pop()}}>
                <Image
                    style={[Theme.sceneBackButtonImage]}
                    source={Images.baseIcons.left}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
        )
    };

    _backAndroidHandler = () => {
        console.log("Actions.currentScene===" + Actions.currentScene);
        if (Actions.currentScene !== "_home") {
            Actions.pop();
            return true;
        }
        return false;
    };

    _renderScenes = () => {
        return (
            <Router sceneStyle={[Theme.router]} backAndroidHandler={this._backAndroidHandler}>
                <Scene
                    key={'root'}
                    navigationBarStyle={[Theme.sceneNavigationBar]}
                    titleStyle={[Theme.sceneTitle]}
                    headerMode={'screen'}
                    renderBackButton={this._renderBackButton}
                    renderRightButton={<View />}
                >
                    {this.state.initializeScene === "main" ? InitMainScene : MainScene}
                    {WebScene}
                    {InputScene}
                </Scene>
            </Router>
        )
    };

    render() {
        return (
            <View style={[Theme.scenes]}>
                {this._renderScenes()}
            </View>
        );
    }
}

export default AppRouter;

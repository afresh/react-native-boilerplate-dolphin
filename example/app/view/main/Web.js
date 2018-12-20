/**
 * @file Web Scene
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {WebView, TouchableOpacity, Image, Linking} from 'react-native';

import {Scene} from 'react-native-router-flux';
import {observer} from "mobx-react";

import {Theme} from '../../util';
import {Images} from "../../resource/images";

let web;

type Props = {
};

@observer
class Web extends Component<Props, any> {
    constructor(props){
        super(props);
        web = this;
    }

    openLink = () => {
        Linking.canOpenURL(this.props.url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + this.props.url);
            } else {
                return Linking.openURL(this.props.url);
            }
        }).catch(err => console.error('An error occurred', err));
    };

    render() {
        return (
            <WebView
                style={[Theme.container]}
                source={{uri: this.props.url}}
                startInLoadingState={true}
            />
        );
    }
}

class WebLink extends Component {
    constructor(props){
        super(props);
    }

    _openLink = () => {
        if (web) {
            web.openLink();
        }
    };

    render() {
        return (
            <TouchableOpacity style={[Theme.sceneBackButton, {marginRight: 5}]} onPress={() => {this._openLink()}}>
                <Image
                    style={[Theme.sceneBackButtonImage]}
                    source={Images.baseIcons.link}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
        )
    }
}

const WebScene = (
    <Scene
        key={'web'}
        component={Web}
        renderRightButton={<WebLink/>}
    />
);

export {WebScene};

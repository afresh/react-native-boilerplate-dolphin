/**
 * @file Home Scene
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Scene} from 'react-native-router-flux';
import {observer} from "mobx-react";

import {Images} from "../../resource/images";
import {Theme} from '../../util';
import {TabBarIcon} from '../../component';

type Props = {
};

@observer
class Home extends Component<Props, any> {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={[Theme.container]}>
                <View style={[Theme.center]}>
                    <Text style={[Theme.text]}>this is home page</Text>
                </View>
            </View>
        );
    }
}

class HomeIcon extends Component {
    render() {
        let source = this.props.focused ? Images.baseIcons.homeActive : Images.baseIcons.home;
        return (
            <TabBarIcon source={source} />
        );
    }
}

const HomeScene = (
    <Scene
        key={'home'}
        component={Home}
        icon={HomeIcon}
        tabBarLabel={'Home'}
        title={'Home'}
        renderBackButton={null}
        renderRightButton={null}
    />
);

export {HomeScene};

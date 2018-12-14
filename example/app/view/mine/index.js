/**
 * @file Mine Scene
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
class Mine extends Component<Props, any> {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={[Theme.container]}>
                <View style={[Theme.center]}>
                    <Text style={[Theme.text]}>this is mine page</Text>
                </View>
            </View>
        );
    }
}

class MineIcon extends Component {
    render() {
        let source = this.props.focused ? Images.baseIcons.mineActive : Images.baseIcons.mine;
        return (
            <TabBarIcon source={source} />
        );
    }
}

const MineScene = (
    <Scene
        key={'mine'}
        component={Mine}
        icon={MineIcon}
        tabBarLabel={'Mine'}
        hideNavBar={true}
        renderBackButton={null}
        renderRightButton={null}
    />
);

export {MineScene};

/**
 * @file Components Scene
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
class Components extends Component<Props, any> {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={[Theme.container]}>
                <View style={[Theme.center]}>
                    <Text style={[Theme.text]}>this is components page</Text>
                </View>
            </View>
        );
    }
}

class ComponentsIcon extends Component {
    render() {
        let source = this.props.focused ? Images.baseIcons.componentsActive : Images.baseIcons.components;
        return (
            <TabBarIcon source={source} />
        );
    }
}

const ComponentsScene = (
    <Scene
        key={'components'}
        component={Components}
        icon={ComponentsIcon}
        tabBarLabel={'Components'}
        title={'Components'}
        renderBackButton={null}
        renderRightButton={null}
    />
);

export {ComponentsScene};

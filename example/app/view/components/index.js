/**
 * @file Components Scene
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

import {Scene, Actions} from 'react-native-router-flux';
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

    _openComponent = (item) => {
        Actions.push(item.scene);
    };

    _keyExtractor = (item) => `component-${item.scene}`;

    _renderItemSeparator = () => (
        <View style={[styles.itemSep]}/>
    );

    _renderItem = ({item}) => (
        <TouchableOpacity style={[styles.item]} onPress={() => {this._openComponent(item)}}>
            <Text style={[styles.itemName]}>{item.name}</Text>
            <Image
                style={[styles.right]}
                source={Images.baseIcons.right}
                resizeMode={'contain'}
            />
        </TouchableOpacity>
    );

    render() {
        const components = [
            {name: "Input", scene: "input"},
            {name: "Input List", scene: "inputList"},
            {name: "Picker", scene: "picker"},
        ];

        return (
            <View style={[Theme.container]}>
                <View>
                    <FlatList
                        style={[styles.content]}
                        data={components}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        ItemSeparatorComponent={this._renderItemSeparator}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#FFFFFF',
    },
    itemSep: {
        backgroundColor: COLOR.light,
        height: px2dp(1),
        marginLeft: px2dp(30),
    },
    item: {
        height: px2dp(88),
        paddingLeft: px2dp(30),
        paddingRight: px2dp(30),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemName: {
        color: COLOR.text,
        fontSize: px2fs(17),
    },
    right: {
        width: px2dp(32),
        height: px2dp(32),
    },
});

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

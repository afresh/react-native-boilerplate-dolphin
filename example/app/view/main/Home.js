/**
 * @file Home Scene
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {View, Image, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';

import {Scene, Actions} from 'react-native-router-flux';
import {observer} from "mobx-react";

import {Images} from "../../resource/images";
import {Theme} from '../../util';
import {TabBarIcon} from '../../component';
import {MainMobx} from '../../mobx/main';

type Props = {
};

@observer
class Home extends Component<Props, any> {
    mainMobx: MainMobx;

    constructor(props){
        super(props);
        this.mainMobx = new MainMobx();
    }

    componentWillMount() {
        this.mainMobx.getHomePage();
    }

    _openAppWeb = (item) => {
        Actions.push("web", {
            title: item.name,
            url: item.url,
        });
    };

    _keyExtractor = (item) => `app-${item.name}`;

    _renderListHeader = () => (
        <View style={[styles.listHeader]}>
            <View style={[styles.header]}>
                <TouchableOpacity style={[styles.headerButton]}>
                    <Image
                        style={[styles.headerButtonImage]}
                        source={Images.baseIcons.menu}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>
                <Text style={[styles.headerTitle]}>dolphin</Text>
                <TouchableOpacity style={[styles.headerButton]}>
                    <Image
                        style={[styles.headerButtonImage]}
                        source={Images.baseIcons.qrcode}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

    _renderListFooter = () => (<View/>);

    _renderItem = ({item}) => (
        <View style={[styles.item]}>
            <TouchableOpacity style={[styles.itemButton]} onPress={() => {this._openAppWeb(item)}}>
                <Image
                    style={[styles.itemButtonImage]}
                    source={{uri: item.icon}}
                    resizeMode={'contain'}
                />
                <Text style={[styles.itemButtonName]}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        console.log("this.mainMobx.homeApps===" + JSON.stringify(this.mainMobx.homeApps));
        return (
            <View style={[Theme.container]}>
                <Image
                    style={[styles.background]}
                    source={Images.background[`bg${random(1, 20)}`]}
                    resizeMode={'stretch'}
                />
                <FlatList
                    style={[styles.content]}
                    data={this.mainMobx.homeApps}
                    extraData={this.mainMobx.homeApps}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    ListHeaderComponent={this._renderListHeader}
                    ListFooterComponent={this._renderListFooter}
                    numColumns={4}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    content: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flex: 1,
    },
    listHeader: {
        flex: 1,
    },
    header: {
        height: px2dp(118),
        paddingLeft: px2dp(30),
        paddingRight: px2dp(30),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerButton: {
        height: px2dp(44),
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerButtonImage: {
        width: px2dp(44),
        height: px2dp(44),
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: px2fs(24),
        textAlign: 'center',
    },
    item: {
        backgroundColor: '#FFFFFF',
        minWidth: px2dp(140),
        minHeight: px2dp(140),
        margin: px2dp(20),
        borderRadius: px2dp(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemButtonImage: {
        width: px2dp(72),
        height: px2dp(72),
        borderRadius: px2dp(72),
    },
    itemButtonName: {
        marginTop: px2dp(10),
        color: COLOR.text,
        fontSize: px2fs(13),
    },
});

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
        hideNavBar={true}
        renderBackButton={null}
        renderRightButton={null}
    />
);

export {HomeScene};

/**
 * @file Custom Input Panel
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {observer} from "mobx-react";

@observer
class CInputPanel extends Component {
    constructor(props) {
        super(props);
    }

    _renderRightButton = () => {
        if (!this.props.rightButtonOnPress) {
            return null;
        }
        return (
            <TouchableOpacity style={[styles.rightButton]} onPress={this.props.rightButtonOnPress}>
                <Text style={[styles.rightButtonText]}>{this.props.rightButtonText}</Text>
            </TouchableOpacity>
        )
    };

    _renderChildren = () => {
        let children = [];
        if (this.props.children) {
            if (this.props.children.length > 0) {
                this.props.children.forEach((child, index) => {
                    if (child) {
                        let sep = (<View key={"sep-" + this.props.title + "-" + index} style={[this.props.itemSizeMode === "long" ? styles.itemSepLong : styles.itemSep]}/>);
                        children.push(sep);
                        children.push(child);
                    }
                })
            } else {
                const sep = (<View key={"sep-" + this.props.title} style={[this.props.itemSizeMode === "long" ? styles.itemSepLong : styles.itemSep]}/>);
                children.push(sep);
                children.push(this.props.children);
            }
        }
        return children;
    };

    render() {
        let propsStyle = this.props.style ? this.props.style : {};
        return (
            <View style={[styles.container, propsStyle]}>
                <View style={[styles.title]}>
                    <Text style={[styles.titleText]}>{this.props.title}</Text>
                    {this._renderRightButton()}
                </View>
                <View style={[styles.list]}>
                    {this._renderChildren()}
                </View>
                <View style={[styles.listSep]}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderTopColor: COLOR.light,
        borderTopWidth: px2dp(1),
    },
    title: {
        height: px2dp(88),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        marginTop: px2dp(19),
        marginLeft: px2dp(30),
        color: COLOR.text,
        fontSize: px2fs(13),
    },
    rightButton: {
        marginTop: px2dp(12),
        marginRight: px2dp(30),
    },
    rightButtonText: {
        color: COLOR.primary,
        fontSize: px2fs(17),
    },
    list: {
        borderBottomColor: COLOR.light,
        borderBottomWidth: px2dp(1),
    },
    listSep: {
        backgroundColor: COLOR.lighten,
        height: px2dp(30),
    },
    itemSep: {
        backgroundColor: COLOR.lighten,
        height: px2dp(1),
        marginLeft: px2dp(30),
    },
    itemSepLong: {
        backgroundColor: COLOR.lighten,
        height: px2dp(1),
    },
});

export {CInputPanel};

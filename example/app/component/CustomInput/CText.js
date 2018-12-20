/**
 * @file Custom Text
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {observer} from "mobx-react";

@observer
class CText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.item]}>
                <View style={[styles.left]}>
                    <Text style={[styles.title]}>{this.props.title}</Text>
                </View>
                <View style={[styles.right]}>
                    <Text style={[styles.value, this.props.valueColor && this.props.value ? {color: this.props.valueColor} : {}]}>{this.props.value}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        height: px2dp(88),
        paddingLeft: px2dp(30),
        paddingRight: px2dp(30),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: COLOR.text,
        fontSize: px2fs(17),
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    value: {
        maxWidth: px2dp(490),
        color: COLOR.value,
        fontSize: px2fs(17),
        textAlign: 'right',
    },
});

export {CText};

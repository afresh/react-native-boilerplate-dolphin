/**
 * @file Custom Select
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {observer} from "mobx-react";

import {Images} from "../../resource/images";

@observer
class CSelect extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={[styles.item]} onPress={this.props.onPress}>
                <View style={[styles.left]}>
                    <Text style={[styles.title]}>{this.props.title}</Text>
                </View>
                <View style={[styles.right]}>
                    <Text style={[styles.placeholder, this.props.valueColor && this.props.value ? {color: this.props.valueColor} : {}]}>{this.props.value ? this.props.value : this.props.placeholder}</Text>
                    <Image
                        style={[styles.rightGoto]}
                        source={Images.baseIcons.right}
                        resizeMode={"contain"}
                    />
                </View>
            </TouchableOpacity>
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
        maxWidth: px2dp(440),
        color: COLOR.value,
        fontSize: px2fs(17),
        textAlign: 'right',
    },
    placeholder: {
        maxWidth: px2dp(440),
        color: COLOR.placeholder,
        fontSize: px2fs(17),
        textAlign: 'right',
    },
    rightGoto: {
        width: px2dp(32),
        height: px2dp(32),
    },
});

export {CSelect};

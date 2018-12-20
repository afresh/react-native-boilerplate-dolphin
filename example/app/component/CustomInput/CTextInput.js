/**
 * @file Custom TextInput
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {observer} from "mobx-react";

@observer
class CTextInput extends Component {
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
                    <TextInput
                        style={[styles.placeholder, this.props.valueColor && this.props.value ? {color: this.props.valueColor} : {}]}
                        underlineColorAndroid={"transparent"}
                        selectTextOnFocus={true}
                        multiline={false}
                        keyboardType={this.props.keyboardType ? this.props.keyboardType : "default"}
                        maxLength={this.props.maxLength ? this.props.maxLength : 1000}
                        placeholder={this.props.placeholder}
                        placeholderTextColor={COLOR.placeholder}
                        value={this.props.value}
                        onChangeText={this.props.onChangeText}
                    />
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
        width: px2dp(480),
        color: COLOR.value,
        fontSize: px2fs(17),
        textAlign: 'right',
    },
    placeholder: {
        width: px2dp(480),
        color: COLOR.placeholder,
        fontSize: px2fs(17),
        textAlign: 'right',
    },
});

export {CTextInput};

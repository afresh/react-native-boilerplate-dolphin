/**
 * @file Custom Input Panel (with TextAreaInput)
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {observer} from "mobx-react";

@observer
class CInputPanelTAI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxLength: this.props.maxLength ? this.props.maxLength : 100,
            value: this.props.value ? this.props.value : "",
        }
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

    _onChangeText = (text) => {
        this.setState({value: text});
        this.props.onChangeText(text);
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
                    <View key={"sep-listTop"} style={[this.props.itemSizeMode === "long" ? styles.itemSepLong : styles.itemSep]}/>
                    <TextInput
                        style={[styles.placeholder]}
                        underlineColorAndroid={"transparent"}
                        selectTextOnFocus={true}
                        multiline={true}
                        textAlignVertical={"top"}
                        maxLength={this.state.maxLength}
                        placeholder={this.props.placeholder}
                        placeholderTextColor={COLOR.placeholder}
                        value={this.state.value}
                        onChangeText={(text) => {this._onChangeText(text)}}
                    />
                    <View style={[styles.number]}>
                        <Text style={[styles.numberText]}>
                            <Text style={[styles.numberText, this.state.value.length === this.state.maxLength ? {color: COLOR.primary} : {}]}>{this.state.value.length}</Text>
                            /{this.state.maxLength}
                        </Text>
                    </View>
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
        borderTopWidth: 1,
    },
    title: {
        height: px2dp(88),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        marginTop: px2dp(19),
        marginLeft: px2dp(29),
        color: COLOR.text,
        fontSize: px2fs(13),
    },
    rightButton: {
        marginTop: px2dp(12),
        marginRight: px2dp(29),
    },
    rightButtonText: {
        color: COLOR.primary,
        fontSize: px2fs(17),
    },
    list: {
        borderBottomColor: COLOR.light,
        borderBottomWidth: 1,
    },
    itemSep: {
        backgroundColor: COLOR.lighten,
        height: 1,
        marginLeft: px2dp(29),
    },
    itemSepLong: {
        backgroundColor: COLOR.lighten,
        height: 1,
    },
    listSep: {
        backgroundColor: COLOR.lighten,
        height: px2dp(40),
    },
    placeholder: {
        width: SCREEN_WIDTH - px2dp(60),
        height: px2dp(130),
        marginTop: px2dp(21),
        marginBottom: px2dp(10),
        marginLeft: px2dp(30),
        marginRight: px2dp(30),
        padding: 0,
        color: COLOR.placeholder,
        fontSize: px2fs(13),
    },
    number: {
        marginBottom: px2dp(21),
        marginLeft: px2dp(30),
        marginRight: px2dp(30),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    numberText: {
        color: COLOR.placeholder,
        fontSize: px2fs(13),
    },
});

export {CInputPanelTAI};

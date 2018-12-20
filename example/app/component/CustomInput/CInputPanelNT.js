/**
 * @file Custom Input Panel (have no title)
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {observer} from "mobx-react";

@observer
class CInputPanelNT extends Component {
    constructor(props) {
        super(props);
    }

    _renderChildren = () => {
        let children = [];
        if (this.props.children) {
            if (this.props.children.length > 0) {
                this.props.children.forEach((child, index) => {
                    if (child) {
                        let sep = (<View key={"sep-" + this.props.title + index} style={[this.props.itemSizeMode === "long" ? styles.itemSepLong : styles.itemSep]}/>);
                        if (index !== 0) {
                            children.push(sep);
                        }
                        children.push(child);
                    }
                })
            } else {
                children.push(this.props.children);
            }
        }
        return children;
    };

    render() {
        let propsStyle = this.props.style ? this.props.style : {};
        return (
            <View style={[styles.container, propsStyle]}>
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

export {CInputPanelNT};

/**
 * @file TabBarIcon
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {View, Image} from 'react-native';

import {Theme} from '../../util';

class TabBarIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {source} = this.props;
        return (
            <View style={[Theme.tabBarView]}>
                <Image
                    style={[Theme.tabBarImage]}
                    source={source}
                    resizeMode={'contain'}
                />
            </View>
        );
    }
}

export default TabBarIcon;

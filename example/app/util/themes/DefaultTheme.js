/**
 * @file Default Theme
 * @author author-Afresh(danding_ge@qq.com)
 */

import {StyleSheet} from "react-native";

global.COLOR = {
    primary: '#FF86C6',
    success: '#5CB85C',
    info: '#5BC0DE',
    warning: '#F0AD4E',
    danger: '#D9534F',
    base: '#000000',
    lighten: '#EFEFEF',
    light: '#D8D8D8',
    dark: '#808080',
    darken: '#696969',
    text: '#0C0C0C',
    value: '#2A2A2A',
    placeholder: '#999999',
};

const defaultTheme = StyleSheet.create({
    // app
    app: {
        flex: 1,
    },
    scenes: {
        backgroundColor: COLOR.lighten,
        flex: 1,
    },
    // router
    router: {
        // backgroundColor: COLOR.lighten,
    },
    sceneNavigationBar: {
        backgroundColor: '#FFFFFF',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: '#CDCDCD',
        borderBottomWidth: 0.5,
    },
    sceneTitle: {
        flex: 1,
        color: COLOR.text,
        fontSize: 18,
        fontWeight: '100',
        textAlign: 'center',
    },
    sceneBackButton: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sceneBackButtonImage: {
        width: 32,
        height: 32,
    },
    // tab
    tabBarView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarImage: {
        width: 32,
        height: 28,
    },
    // scene
    container: {
        backgroundColor: COLOR.lighten,
        flex: 1,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default defaultTheme;

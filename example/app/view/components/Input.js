/**
 * @file Web Scene
 * @author author-Afresh(danding_ge@qq.com)
 */

import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import {Scene} from 'react-native-router-flux';
import {observer} from "mobx-react";

import {Theme} from '../../util';
import {CInputPanelTAI, CText, CSelect, CTextInput, CInputPanelNT, CInputPanel} from '../../component/CustomInput';

type Props = {
};

@observer
class Input extends Component<Props, any> {
    constructor(props){
        super(props);
        this.state = {
            name: "dolphin",
        };
    }

    render() {
        return (
            <ScrollView style={[Theme.container]}>
                <CInputPanelNT style={[{marginTop: px2dp(20)}]}>
                    <CTextInput
                        title={"Name"}
                        placeholder={"input your name"}
                        valueColor={COLOR.success}
                        value={this.state.name}
                        onChangeText={(text) => {
                            console.log(`name: ${text}`);
                            this.setState({name: text});
                        }}
                    />
                    <CTextInput
                        title={"Phone"}
                        placeholder={"input your phone number"}
                        keyboardType={"numeric"}
                        maxLength={11}
                        onChangeText={(text) => {console.log(`phone: ${text}`)}}
                    />
                </CInputPanelNT>
                <CInputPanel
                    title={"Info"}
                    rightButtonText={"Add"}
                    rightButtonOnPress={() => {console.log("press right button of info.")}}
                >
                    <CText title={"No."} valueColor={COLOR.primary} value={"88888888"} />
                    <CSelect
                        title={"birthday"}
                        placeholder={"select date"}
                        valueColor={COLOR.primary}
                        value={"2000-01-01"}
                        onPress={() => {console.log("select date.")}}
                    />
                </CInputPanel>
                <CInputPanelTAI
                    title={"More"}
                    maxLength={100}
                    placeholder={"Up to 100 words could be input."}
                    value={""}
                    onChangeText={(text) => {console.log(`more: ${text}`)}}
                    rightButtonText={"Save"}
                    rightButtonOnPress={() => {console.log("press right button of more.")}}
                />
            </ScrollView>
        );
    }
}

const InputScene = (
    <Scene
        key={'input'}
        component={Input}
        title={'Input'}
    />
);

export {InputScene};

/**
 * @file Api
 * @author author-Afresh(danding_ge@qq.com)
 */

import * as home from './localData/home.json';

const base = {
    host: __DEV__ ? "http://127.0.0.1:8081" : "https://github.com/afresh/react-native-boilerplate-dolphin", //Change to your address and ip
};

const Api = {
    localUrl: {
        //Add your local url...
        homePage: home,
    },
    url: {
        main: {
            //Add your api url...
            getAppVersion: base.host + "/getAppVersion",
        },
    },
};

export default Api;

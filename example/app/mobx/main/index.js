/**
 * @file Main Mobx
 * @author author-Afresh(danding_ge@qq.com)
 */

import {action} from 'mobx';

import {ConfigStore} from '../../store/ConfigStore';
import {fetchGetAppVersion} from '../../server/main';

class MainMobx extends ConfigStore {
    constructor() {
        super();
    }

    @action.bound
    getAppVersion = async (params: any) => {
        const res = await fetchGetAppVersion(params);
        console.log('fetchGetAppVersion', res);
        return res;
    };
}

export {MainMobx};

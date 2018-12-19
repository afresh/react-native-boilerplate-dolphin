/**
 * @file Main Mobx
 * @author author-Afresh(danding_ge@qq.com)
 */

import {observable, action, runInAction} from 'mobx';

import {ConfigStore} from '../../store/ConfigStore';
import {fetchGetHomePage, fetchGetAppVersion} from '../../server/main';

class MainMobx extends ConfigStore {
    @observable
    homeApps: Array;

    constructor() {
        super();
    }

    @action.bound
    getAppVersion = async (params: any) => {
        const res = await fetchGetAppVersion(params);
        console.log('fetchGetAppVersion', res);
        return res;
    };

    @action.bound
    getHomePage = async () => {
        const res = await fetchGetHomePage();
        console.log('fetchGetHomePage', res);
        if (res.code === 200) {
            runInAction(() => {
                this.homeApps = deepClone(res.data.apps);
            });
        }
        return res;
    };
}

export {MainMobx};

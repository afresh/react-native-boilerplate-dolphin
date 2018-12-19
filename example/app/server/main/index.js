/**
 * @file Fetch Server
 * @author author-Afresh(danding_ge@qq.com)
 */

import {Fetch, Api} from '../../util';
import {TResult} from "../TResult";
import {TRGetHomePage, TRGetAppVersion} from './Interfaces';

export async function fetchGetAppVersion(): Promise<TResult<TRGetAppVersion>> {
    const url = Api.url.main.getAppVersion;
    return await Fetch.get(url);
}

export async function fetchGetHomePage(): Promise<TResult<TRGetHomePage>> {
    return Api.localUrl.homePage;
}

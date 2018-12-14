/**
 * @file Fetch Server
 * @author author-Afresh(danding_ge@qq.com)
 */

import {Fetch, Api} from '../../util';
import {TResult} from "../TResult";
import {TRGetAppVersion} from './Interfaces';

export async function fetchGetAppVersion(): Promise<TResult<TRGetAppVersion>> {
    const url = Api.url.main.getAppVersion;
    return await Fetch.get(url);
}

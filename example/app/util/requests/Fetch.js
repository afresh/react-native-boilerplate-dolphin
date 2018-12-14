/**
 * @file Fetch
 * @author author-Afresh(danding_ge@qq.com)
 */

import RNFetchBlob from 'rn-fetch-blob';

const encodeQuery = (url, params = {}) => {
    let _url = url;
    if (!params || !Object.keys(params).length) {
        return _url;
    }
    _url = _url.indexOf('?') === -1 ? `${_url}?` : `${_url}&`;
    const query = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&');
    return `${_url}${query}`;
};

const checkStatus = (resp, json) => {
    if (resp.respInfo.status === 200 && resp.respInfo.status < 300) {
        return json;
    } else {
        console.error(resp, json);
    }
    return json;
};

class Fetch {
    /**
     * Header
     */
    header: {
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json',
    };

    /**
     * Config
     */
    config: {
        // indicator: true,
        // timeout: 3000
        // fileCache: bool,
        // path: string,
        // appendExt: string,
        // session: string,
        // addAndroidDownloads: any,
        trusty: false
    };

    /**
     * Fetch
     * @param method(GET/POST/PUT/DELETE)
     * @param url
     * @param params
     * @param config
     * @param headers
     * @returns {Promise.<TResult>}
     *
     */
    static fetch({ method, url, params = {}, config = {}, headers }): Promise {
        let _method;
        let _params;
        let _url = url;
        const _config = {
            indicator: true,
            timeout: 30000,
            trusty: false,
            ...config
        };

        const _headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "token": TOKEN,
            ...headers
        };

        if (!method) {
            _method = 'GET';
        } else {
            _method = method.toUpperCase();
        }

        if (_method === 'GET' && params) {
            console.log("GET", params);

            _url = encodeURI(encodeQuery(_url, params));

        }

        if (_method === 'POST' && params) {
            _params = JSON.stringify(params);
        }

        if (__DEV__) {
            console.log('_url:', _url);
            // console.log('_params:', _params);
            // console.log('_config:', _config);
            // console.log('_method:', _method);
            // console.log('_header:', _headers);
        }

        return RNFetchBlob.config(_config)
            .fetch(_method, _url, _headers, _params)
            .then(resp => {
                return checkStatus(resp, resp.json());
            })
            .then(response => {
                return response;
            })
            .catch(error => {
                throw error;
            });
    }

    /**
     * Get Request
     * @param url
     * @param params
     * @param headers
     * @param config
     * @returns
     *
     */
    static get(url, params = {}, headers = {}, config = {}): Promise {
        return Fetch.fetch({method: 'get', url, params, headers, config});
    }

    /**
     * Post Request
     * @param url
     * @param params
     * @param headers
     * @param config
     * @returns
     *
     */
    static post(url, params = {}, headers = {}, config = {}): Promise {
        return Fetch.fetch({method: 'post', url, params, headers, config});
    }
}

export {Fetch};

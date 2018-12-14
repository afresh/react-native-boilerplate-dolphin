/**
 * @file Version
 * @author author-Afresh(danding_ge@qq.com)
 */

import DeviceInfo from 'react-native-device-info';

class Version {
    static isNewestVersion = (version) => {
        const localVersion = DeviceInfo.getVersion();
        try {
            let versions = version.split(".");
            let localVersions = localVersion.split(".");
            if (parseInt(versions[0]) > parseInt(localVersions[0])) {
                return false;
            } else if (parseInt(versions[0]) === parseInt(localVersions[0]) && parseInt(versions[1]) > parseInt(localVersions[1])) {
                return false;
            } else if (parseInt(versions[0]) === parseInt(localVersions[0]) && parseInt(versions[1]) === parseInt(localVersions[1]) && parseInt(versions[2]) > parseInt(localVersions[2])) {
                return false;
            } else {
                return true;
            }
        } catch(error) {
            console.error("Version.isNewestVersion", error);
            return true;
        }
    };
}

export default Version;

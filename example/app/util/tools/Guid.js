/**
 * @file Guid Class
 * @author author-Afresh(danding_ge@qq.com)
 */

let _getS4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

export default class Guid {
    static newGuid = () => {
        return (_getS4() + _getS4() + '-' + _getS4() + '-' + _getS4() + '-' + _getS4() + '-' + _getS4() + _getS4() + _getS4());
    }
}
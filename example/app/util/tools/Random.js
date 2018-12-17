/**
 * @file Random
 * @author author-Afresh(danding_ge@qq.com)
 */

export const Random = function random(min: number, max: number): number {
    return Math.floor(Math.random()*(max-min+1)+min);
};

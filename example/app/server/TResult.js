/**
 * @file RTRes
 * @author author-Afresh(danding_ge@qq.com)
 */

export interface TResult<T> {
    code: number;
    message: string;
    data: T;
}

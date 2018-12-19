/**
 * @file Interfaces
 * @author author-Afresh(danding_ge@qq.com)
 */

export interface TRGetAppVersion {
    ios: string;
    android: string;
}

export interface TRGetHomePage {
    apps: Array<App>;
}

export interface App {
    icon: string;
    name: string;
}

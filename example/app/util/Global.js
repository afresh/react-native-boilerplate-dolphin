/**
 * @file Global
 * @author author-Afresh(danding_ge@qq.com)
 */

import {Dimensions, PixelRatio} from 'react-native';
import {DateCompare, AddMilliseconds, AddSeconds, AddMinutes, AddHours, AddDays, AddMonths, AddYears, DateFormat, Ts2Date, Guid, Random, DeepClone, Px2Dp, Px2Fs} from './tools';

const {height, width} = Dimensions.get('window');


//screen width
global.SCREEN_WIDTH = width;
//screen height
global.SCREEN_HEIGHT = height;
//screen pixel ratio
global.PixelRatio = PixelRatio.get();
//pixel
global.pixel = 1 / PixelRatio;
//adapt font size
global.px2fs = Px2Fs;
//adapt screen
global.px2dp = Px2Dp;

//deep clone
global.deepClone = DeepClone;
//random
global.random = Random;
//guid class
global.Guid = Guid;

//time stamp to date
global.ts2date = Ts2Date;
//date to string
global.Date.prototype.format = DateFormat;
//date compute
global.Date.prototype.addYears = AddYears;
global.Date.prototype.addMonths = AddMonths;
global.Date.prototype.addDays = AddDays;
global.Date.prototype.addHours = AddHours;
global.Date.prototype.addMinutes = AddMinutes;
global.Date.prototype.addSeconds = AddSeconds;
global.Date.prototype.addMilliseconds = AddMilliseconds;
global.Date.prototype.compare = DateCompare;

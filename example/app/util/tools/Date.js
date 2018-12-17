/**
 * @file Date Helper
 * @author author-Afresh(danding_ge@qq.com)
 */

/*
* time stamp to date
*/
export const Ts2Date = function ts2date(timestamp: number): Date {
    let date = new Date();
    if (timestamp > 10000) {
        date.setTime(timestamp);
    }
    return date;
};

/*
* date to string
*/
export const DateFormat = function format(fmt: string): string {
    let o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours()%12 === 0 ? 12 : this.getHours()%12, //hour, 12-hour
        "H+" : this.getHours(), //hour, 24-hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    };
    let weekday = {
        "0" : "/u65e5",
        "1" : "/u4e00",
        "2" : "/u4e8c",
        "3" : "/u4e09",
        "4" : "/u56db",
        "5" : "/u4e94",
        "6" : "/u516d"
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+weekday[this.getDay()+""]);
    }
    for(let k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
};

/*
* date add years
*/
export const AddYears = function addYears(years: number): Date {
    let date = new Date(this);
    date.setFullYear(date.getFullYear() + years);
    return new Date(date);
};

/*
* date add months
*/
export const AddMonths = function addMonths(months: number): Date {
    let date = new Date(this);
    date.setMonth(date.getMonth() + months);
    return new Date(date);
};

/*
* date add days
*/
export const AddDays = function addDays(days: number): Date {
    let date = new Date(this);
    date.setDate(date.getDate() + days);
    return new Date(date);
};

/*
* date add hours
*/
export const AddHours = function addHours(hours: number): Date {
    let date = new Date(this);
    date.setHours(date.getHours() + hours);
    return new Date(date);
};

/*
* date add minutes
*/
export const AddMinutes = function addMinutes(minutes: number): Date {
    let date = new Date(this);
    date.setMinutes(date.getMinutes() + minutes);
    return new Date(date);
};

/*
* date add seconds
*/
export const AddSeconds = function addSeconds(seconds: number): Date {
    let date = new Date(this);
    date.setSeconds(date.getSeconds() + seconds);
    return new Date(date);
};

/*
* date add milliseconds
*/
export const AddMilliseconds = function addMilliseconds(milliseconds: number): Date {
    let date = new Date(this);
    date.setMilliseconds(date.getMilliseconds() + milliseconds);
    return new Date(date);
};

/*
* date compare
*/
export const DateCompare = function compare(date: Date): number {
    let res = date.getTime() - this.getTime();
    if (res === 0) {
        return 0;
    } else if (res > 0) {
        return 1;
    } else {
        return -1;
    }
};

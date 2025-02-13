

export function URIParam(obj: any) {
    const url = Object.keys(obj).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
    }).join('&');

    return url;
}

export function numberToBoolean(num: number) {
    if(num == 1) {
        return true;
    }
    else {
        return false;
    }
}

export function booleanToNumber(bool: boolean) {
    if(bool) {
        return 1;
    }
    else {
        return 0;
    }
}

export function dateTimeToString(text: string) {
    return new Date(text).toDateString() + ' ' + new Date(text).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
}

export function getDateTimeDBFormat() {
    var date; 
    date = new Date();
    var year    = date.getFullYear()
    var month   = '0' + date.getMonth()+1;
    var day     = date.getDate();
    var hours   = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var combine = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    return combine;
}

export function getTimestampNumeric() {
    return new Date().getTime();
}

export function printDevLog(title: string, message: any) {
    if(window.location.hostname == 'localhost') {
        console.log(title, message);
    }
}

export function printWarning(title: string, message: any) {
    if(window.location.hostname == 'localhost') {
        console.warn(title, message);
    }
}

export function printError(title: string, message: any) {
    if(window.location.hostname == 'localhost') {
        console.error(title, message);
    }
}
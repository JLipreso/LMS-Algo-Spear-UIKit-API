export function pabiliBookingStoreSource(key: string) {
    if(key == 'list') {
        return {
            "key": key,
            "value":"From list"
        }
    }
    else if(key == 'map') {
        return {
            "key": key,
            "value":"From map"
        }
    }
    else {
        return {
            "key": key,
            "value":"Unknown"
        }
    }
}
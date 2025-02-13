import ls from 'localstorage-slim';

export function isAuthenticated() {

    var user = ls.get('jl-ls-user', { decrypt: true });

    if( user) {
        return true;
    }
    else {
        return false;
    }
}
export function lsSetUser(user: any) {
    return ls.set('jl-ls-user', user, { encrypt: true });
}
export function lsGetUser() {
    return ls.get('jl-ls-user', { decrypt: true });
}
export function lsSetItem(key: string, value: any) {
    return ls.set(key, value, { encrypt: true });
}
export function lsGetItem(key: string) {
    return ls.get(key, { decrypt: true });
}

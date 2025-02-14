import jlconfig from "@/jlconfig.json";

export function APIHost() {
    /**
     * Live:    https://student.jlipreso.com/algospear/laravel/public/api/
     * Local:   http://127.0.0.1:8000/api/
     */
    return "https://student.jlipreso.com/algospear/laravel/public/api/";
}

export function SystemConnections() {
    return {
        CONN_NPM_LMS: "npm_lms",
    }
}

import jlconfig from "@/jlconfig.json";

export function APIHost() {
    /**
     * Live:    https://api-services.jlipreso.com/ver-1/public/api/
     * Local:   http://127.0.0.1:8000/api/
     */
    return "http://127.0.0.1:8000/api/";
}

export function SystemConnections() {
    return {
        CONN_NPM_LMS: "npm_base",
    }
}

import { APIHost } from "../config";
import { printDevLog } from "../utility/console";
import { toRaw } from "vue";

export type URLQueryProps = {
    url: string
};

export async function queryURL({ url }:URLQueryProps):Promise<any>  {
    return new Promise( async (resolve) => {
        var uri = APIHost() + url;
        printDevLog("URL:", uri);
        await fetch(uri).then( res => res.json()).then((response) => {
            printDevLog("Response:", toRaw(response));
            return resolve(response);
        });
    });
}

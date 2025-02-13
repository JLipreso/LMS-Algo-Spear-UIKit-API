import { APIHost } from "../config";
import $ from 'jquery';
import { printDevLog } from "../utility/console";
import { toRaw } from "vue";

export type QueryDeleteProps = {
    connection: string,
    table: string,
    where: any
};

export async function queryDelete({ connection, table, where }: QueryDeleteProps ):Promise<any>  {
    return new Promise( async (resolve) => {
        var args = {
            connection: connection,
            table: table,
            where: JSON.stringify(where)
        };
        
        var uri = APIHost() + "util_query/delete?" + $.param(args);
        printDevLog("queryDelete:", uri);
        await fetch(uri).then( res => res.json()).then((response) => {
            printDevLog("queryDelete:", toRaw(response));
            return resolve(response);
        });
    });
}
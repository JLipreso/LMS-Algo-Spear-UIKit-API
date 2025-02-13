import { APIHost } from "../config";
import $ from 'jquery';
import { printDevLog } from "../utility/console";
import { toRaw } from "vue";

export type QueryInsertGetIDProps = {
    connection: string,
    table: string,
    columns: any
};

export async function queryInsertGetID({ connection, table, columns }: QueryInsertGetIDProps ):Promise<any>  {
    return new Promise( async (resolve) => {
        
        var args = {
            connection: connection,
            table: table,
            columns: columns
        };
        var uri = APIHost() + "util_query/insertGetID?" + $.param(args);
        printDevLog("queryInsertGetID:", uri);
        await fetch(uri).then( res => res.json()).then((response) => {
            printDevLog("queryInsertGetID:", toRaw(response));
            return resolve(response);
        });
    });
}


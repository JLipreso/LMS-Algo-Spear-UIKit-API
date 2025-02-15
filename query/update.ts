import { APIHost } from "../config";
import $ from 'jquery';
import { printDevLog } from "../utility/console";

export type QueryUpdateProps = {
    connection: string,
    table: string,
    where: any,
    columns: any
};

export async function queryUpdate({ connection, table, where, columns }: QueryUpdateProps ):Promise<any>  {
    return new Promise( async (resolve) => {
        
        var args = {
            connection: connection,
            table: table,
            where: JSON.stringify(where),
            columns: columns
        };
        
        var uri = APIHost() + "util_query/update?" + $.param(args);
        printDevLog("Update", uri);
        await fetch(uri).then( res => res.json()).then((response) => {
            printDevLog("Response", response);
            return resolve(response);
        });
    });
}
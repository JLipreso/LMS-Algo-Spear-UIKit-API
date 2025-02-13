import { type QueryDeleteProps } from "../utility-types/types"
import { APIHost } from "../config";
import $ from 'jquery';
import { printDevLog } from "../utility/console";
import { toRaw } from "vue";

/*

var args = {
    connection: connection,
    table: table,
    where: JSON.stringify(where)
};
        
await fetch(APIHost() + "util_query/delete?" + $.param(args)).then( res => res.json()).then((response) => {
    return resolve(response);
});

*/

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
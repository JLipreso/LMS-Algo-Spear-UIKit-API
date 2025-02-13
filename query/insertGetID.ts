import { type QueryInsertGetIDProps } from "../utility-types/types"
import { APIHost } from "../config";
import $ from 'jquery';
import { printDevLog } from "../utility/console";
import { toRaw } from "vue";

/*

await queryInsertGetID({
    connection: 'npm_base',
    table: 'project',
    columns: {
        "project_refid": "project_refid",
        "project_token": "project_token"
    }
})
.then( async (response) => {
    this.insert = toRaw(response);
});



*/

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


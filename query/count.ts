import { APIHost } from "../config";
import { URIParam } from "../utility/format";
import { printDevLog } from "../utility/console";
import { toRaw } from "vue";

export type QueryCountProps = {
    connection: string,
    table: string,
    where: any
};

export async function queryCount({ connection, table, where }: QueryCountProps ):Promise<any>  {
    
    return new Promise( async (resolve) => {
        var args = {
            connection: connection,
            table: table,
            where: JSON.stringify(where)
        };
        
        var uri = APIHost() + "util_query/count?" + URIParam(args);
        printDevLog("Count:", uri);
        await fetch(uri).then( res => res.json()).then((response) => {
            printDevLog("Result:", toRaw(response));
            return resolve(response);
        });
    });
}

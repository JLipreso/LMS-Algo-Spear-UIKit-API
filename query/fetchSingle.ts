import { APIHost } from "../config";
import { URIParam } from "../utility/format";
import { printDevLog } from "../utility/console";
import { toRaw } from "vue";

export type QueryFetchSingleProps = {
    connection: string,
    table: string,
    where: any
};

export async function queryFetchSingle({ connection, table, where }: QueryFetchSingleProps ):Promise<any>  {
    return new Promise( async (resolve) => {
        
        var args = {
            connection: connection,
            table: table,
            where: JSON.stringify(where)
        };
        
        var uri = APIHost() + "util_query/fetchSingle?" + URIParam(args);
        printDevLog("queryFetchSingle:", uri);
        await fetch(uri).then( res => res.json()).then((response) => {
            printDevLog("queryFetchSingle:", toRaw(response));
            return resolve(response);
        });
        
    });
}

import { APIHost } from "../config";
import { URIParam } from "../utility/format";
import { printDevLog } from "../utility/console";
import { toRaw } from "vue";

export type QueryFetchRandomRowProps = {
    connection: string,
    table: string,
    where: any,
    limit: number
};

export async function queryFetchRandomRow({ connection, table, where, limit }: QueryFetchRandomRowProps ):Promise<any>  {
    
    return new Promise( async (resolve) => {
        var args = {
            connection: connection,
            table: table,
            where: JSON.stringify(where),
            limit: limit
        };
        
        var uri = APIHost() + "util_query/fetchRandomRow?" + URIParam(args);
        printDevLog("queryFetchRandomRow:", uri);
        await fetch(uri).then( res => res.json()).then((response) => {
            printDevLog("Response:", toRaw(response));
            return resolve(response);
        });
    });
}

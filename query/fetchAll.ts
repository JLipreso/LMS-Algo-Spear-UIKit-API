import { APIHost } from "../config";
import { URIParam } from "../utility/format";
import { printDevLog } from "../utility/console";
import { toRaw } from "vue";

export type QueryFetchAllProps = {
    connection: string,
    table: string,
    where: any,
    orderby: any
};

export async function queryFetchAll({ connection, table, where, orderby }: QueryFetchAllProps ):Promise<any>  {
    
    return new Promise( async (resolve) => {
        var args = {
            connection: connection,
            table: table,
            where: JSON.stringify(where),
            orderby: JSON.stringify(orderby)
        };
        
        var uri = APIHost() + "util_query/fetchAll?" + URIParam(args);
        printDevLog("queryFetchAll:", uri);
        await fetch(uri).then( res => res.json()).then((response) => {
            printDevLog("queryFetchAll:", toRaw(response));
            return resolve(response);
        });
    });
}

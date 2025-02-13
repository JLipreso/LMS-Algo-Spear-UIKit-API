import { APIHost } from "../config";
import $ from 'jquery';
import { printDevLog } from "../utility/console";
import { toRaw } from "vue";

export type QueryFetchPaginateProps = {
    connection: string,
    table: string,
    where: any,
    orderby: any,
    per_page?: number,
    page_no?: number
};

export async function queryFetchPaginate({ connection, table, where, orderby, per_page = 25, page_no = 1 }: QueryFetchPaginateProps ):Promise<any>  {
    return new Promise( async (resolve) => {
        var args = {
            connection: connection,
            table: table,
            where: JSON.stringify(where),
            orderby: JSON.stringify(orderby),
            per_page: per_page,
            page: page_no
        };
        
        var uri = APIHost() + "util_query/fetchPaginate?" + $.param(args);
        printDevLog("queryFetchPaginate:", uri);
        await fetch(uri).then( res => res.json()).then((response) => {
            printDevLog("queryFetchPaginate:", toRaw(response));
            return resolve(response);
        });
    });
}

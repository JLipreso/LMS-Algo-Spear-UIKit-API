import { SystemConnections } from "../config";
import { queryFetchPaginate } from "../query/fetchPaginate";

export type AdminFetchPaginateProps = {
    page: number
};

export async function userAdminFetchPaginate({ page }:AdminFetchPaginateProps):Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchPaginate({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'users_admin',
            where: [
                ['dataid', '>', 0]
            ],
            orderby: ['lastname', 'asc'],
            page_no: page
        }).then( async (response) => {
            return resolve(response);
        });
    });
}
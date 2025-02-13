import { SystemConnections } from "../config";
import { queryFetchPaginate } from "../query/fetchPaginate";

export type StudentFetchPaginateProps = {
    page: number
};

export async function userStudentFetchPaginate({ page }:StudentFetchPaginateProps):Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchPaginate({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'users_student',
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
import { SystemConnections } from "../config";
import { queryFetchPaginate } from "../query/fetchPaginate";

export type QuestionnaireFetchPaginateProps = {
    page: number
};

export async function questionnaireFetchPaginate({ page }:QuestionnaireFetchPaginateProps):Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchPaginate({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'questionnaire',
            where: [
                ['dataid', '>', 0]
            ],
            orderby: ['dataid', 'desc'],
            page_no: page
        }).then( async (response) => {
            return resolve(response);
        });
    });
}
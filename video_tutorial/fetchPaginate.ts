import { SystemConnections } from "../config";
import { queryFetchPaginate } from "../query/fetchPaginate";

export type VideoTutorialPaginateProps = {
    page: number
};

export async function videoTutorialFetchPaginate({ page }:VideoTutorialPaginateProps):Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchPaginate({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'video_tutorial',
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
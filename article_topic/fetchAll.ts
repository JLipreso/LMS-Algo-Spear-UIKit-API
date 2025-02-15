import { SystemConnections } from "../config";
import { queryFetchAll } from "../query/fetchAll";

export async function fetchAllArticleTopic():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['dataid', '>', 0]
            ],
            orderby: ['name', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

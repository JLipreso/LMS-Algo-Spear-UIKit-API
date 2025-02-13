import { SystemConnections } from "../config";
import { queryFetchAll } from "../query/fetchAll";

export async function fetchAllVideoGroup():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'video_group',
            where: [
                ['dataid', '>', 0]
            ],
            orderby: ['name', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

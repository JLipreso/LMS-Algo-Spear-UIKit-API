import { SystemConnections } from "../config";
import { queryFetchAll } from "../query/fetchAll";

export async function fetchAllQuestionnaireCategory():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'questionnaire_category',
            where: [
                ['dataid', '>', 0]
            ],
            orderby: ['sort', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

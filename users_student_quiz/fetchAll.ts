import { SystemConnections } from "../config";
import { queryFetchAll } from "../query/fetchAll";

export async function fetchAllSavedQuizzes():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'users_student_quiz',
            where: [
                ['dataid', '>', 0]
            ],
            orderby: ['dataid', 'desc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

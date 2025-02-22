import { SystemConnections } from "../config";
import { queryDelete } from "../query/delete";

export async function deleteQuestionnaire(question_refid: string):Promise<any> {
    return new Promise( async (resolve) => {
        await queryDelete({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'questionnaire',
            where: [
                ['question_refid', question_refid]
            ]
        }).then( async (response) => {
            return resolve(response);
        });
    });
}
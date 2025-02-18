import { SystemConnections } from "../config";
import { queryInsertGetID } from "../query/insertGetID";
import { createReferenceID } from "../utility/reference_id";

export type StudentQuizCreateProps = {
    user_refid: string,
    user_name: string,
    quiz_json: string
};

export async function createStudentQuiz({ user_refid, user_name, quiz_json }:StudentQuizCreateProps):Promise<any> {
    return new Promise( async (resolve) => {
        
            var quiz_refid  = createReferenceID('SQZ');
            var total       = 100;
            var score       = 45;

            await queryInsertGetID({
                connection: SystemConnections()['CONN_NPM_LMS'],
                table: 'questionnaire',
                columns: { quiz_refid, user_refid, user_name, quiz_json, total, score }
            }).then( async (response) => {
                return resolve(response);
            });
        
    });
}
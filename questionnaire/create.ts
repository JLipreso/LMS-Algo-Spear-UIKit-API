import { SystemConnections } from "../config";
import { queryInsertGetID } from "../query/insertGetID";
import { createReferenceID } from "../utility/reference_id";

export type QuestionnaireCreateProps = {
    question: String, 
    is_choices: Number, 
    choice_a: String, 
    choice_b: String, 
    choice_c: String, 
    choice_d: String, 
    answer: String, 
    created_by: String
};

export async function createQuestionnaire({ question, is_choices, choice_a, choice_b, choice_c, choice_d, answer, created_by }:QuestionnaireCreateProps):Promise<any> {
    return new Promise( async (resolve) => {
        var question_refid = createReferenceID('QTN');
        await queryInsertGetID({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'questionnaire',
            columns: { question_refid, question, is_choices, choice_a, choice_b, choice_c, choice_d, answer, created_by}
        })
        .then( async (response) => {
            return resolve(response);
        });
    });
}
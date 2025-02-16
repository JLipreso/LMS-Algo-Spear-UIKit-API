import { SystemConnections } from "../config";
import { queryInsertGetID } from "../query/insertGetID";
import { queryUpdate } from "../query/update";
import { createReferenceID } from "../utility/reference_id";

export type QuestionnaireUpdateProps = {
    question_refid: String,
    question: String, 
    is_choices: Number, 
    choice_a: String, 
    choice_b: String, 
    choice_c: String, 
    choice_d: String, 
    answer: String, 
    created_by: String
};

export async function updateQuestionnaire({ question_refid, question, is_choices, choice_a, choice_b, choice_c, choice_d, answer, created_by }:QuestionnaireUpdateProps):Promise<any> {
    return new Promise( async (resolve) => {
        await queryUpdate({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'questionnaire',
            where: [
                ['question_refid', question_refid]
            ],
            columns: [
                {'question':question},
                {'is_choices':is_choices},
                {'choice_a':choice_a},
                {'choice_b':choice_b},
                {'choice_c':choice_c},
                {'choice_d':choice_d},
                {'answer':answer},
                {'created_by':created_by}
            ]
        }).then( async (response) => {
            return resolve(response);
        });
    });
}


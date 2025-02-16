import { SystemConnections } from "../config";
import { queryInsertGetID } from "../query/insertGetID";
import { createReferenceID } from "../utility/reference_id";

export type QuestionnaireCreateProps = {
    category_refid: String,
    question: String, 
    is_choices: Number, 
    choice_a: String, 
    choice_b: String, 
    choice_c: String, 
    choice_d: String, 
    answer: String, 
    created_by: String
};

export async function createQuestionnaire({ category_refid, question, is_choices, choice_a, choice_b, choice_c, choice_d, answer, created_by }:QuestionnaireCreateProps):Promise<any> {
    return new Promise( async (resolve) => {
        if((category_refid == '0') || (category_refid == '')) {
            return resolve({
                success: false,
                message: "Please select category"
            });
        }
        else if(question == '') {
            return resolve({
                success: false,
                message: "Please provide question"
            });
        }
        else if((is_choices == 1) && (choice_a == '')) {
            return resolve({
                success: false,
                message: "Value for option A is required"
            });
        }
        else if((is_choices == 1) && (choice_b == '')) {
            return resolve({
                success: false,
                message: "Value for option B is required"
            });
        }
        else if((is_choices == 1) && (choice_c == '')) {
            return resolve({
                success: false,
                message: "Value for option C is required"
            });
        }
        else if((is_choices == 1) && (choice_d == '')) {
            return resolve({
                success: false,
                message: "Value for option D is required"
            });
        }
        else if(answer == '') {
            return resolve({
                success: false,
                message: "Please provide answer"
            });
        }
        else {
            var question_refid = createReferenceID('QTN');
            await queryInsertGetID({
                connection: SystemConnections()['CONN_NPM_LMS'],
                table: 'questionnaire',
                columns: { question_refid, category_refid, question, is_choices, choice_a, choice_b, choice_c, choice_d, answer, created_by}
            }).then( async (response) => {
                return resolve(response);
            });
        }
    });
}
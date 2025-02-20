import { APIHost, SystemConnections } from "../config";
import { queryInsertGetID } from "../query/insertGetID";
import { createReferenceID } from "../utility/reference_id";
import axios from "axios";

export type StudentQuizCreateProps = {
    user_refid: string,
    user_name: string,
    quiz_json: string
};

export async function createStudentQuiz({ user_refid, user_name, quiz_json }:StudentQuizCreateProps):Promise<any> {
    return new Promise( async (resolve) => {
        
            var total       = 100;
            var score       = 45;

            try {
                const response = await axios.post(APIHost() + "util_quiz/saveQuize", {
                    user_refid: user_refid,
                    user_name: user_name,
                    quiz_json: JSON.stringify(quiz_json),
                    total: total,
                    score: score
                });
                console.log(response);
                return resolve({
                    success: false,
                    message: response.data
                });
            }
            catch(error: any) {
                console.log(error);
                return resolve({
                    success: false,
                    message: error.response.data
                });
            }  
    });
}


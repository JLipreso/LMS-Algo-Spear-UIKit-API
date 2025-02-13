import { SystemConnections } from "../config";
import { SystemMessage } from "../message";
import { queryFetchSingle } from "../query/fetchSingle";
import { lsSetUser } from "../utility/localStorage";

export type StudentSigninProps = {
    email: string,
    password: string
};

export async function userStudentSignIn({ email, password }:StudentSigninProps):Promise<any> {
    return new Promise( async (resolve) => {
        if(email == '') {
            return resolve({
                success: false,
                message: SystemMessage()['REQ_EMAIL']
            });
        }
        else if(password == '') {
            return resolve({
                success: false,
                message: SystemMessage()['REQ_PASS']
            });
        }
        else {
            await queryFetchSingle({
                connection: SystemConnections()['CONN_NPM_LMS'], 
                table: 'users_student', 
                where: [
                    ['email', email],
                    ['password', password]
                ]
            }).then( async (response) => {
                if(response.length == 0) {
                    return resolve({
                        success: false,
                        message: SystemMessage()['INC_EMAIL_PASS']
                    });
                }
                else {
                    lsSetUser(response[0]);
                    return resolve({
                        success: true,
                        message: 'Authenticated'
                    });
                }
            });
        }
    })
}

export async function userStudentSignUp():Promise<any> {
    return new Promise( async (resolve) => {

    });
}
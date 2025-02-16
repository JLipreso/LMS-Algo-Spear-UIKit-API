import { SystemConnections } from "../config";
import { queryUpdate } from "../query/update";

export type StudentUpdateProps = {
    user_refid: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    confirm_password: String,
    active: Number
};

export async function updateStudent({ user_refid, firstname, lastname, email, password, confirm_password, active }:StudentUpdateProps):Promise<any> {
    return new Promise( async (resolve) => {
        if(firstname == '') {
            return resolve({
                success: false,
                message: "First name is required"
            });
        }
        else if(lastname == '') {
            return resolve({
                success: false,
                message: "Last name is required"
            });
        }
        else if(email == '') {
            return resolve({
                success: false,
                message: "Please provide email"
            });
        }
        else if(password == '') {
            return resolve({
                success: false,
                message: "Please provide default password"
            });
        }
        else if(confirm_password == '') {
            return resolve({
                success: false,
                message: "Please confirm your password"
            });
        }
        else if(password !== confirm_password) {
            return resolve({
                success: false,
                message: "Password doesn't match"
            });
        }
        else {
            await queryUpdate({
                connection: SystemConnections()['CONN_NPM_LMS'],
                table: 'users_student',
                where: [
                    ['user_refid', user_refid]
                ],
                columns: [
                    {'firstname':firstname},
                    {'lastname':lastname},
                    {'email':email},
                    {'password':password},
                    {'active':active}
                ]
            }).then( async (response) => {
                return resolve(response);
            });
        }
    });
}

import { SystemConnections } from "../config";
import { queryInsertGetID } from "../query/insertGetID";
import { createReferenceID } from "../utility/reference_id";

export type AdminCreateProps = {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    confirm_password: String,
    created_by: String,
};

export async function createAdmin({ firstname, lastname, email, password, confirm_password, created_by }:AdminCreateProps):Promise<any> {
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
            var user_refid = createReferenceID('ADM');
            await queryInsertGetID({
                connection: SystemConnections()['CONN_NPM_LMS'],
                table: 'users_admin',
                columns: { user_refid, firstname, lastname, email, password, created_by }
            }).then( async (response) => {
                return resolve(response);
            });
        }
    });
}

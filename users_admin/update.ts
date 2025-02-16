import { SystemConnections } from "../config";
import { queryUpdate } from "../query/update";

export type AdminUpdateProps = {
    admin_refid: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    confirm_password: String,
    active: Number
};

export async function updateAdmin({ admin_refid, firstname, lastname, email, password, confirm_password, active }:AdminUpdateProps):Promise<any> {
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
                table: 'users_admin',
                where: [
                    ['admin_refid', admin_refid]
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

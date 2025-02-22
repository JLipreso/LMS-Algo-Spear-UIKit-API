import { SystemConnections } from "../config";
import { queryDelete } from "../query/delete";

export type DeleteAdminProps = {
    admin_refid: string
};

export async function deleteAdmin({ admin_refid }:DeleteAdminProps ):Promise<any> {
    return new Promise( async (resolve) => {
        await queryDelete({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'users_admin',
            where: [
                ['user_refid', admin_refid]
            ],
        }).then( async (response) => {
            return resolve(response);
        });
    });
}
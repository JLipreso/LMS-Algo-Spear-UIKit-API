import { SystemConnections } from "../config";
import { queryDelete } from "../query/delete";

export type DeleteStudentProps = {
    user_refid: string
};

export async function deleteStudent({ user_refid }:DeleteStudentProps ):Promise<any> {
    return new Promise( async (resolve) => {
        await queryDelete({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'users_student',
            where: [
                ['user_refid', user_refid]
            ],
        }).then( async (response) => {
            return resolve(response);
        });
    });
}
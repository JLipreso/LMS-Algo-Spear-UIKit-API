import { SystemConnections } from "../config";
import { queryCount } from "../query/count";

export async function countStudents():Promise<any>  {
    return new Promise( async (resolve) => {
        await queryCount({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'users_student',
            where: [
                ['dataid', '>', 0]
            ]
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function countAdmins():Promise<any>  {
    return new Promise( async (resolve) => {
        await queryCount({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'users_admin',
            where: [
                ['dataid', '>', 0]
            ]
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function countVideoTutorials():Promise<any>  {
    return new Promise( async (resolve) => {
        await queryCount({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'video_tutorial',
            where: [
                ['dataid', '>', 0]
            ]
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function countReadingMaterials():Promise<any>  {
    return new Promise( async (resolve) => {
        await queryCount({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article',
            where: [
                ['dataid', '>', 0]
            ]
        }).then( async (response) => {
            return resolve(response);
        });
    });
}
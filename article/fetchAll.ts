import { SystemConnections } from "../config";
import { queryFetchAll } from "../query/fetchAll";

export async function fetchAllArticles():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article',
            where: [
                ['dataid', '>', 0]
            ],
            orderby: ['dataid', 'desc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function fetchAllArticlesDA():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['group_code', 'DS']
            ],
            orderby: ['sort', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function fetchAllArticlesAG():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['group_code', 'AG']
            ],
            orderby: ['sort', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

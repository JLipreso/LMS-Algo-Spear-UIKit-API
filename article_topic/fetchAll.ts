import { SystemConnections } from "../config";
import { queryFetchAll } from "../query/fetchAll";

export async function fetchAllArticleTopic():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['dataid', '>', 0]
            ],
            orderby: ['name', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function fetchAllArticlesFunOfProg():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['group_code', 'FUN_OF_PROG']
            ],
            orderby: ['sort', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function fetchAllArticlesArrays():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['group_code', 'ARRAYS']
            ],
            orderby: ['sort', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function fetchAllArticlesLinkedList():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['group_code', 'LINKED_LIST']
            ],
            orderby: ['sort', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function fetchAllArticlesStacks():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['group_code', 'STACKS']
            ],
            orderby: ['sort', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function fetchAllArticlesQueues():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['group_code', 'QUEUES']
            ],
            orderby: ['sort', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function fetchAllArticlesGraphs():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['group_code', 'GRAPHS']
            ],
            orderby: ['sort', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function fetchAllArticlesSorting():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['group_code', 'SORTING']
            ],
            orderby: ['sort', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function fetchAllArticlesSearching():Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchAll({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_topic',
            where: [
                ['group_code', 'SEARCH']
            ],
            orderby: ['sort', 'asc']
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

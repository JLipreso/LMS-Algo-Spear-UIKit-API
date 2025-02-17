import { SystemConnections } from "../config";
import { queryFetchSingle } from "../query/fetchSingle";

export type FetchSingleArticleProps = {
    article_refid: string
};

export async function fetchSingleArticle({ article_refid }:FetchSingleArticleProps ):Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchSingle({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article',
            where: [
                ['article_refid', article_refid]
            ]
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

export async function fetchSingleArticleByTopic(topic_refid: String):Promise<any> {
    return new Promise( async (resolve) => {
        await queryFetchSingle({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article',
            where: [
                ['topic_refid', topic_refid]
            ]
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

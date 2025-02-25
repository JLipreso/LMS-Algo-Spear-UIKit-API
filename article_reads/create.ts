import { SystemConnections } from "../config";
import { queryCount } from "../query/count";
import { queryInsertGetID } from "../query/insertGetID";

export type ArticleReadsCreateProps = {
    article_refid: string,
    topic_refid: string,
    user_refid: string
}

export async function createReadLogs({ article_refid, topic_refid, user_refid }:ArticleReadsCreateProps):Promise<any> {
    return new Promise( async (resolve) => {
        await queryCount({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_reads',
            where: [
                ['article_refid', article_refid],
                ['topic_refid', topic_refid],
                ['user_refid', user_refid]
            ]
        }).then( async (count) => {
            if(count == 0) {
                await queryInsertGetID({
                    connection: SystemConnections()['CONN_NPM_LMS'],
                    table: 'article_reads',
                    columns: { article_refid, topic_refid, user_refid }
                }).then( async () => {
                    return resolve({
                        success: true,
                        message: "Record created"
                    });
                });
            }
            else {
                return resolve({
                    success: false,
                    message: "Record exist"
                });
            }
        });
    });
}
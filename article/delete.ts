import { SystemConnections } from "../config";
import { queryDelete } from "../query/delete";

export type DeleteArticleProps = {
    article_refid: string
};

export async function deleteArticle({ article_refid }:DeleteArticleProps ):Promise<any> {
    return new Promise( async (resolve) => {
        await queryDelete({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article',
            where: [
                ['article_refid', article_refid]
            ],
        }).then( async (response) => {
            return resolve(response);
        });
    });
}

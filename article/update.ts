import { SystemConnections } from "../config";
import { queryUpdate } from "../query/update";

export type ArticleUpdateProps = {
    article_refid: String,
    topic_refid: String,
    title: String,
    description: String,
    content: String
};

export async function updateArticle({ article_refid, topic_refid, title, description, content }:ArticleUpdateProps):Promise<any> {
    return new Promise( async (resolve) => {
        if(topic_refid == '0') {
            return resolve({
                success: false,
                message: "Topic is required"
            });
        }
        else if(title == '') {
            return resolve({
                success: false,
                message: "Title is required"
            });
        }
        else if(content == '') {
            return resolve({
                success: false,
                message: "Content is required"
            });
        }
        else {
            await queryUpdate({
                connection: SystemConnections()['CONN_NPM_LMS'],
                table: 'article',
                where: [
                    ['article_refid', article_refid]
                ],
                columns: [
                    {'topic_refid':topic_refid},
                    {'title':title},
                    {'description':description},
                    {'content':content}
                ]
            }).then( async (response) => {
                return resolve(response);
            });
        }
    });
}

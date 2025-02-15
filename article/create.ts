import { SystemConnections } from "../config";
import { queryInsertGetID } from "../query/insertGetID";
import { createReferenceID } from "../utility/reference_id";

export type ArticleCreateProps = {
    topic_refid: String,
    title: String,
    description: String,
    content: String,
    created_by: String
};

export async function createArticle({ topic_refid, title, description, content, created_by  }:ArticleCreateProps):Promise<any> {
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
            var article_refid = createReferenceID('ART');
            await queryInsertGetID({
                connection: SystemConnections()['CONN_NPM_LMS'],
                table: 'article',
                columns: { topic_refid, article_refid, title, description, content, created_by }
            }).then( async (response) => {
                return resolve(response);
            });
        }
    });
}

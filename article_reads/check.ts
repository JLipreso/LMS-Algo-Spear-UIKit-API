import { SystemConnections } from "../config";
import { queryCount } from "../query/count";
import { queryFetchAll } from "../query/fetchAll";
import { queryURL } from "../query/url";

export async function isFundamentalDone(user_refid: string):Promise<any> {
    return new Promise( async (resolve) => {
        await queryCount({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_reads',
            where: [
                ['topic_refid','ATC-02182025044333-O9L'],
                ['user_refid', user_refid]
            ]
        }).then( async (variables) => {
            if(variables == 0) {
                return resolve({
                    success: false,
                    message: "<p>Please read about <span class='text-danger'>Variable</span> under <span class='text-danger'>Fundamental of Programming</span> first.</p>"
                });
            }
            else {
                await queryCount({
                    connection: SystemConnections()['CONN_NPM_LMS'],
                    table: 'article_reads',
                    where: [
                        ['topic_refid','ATC-02182025044337-2GE'],
                        ['user_refid', user_refid]
                    ]
                }).then( async (operator) => {
                    if(operator == 0) {
                        return resolve({
                            success: false,
                            message: "<p>Please read about <span class='text-danger'>Operators</span> under <span class='text-danger'>Fundamental of Programming</span> first.</p>"
                        });
                    }
                    else {
                        await queryCount({
                            connection: SystemConnections()['CONN_NPM_LMS'],
                            table: 'article_reads',
                            where: [
                                ['topic_refid','ATC-02182025044341-QJP'],
                                ['user_refid', user_refid]
                            ]
                        }).then( async (control_flow) => {
                            if(control_flow == 0) {
                                return resolve({
                                    success: false,
                                    message: "<p>Please read about <span class='text-danger'>Control Flow</span> under <span class='text-danger'>Fundamental of Programming</span> first.</p>"
                                });
                            }
                            else {
                                return resolve({
                                    success: true,
                                    message: "Proceed"
                                });
                            }
                        });
                    }
                });
            }
        });
    });
}

export async function isParentArticleDone(user_refid: string, article_refid: string, article_name: string):Promise<any> {
    return new Promise( async (resolve) => {
        await queryCount({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'article_reads',
            where: [
                ['topic_refid', article_refid],
                ['user_refid', user_refid]
            ]
        }).then( async (done) => {
            if(done == 0) {
                return resolve({
                    success: false,
                    message: "<p>Please read <span class='text-danger'>" + article_name + "</span> first.</p>"
                });
            }
            else {
                return resolve({
                    success: true,
                    message: "Done"
                });
            }
        });
    });
}


export async function isArticleGroupDone(user_refid: string, group_code: string):Promise<any> {
    return new Promise( async (resolve) => {
        await queryURL({
            url: "util_quiz/checkReads?user_refid="+user_refid+"&group_code=" + group_code
        }).then( async (response) => {
            return resolve(response);
        });
    });
}


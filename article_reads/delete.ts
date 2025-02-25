import Swal from "sweetalert2";
import { SystemConnections } from "../config";
import { queryDelete } from "../query/delete";

export type ResetReadingTimeProps = {
    user_refid: string,
    articles: string[]
};

export async function resetReadingTime({ user_refid, articles }:ResetReadingTimeProps):Promise<any> {
    return new Promise( async (resolve) => {
        Swal.fire({
            title: "Confirmation",
            text: "Reset reading time?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Reset"
        }).then( async (result) => {
            if(result.isConfirmed) {
                var list = [] as any;
                for(let i = 0; i < articles.length; i++) {
                    await queryDelete({
                        connection: SystemConnections()['CONN_NPM_LMS'],
                        table: 'article_reads',
                        where: [
                            ['user_refid', user_refid],
                            ['article_refid', articles[i]]
                        ]
                    }).then( async (response) => {
                        list.push(response);
                    });
                }
                return resolve({
                    success: true
                });
            }
            else {
                return resolve({
                    success: false
                });
            }
        });
    });
}
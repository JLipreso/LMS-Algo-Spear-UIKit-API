import { SystemConnections } from "../config";
import { queryDelete } from "../query/delete";

export async function videoTutorialDelete(video_refid: string):Promise<any> {
    return new Promise( async (resolve) => {
        await queryDelete({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'video_tutorial',
            where: [
                ['video_refid', video_refid]
            ]
        }).then( async (response) => {
            return resolve(response);
        });
    });
}
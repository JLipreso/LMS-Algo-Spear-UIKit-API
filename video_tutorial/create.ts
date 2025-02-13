import { SystemConnections } from "../config";
import { queryInsertGetID } from "../query/insertGetID";
import { createReferenceID } from "../utility/reference_id";

export type VideoTutorialCreateProps = {
    video_group_refid: string,
    video_link: string,
    title: string,
    description: string,
    created_by: string
};

export async function createVideoTutorial({ video_group_refid, video_link, title, description, created_by }:VideoTutorialCreateProps):Promise<any> {
    return new Promise( async (resolve) => {
        var video_refid = createReferenceID('VDO');
        await queryInsertGetID({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'video_tutorial',
            columns: { video_group_refid, video_refid, video_link, title, description, created_by }
        }).then( async (response) => {
            return resolve(response);
        });
    });
}
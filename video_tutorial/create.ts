import { SystemConnections } from "../config";
import { queryInsertGetID } from "../query/insertGetID";
import { createReferenceID } from "../utility/reference_id";

export type VideoTutorialCreateProps = {
    video_group_refid: string,
    video_link: string,
    video_code: string,
    title: string,
    description: string,
    created_by: string
};

export async function createVideoTutorial({ video_group_refid, video_link, video_code, title, description, created_by }:VideoTutorialCreateProps):Promise<any> {
    return new Promise( async (resolve) => {
        if(video_link == '') {
            return resolve({
                success: false,
                message: "Video link is required"
            });
        }
        else if(title == '') {
            return resolve({
                success: false,
                message: "Title is required"
            });
        }
        else if(video_code == '') {
            return resolve({
                success: false,
                message: "Video code is required"
            });
        }
        else if((video_group_refid == '') || (video_group_refid == '0')) {
            return resolve({
                success: false,
                message: "Please select video group"
            });
        }
        else if(description == '') {
            return resolve({
                success: false,
                message: "Description is required"
            });
        }
        else {
            var video_refid = createReferenceID('VDO');
            await queryInsertGetID({
                connection: SystemConnections()['CONN_NPM_LMS'],
                table: 'video_tutorial',
                columns: { video_group_refid, video_refid, video_link, video_code, title, description, created_by }
            }).then( async (response) => {
                return resolve(response);
            });
        }
    });
}
import { SystemConnections } from "../config";
import { queryUpdate } from "../query/update";

export type VideoTutorialUpdateProps = {
    video_group_refid: string,
    video_refid: string,
    video_link: string,
    video_code: string,
    title: string,
    description: string,
    created_by: string
};

export async function updateVideoTutorial({ video_group_refid, video_refid, video_link, video_code, title, description, created_by }:VideoTutorialUpdateProps):Promise<any> {
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
          await queryUpdate({
            connection: SystemConnections()['CONN_NPM_LMS'],
            table: 'video_tutorial',
            where: [
              ['video_refid', video_refid]
            ],
            columns: [
              {'video_group_refid':video_group_refid},
              {'video_link':video_link},
              {'video_code':video_code},
              {'title':title},
              {'description':description},
              {'created_by':created_by}
            ]
          }).then( async (response) => {
            return resolve(response);
          });
        }
    });
}
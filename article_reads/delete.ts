import Swal from "sweetalert2";
import { queryURL } from "../query/url";

export type ResetReadingTimeProps = {
    user_refid: string,
    group_code: string
};

export async function resetReadingTimeByGroup({ user_refid, group_code }:ResetReadingTimeProps):Promise<any> {
    return new Promise( async (resolve) => {
        Swal.fire({
            title: "Confirmation",
            text: "Reset reading time?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Reset"
        }).then( async (result) => {
            if(result.isConfirmed) {
                await queryURL({ url: "util_quiz/resetReading?user_refid="+ user_refid +"&group_code=" + group_code }).then( async (response) => {
                    return resolve(response);
                });
            }
            else {
                return resolve({success: false });
            }
        });
    });
}
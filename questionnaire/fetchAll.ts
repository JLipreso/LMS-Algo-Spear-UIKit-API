import { queryURL } from "../query/url";
import { lsGetUser } from "../utility/localStorage";
import $ from 'jquery';
import jlconfig from "@/jlconfig.json";


type FetchRandomExcercisesProps = {
    group_refid: string,
    limit: number
};

export async function fetchRandomExcercises({ group_refid, limit }:FetchRandomExcercisesProps):Promise<any> {
    return new Promise( async (resolve) => {
        var user = await lsGetUser();
        if(user) {
            var args = {
                user_refid: '',
                limit: limit,
                group_refid: group_refid
            };
            await queryURL({ url: "util_quiz/fetchRandomExam?" + $.param(args) }).then( async (response) => {
                return resolve(response);
            });
        }
        else {
            return resolve({
                success: false,
                message: "No active user"
            });
        }
    });
}
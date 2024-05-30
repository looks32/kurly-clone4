"use server";

import { z } from "zod";
import { PASSWORDREGEX, PASSWORD_MIN_LENGTH, PASSWORD_REGEX_ERROR } from "../lib/constants";


const formSchema = z.object({
    loginId: z.string().toLowerCase().min(3),
    loginPw : z.string({
        required_error : "비번 입력해주셈"
    }).min(PASSWORD_MIN_LENGTH).regex(PASSWORDREGEX, PASSWORD_REGEX_ERROR)
})

export async function login(prevState:any, formData: FormData){
    const data = {
        loginId : formData.get("loginId"),
        loginPw : formData.get("loginPw")
    };

    const result = formSchema.safeParse(data);
    if(!result.success){
        return result.error.flatten();
    } else {
        console.log("로그인 완료");
    }
    // return {
    //     errors : ["틀린 비번임", "비번짧셈"]
    // }
}
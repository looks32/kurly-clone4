
"use server";

import bcrypt from 'bcrypt';
import { z } from "zod";
import { PASSWORDREGEX, PASSWORD_MIN_LENGTH, PASSWORD_REGEX_ERROR } from "../lib/constants";
import db from "../lib/db";
import getSelection from "../lib/session";
import { redirect } from "next/navigation";


const checkIdExists = async (userid)=>{
    const user = await db.user.findUnique({
        where : {
            userid,
        },
        select : {
            id : true
        }
    })
    return Boolean(user)

}


const formSchema = z.object({
    loginId: z.string()
    .toLowerCase()
    .min(1)
    .refine(checkIdExists,"아이디를 다시 확인해주세요."),
    loginPw : z.string({
        required_error : "비번 입력해주셈"
    }).min(PASSWORD_MIN_LENGTH, "비밀번호를 최소 4자 이상 작성해주세요. ").regex(PASSWORDREGEX, PASSWORD_REGEX_ERROR)
})

export async function login(prevState:any, formData: FormData){
    const data = {
        loginId : formData.get("loginId"),
        loginPw : formData.get("loginPw")
    };

    const result = await formSchema.safeParseAsync(data);
    if(!result.success){
        return result.error.flatten();
    } else {

        const user = await db.user.findUnique({
            where: {
                userid : result.data.loginId
            },
            select : {
                id: true,
                password:true
            }
        })

        // 암호화 된 비밀번호 매칭
        const ok = await bcrypt.compare(result.data.loginPw, user!.password ?? "xxx");
        // ?? "xxx" === user가 password를 가지지 않는다면 "xxx" 와 비교한다 (추후에 수정 예정)

        console.log(ok); // bcrypt 확인

        if(ok){
            const session = await getSelection();
            session.id = user!.id;
            // user! 의 의미 : user가 반드시 존재한다는 것을 의미함
            console.log("로그인 완료");
            await session.save();
            redirect('/');
        } else {
            return {
                fieldErrors :{
                    loginPw: ["비밀번호가 틀립니다. 다시 입력해주세요."]
                }
            }
            console.log("error");
        }
        
    }
    // return {
    //     errors : ["틀린 비번임", "비번짧셈"]
    // }
}
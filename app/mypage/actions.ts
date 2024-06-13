"use server";

import {z} from "zod";
import { PASSWORDREGEX, PASSWORD_MIN_LENGTH } from "../lib/constants";
import db from "../lib/db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import getSession from "../lib/session";
import { cookies } from "next/headers";



const checkJoinId = (joinId:string) => !joinId.includes('potato');

const checkPasswords = ({joinPw, joinPw2} : {joinPw:string, joinPw2:string}) => joinPw === joinPw2

const checkUniqueUsername = async (userid:string) => {
	const user = await db.user.findUnique({
		where: {
			userid,
		},
		select : {
			id : true,
		},
	})

	return !Boolean(user)
}

const checkUniqueEmail = async (email:string) => {
	const user = await db.user.findUnique({
		where: {
			email,
		},
		select : {
			id : true,
		},
	})

	return !Boolean(user)
}


// username 은 string이어야하고 5~10글자 여야한다.
//const joinNameSchema = z.string().min(5).max(10);

const formSchema = z.object({
	joinId : z.string({
		invalid_type_error : "숫자만 입력하지 말아주세요.",
		required_error : "id를 입력해주세요."
	}).min(1 ,"아이디를 입력해주세요.")
	.max(10, "아이디는 10자를 넘지 말아주세요.")
	.refine(checkJoinId, "no potatoes!!!")
	.refine(checkUniqueUsername,"중복된 id입니다."),//.transform((joinId) => `😍 ${joinId} 😍`),

	joinPw  : z.string()
	.min(PASSWORD_MIN_LENGTH, "비밀번호는 최소 4글자 이상 작성해주세요. ")
	.max(10 ,"비밀번호는 10자를 넘지 말아주세요.")
	.regex(PASSWORDREGEX, "비밀번호는 소문자, 대문자, 숫자, 특수문자를 포함해야합니다."),

	joinPw2 : z.string()
	.min(PASSWORD_MIN_LENGTH, "비밀번호는 최소 4글자 이상 작성해주세요.")
	.max(10,"비밀번호는 10자를 넘지 말아주세요."),

	joinName : z.string()
	.min(1, "이름을 입력해주세요")
	.max(10, "이름은 10자를 넘지 말아주세요"),

	joinMail : z.string()
	.toLowerCase()
	.email("이메일 형식에 맞게 입력해주세요.").refine(checkUniqueEmail , "중복된 이메일입니다."),

	joinTel : z.string()
	.min(11,"휴대폰 번호를 제대로 입력해주세요")
	.max(11,"휴대폰 번호는 10자를 넘지 말아주세요"),

	joinAddress : z.string().min(1, "주소를 입력해주세요")

}).refine(checkPasswords , {
	message : '동일한 비밀번호를 입력해주세요.',
	path : ['joinPw2']
})




export async function createAcccount(prevState:any, formData:FormData){
	const data = {
		joinId:formData.get("joinId"),
		joinPw:formData.get("joinPw"),
		joinPw2:formData.get("joinPw2"),
		joinName:formData.get("joinName"),
		joinMail:formData.get("joinMail"),
		joinTel:formData.get("joinTel"),
		joinAddress:formData.get("joinAddress")
	}
	//console.log(data)
	
	// username 검사
	// joinNameSchema.parse(data.joinName)

	// 전부 검사
	//formSchema.parse(data)

	const result = await formSchema.safeParseAsync(data);
	if(!result.success){
		//console.log(result.error) // 긴에러를 보여준다.
		//console.log(result.error.flatten()) // flatten을 이용하면 error를 짧게 보여준다.

		return result.error.flatten(); // error를 return 해줌.
	} else {

		const hashedPassword = await bcrypt.hash(result.data.joinPw,12);
		console.log(hashedPassword);

		// db저장
		const user = await db.user.create({
			data : {
				userid : result.data.joinId,
				password : hashedPassword,
				username : result.data.joinName,
				email : result.data.joinMail,
				phone : result.data.joinTel,
				address : result.data.joinAddress
			},
			select : {
				id : true
			}
		})

		const session = await getSession();
		session.id = user.id;
		await session.save();
		redirect("/");

		//console.log(joinId);
		// console.log(user);
		// console.log('회원가입 완료!', result.data);
	}
}



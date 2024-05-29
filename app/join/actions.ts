"use server";

import {z} from "zod";

// username 은 string이어야하고 5~10글자 여야한다.
//const joinNameSchema = z.string().min(5).max(10);

const formSchema = z.object({
	joinId : z.string().min(3).max(10),
	joinPw  : z.string().min(3).max(10),
	joinPw2 : z.string().min(3).max(10),
	joinName : z.string().min(3).max(10),
	joinMail : z.string().email(),
	joinTel : z.string().min(3).max(10)
})


export async function createAcccount(prevState:any, formData:FormData){
	const data = {
		joinId:formData.get("joinId"),
		joinPw:formData.get("joinPw"),
		joinPw2:formData.get("joinPw2"),
		joinName:formData.get("joinName"),
		joinMail:formData.get("joinMail"),
		joinTel:formData.get("joinTel")
	}
	//console.log(data)
	
	// username 검사
	// joinNameSchema.parse(data.joinName)

	// 전부 검사
	//formSchema.parse(data)

	const result = formSchema.safeParse(data);
	if(!result.success){
		//console.log(result.error) // 긴에러를 보여준다.
		//console.log(result.error.flatten()) // flatten을 이용하면 error를 짧게 보여준다.

		return result.error.flatten(); // error를 return 해줌.
	} else {
		console.log('회원가입 완료!')
	}
}



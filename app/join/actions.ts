"use server";

import {z} from "zod";

// function checkJoinId(joinId:string){
// 	return !joinId.includes('potato')
// }

// 위의 function 을 화살표 function으로 변경
const checkJoinId = (joinId:string) => !joinId.includes('potato');

const checkPasswords = ({joinPw, joinPw2} : {joinPw:string, joinPw2:string}) => joinPw === joinPw2

// 소문자, 대문자, 숫자, 특수문자가 포함되어 있는지 확인하는 정규식
const passwordRegex = new RegExp(
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);

// username 은 string이어야하고 5~10글자 여야한다.
//const joinNameSchema = z.string().min(5).max(10);

const formSchema = z.object({
	joinId : z.string({
		invalid_type_error : "숫자만 입력하지 말아주세요.",
		required_error : "id를 입력해주세요."
	}).min(3 ,"넘 짧셈").max(10, "넘 길으셈").refine(checkJoinId, "no potatoes!!!").transform((joinId) => `😍 ${joinId} 😍`),
	joinPw  : z.string().min(3).max(10).regex(passwordRegex, "비밀번호는 소문자, 대문자, 숫자, 특수문자를 포함해야합니다."),
	joinPw2 : z.string().min(3).max(10),
	joinName : z.string().min(3).max(10),
	joinMail : z.string().toLowerCase().email("이메일 형식에 맞게 입력해주세요."),
	joinTel : z.string().min(3).max(10)
}).refine( checkPasswords , {
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
		console.log('회원가입 완료!', result.data)
	}
}



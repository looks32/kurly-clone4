export const PASSWORD_MIN_LENGTH = 4

// 소문자, 대문자, 숫자, 특수문자가 포함되어 있는지 확인하는 정규식
export const PASSWORDREGEX = new RegExp(
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);

export const PASSWORD_REGEX_ERROR = "비밀번호에는 소문자, 대문자, 숫자, 특수문자가 포함되어야 합니다."
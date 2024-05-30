"use client";

import { useFormState } from "react-dom";
import { login } from "./actions";

// import { Metadata } from "next";
import styles from "../styles/login.module.css";
import Btn from "../components/btn";
import BtnLink from "../components/btn-link";
import Link from "next/link";

// import { redirect } from "next/navigation";


// export const metadata = {
//   title: "Login",
// };


export default function Login() {

  const [state, dispatch] = useFormState(login, null);

  return (
    <div className={styles.login_area}>
      <h2>로그인</h2>
      <form action={dispatch}>
        <input type="text" name="loginId" placeholder="아이디를 입력해주세요" />
        {state?.fieldErrors.loginId && <div className={styles.errors}>{state?.fieldErrors.loginId}</div>}
        <input type="password" name="loginPw" placeholder="비밀번호를 입력해주세요" />
        {state?.fieldErrors.loginPw && <div className={styles.errors}>{state?.fieldErrors.loginPw}</div>}
        <div className={styles.Link_area}>
          <Link href="#none">아이디 찾기</Link>
          <Link href="#none">비밀번호 찾기</Link>
        </div>
        <div className={styles.btn_area}>
          <Btn tit="로그인" color="basic"/>
          <BtnLink tit="회원가입" color="white" type="button" link="/"/>
        </div>
      </form>
    </div>
  );
}
import { Metadata } from "next";
import styles from "../styles/login.module.css";
import Btn from "../components/btn";
import Link from "next/link";

export const metadata = {
  title: "Login",
};


export default function Login() {
  return (
    <div className={styles.login_area}>
      <h2>로그인</h2>
      <form>
        <input type="text" placeholder="아이디를 입력해주세요" />
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <div className={styles.Link_area}>
          <Link href="#none">아이디 찾기</Link>
          <Link href="#none">비밀번호 찾기</Link>
        </div>
        <div className={styles.btn_area}>
          <Btn tit="로그인" color="basic"/>
          <Btn tit="회원가입" color="white"/>
        </div>
      </form>
    </div>
  );
}
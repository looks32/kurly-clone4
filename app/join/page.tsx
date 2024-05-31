"use client";

import { useFormState } from "react-dom";
import { createAcccount } from "./actions";

import Btn from "../components/btn";
import styles from "../styles/join.module.css";

import { useFormStatus } from 'react-dom';


export default function Join() {

  const [state, dispatch] = useFormState(createAcccount, null);

  return (
    <div className={styles.join_wrap}>
        <h2>회원가입</h2>
        <form action={dispatch}>
            <div className={styles.join_inner}>
                <ul>
                    <li>
                        <label htmlFor="joinId">아이디</label>
                        <div>
                            <input type="text" name="joinId" id="joinId" placeholder="아이디를 입력해주세요"/>
                            {/* <Btn tit="중복확인" color="white" type="button"/> */}
                        </div>
                        {state?.fieldErrors.joinId && <div className={styles.errors}>{state?.fieldErrors.joinId}</div>}
                    </li>
                    <li>
                        <label htmlFor="joinPw">비밀번호</label>
                        <div>
                            <input type="password" name="joinPw" id="joinPw" placeholder="비밀번호를 입력해주세요"/>
                        </div>
                        {state?.fieldErrors.joinPw && <div className={styles.errors}>{state?.fieldErrors.joinPw}</div>}
                    </li>
                    <li>
                        <label htmlFor="joinPw2">비밀번호</label>
                        <div>
                            <input type="password" name="joinPw2" id="joinPw2" placeholder="비밀번호를 한번 더 입력해주세요"/>
                        </div>
                        {state?.fieldErrors.joinPw2 && <div className={styles.errors}>{state?.fieldErrors.joinPw2}</div>}
                    </li>
                    <li>
                        <label htmlFor="joinName">이름</label>
                        <div>
                            <input type="text" name="joinName" id="joinName" placeholder="이름을 입력해 주세요" />
                        </div>
                        {state?.fieldErrors.joinName && <div className={styles.errors}>{state?.fieldErrors.joinName}</div>}
                    </li>
                    <li>
                        <label htmlFor="joinMail">이메일</label>
                        <div>
                            <input type="text" name="joinMail" id="joinMail" placeholder="예: maketkurly@kurly.com" />
                            {/* <Btn tit="중복확인" color="white" type="button"/> */}
                        </div>
                        {state?.fieldErrors.joinMail && <div className={styles.errors}>{state?.fieldErrors.joinMail}</div>}
                    </li>
                    <li>
                        <label htmlFor="joinTel">휴대폰</label>
                        <div>
                            <input type="text" name="joinTel" id="joinTel" placeholder="숫자만 입력해주세요" />
                        </div>
                        {state?.fieldErrors.joinTel && <div className={styles.errors}>{state?.fieldErrors.joinTel}</div>}
                    </li>
                </ul>
            </div>
            <div className={styles.btn_area}>
                <Btn tit="가입하기" color="basic"/>
            </div>  
        </form>      
    </div>
  );
}

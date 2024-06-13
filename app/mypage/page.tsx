"use client";

import { useFormState } from "react-dom";
import { edtiAcccount } from "./actions";
import { deleteAccount } from "./actions-quit";

import Btn from "../components/btn";
import styles from "../styles/join.module.css";
import { useState,useEffect } from "react";
import { getUser } from "../lib/getuser";
import { API_URL } from "../api/movie-api";



export default function Mypage() {

  const [state, dispatch] = useFormState(edtiAcccount, null);

  const [userId , SetUserId] = useState('수정할 수 없습니다.');

  return (
    <div className={styles.join_wrap}>
        <h2>회원 정보 수정</h2>
        <form action={dispatch}>
            <div className={styles.join_inner}>
                <ul>
                    <li>
                        <label htmlFor="joinId">아이디</label>
                        <div>
                            <input type="text" name="joinId" id="joinId" value={userId} onChange={(e)=>{
                                SetUserId(e.target.value)
                            }} placeholder="아이디를 입력해주세요" readOnly/>
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
                        <label htmlFor="joinPw2">비밀번호 확인</label>
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
                    <li>
                        <label htmlFor="joinAddress">주소</label>
                        <div>
                            <input type="text" name="joinAddress" id="joinAddress" placeholder="주소를 입력해주세요" />
                        </div>
                        {state?.fieldErrors.joinAddress && <div className={styles.errors}>{state?.fieldErrors.joinAddress}</div>}
                    </li>
                </ul>
            </div>
            <div className={styles.btn_area}>
                <Btn tit="회원정보수정" color="basic"/> 
            </div>  
        </form> 
        <form action={deleteAccount} className={styles.out_area}>
            <Btn tit="탈퇴하기" color="white"/>
        </form>
    </div>
  );
}

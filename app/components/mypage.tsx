"use client";

import { useFormState } from "react-dom";
import { edtiAcccount } from "../mypage/actions";
import { deleteAccount } from "../mypage/actions-quit";
import Btn from "../components/btn";
import styles from "../styles/join.module.css";
import { useState } from "react";


export default function Mypage({ initialState }) {
  const [state, dispatch] = useFormState(edtiAcccount, initialState);

//   const [userName, setUserName] = useState()

  const [userData, setUserData] = useState({
    userId: state.userid,
    userName: state.username,
    userMail: state.email,
    userTel: state.phone,
    userAddress: state.address
  });

  const handleChange = (e) => {
    setUserData(e.target.value);
  };


  return (
    <div className={styles.join_wrap}>
      <h2>회원 정보 수정</h2>
      <form action={dispatch}>
        <div className={styles.join_inner}>
          <ul>
            <li>
              <label htmlFor="joinId">아이디</label>
              <div>
                <input
                  type="text"
                  name="joinId"
                  id="joinId"
                  value={userData.userId}
                  readOnly
                />
              </div>
              {state?.fieldErrors?.joinId && (
                <div className={styles.errors}>{state.fieldErrors.joinId}</div>
              )}
            </li>
            <li>
              <label htmlFor="joinPw">비밀번호</label>
              <div>
                <input
                  type="password"
                  name="joinPw"
                  id="joinPw"
                  placeholder="비밀번호를 입력해주세요"
                />
              </div>
              {state?.fieldErrors?.joinPw && (
                <div className={styles.errors}>{state.fieldErrors.joinPw}</div>
              )}
            </li>
            <li>
              <label htmlFor="joinPw2">비밀번호 확인</label>
              <div>
                <input
                  type="password"
                  name="joinPw2"
                  id="joinPw2"
                  placeholder="비밀번호를 한번 더 입력해주세요"
                />
              </div>
              {state?.fieldErrors?.joinPw2 && (
                <div className={styles.errors}>{state.fieldErrors.joinPw2}</div>
              )}
            </li>
            <li>
              <label htmlFor="joinName">이름</label>
              <div>
                <input
                  type="text"
                  name="joinName"
                  id="joinName"
                  value={userData.userName}
				  onChange={handleChange}
                />
              </div>
              {state?.fieldErrors?.joinName && (
                <div className={styles.errors}>{state.fieldErrors.joinName}</div>
              )}
            </li>
            <li>
              <label htmlFor="joinMail">이메일</label>
              <div>
                <input
                  type="text"
                  name="joinMail"
                  id="joinMail"
                  value={userData.userMail}
				  onChange={handleChange}
                />
              </div>
              {state?.fieldErrors?.joinMail && (
                <div className={styles.errors}>{state.fieldErrors.joinMail}</div>
              )}
            </li>
            <li>
              <label htmlFor="joinTel">휴대폰</label>
              <div>
                <input
                  type="text"
                  name="joinTel"
                  id="joinTel"
                  value={userData.userTel}
				  onChange={handleChange}
                />
              </div>
              {state?.fieldErrors?.joinTel && (
                <div className={styles.errors}>{state.fieldErrors.joinTel}</div>
              )}
            </li>
            <li>
              <label htmlFor="joinAddress">주소</label>
              <div>
                <input
                  type="text"
                  name="joinAddress"
                  id="joinAddress"
                  value={userData.userAddress}
				  onChange={handleChange}
                />
              </div>
              {state?.fieldErrors?.joinAddress && (
                <div className={styles.errors}>{state.fieldErrors.joinAddress}</div>
              )}
            </li>
          </ul>
        </div>
        <div className={styles.btn_area}>
          <Btn tit="회원정보수정" color="basic" />
        </div>
      </form>
      <form action={deleteAccount} className={styles.out_area}>
        <Btn tit="탈퇴하기" color="white" />
      </form>
    </div>
  );
}
import Btn from "../components/btn";
import styles from "../styles/join.module.css";



export default function Join() {
  return (
    <div className={styles.join_wrap}>
        <h2>회원가입</h2>
        <div className={styles.join_inner}>
            <ul>
                <li>
                    <label htmlFor="joinId">아이디</label>
                    <div>
                        <input type="text" id="joinId" placeholder="아이디를 입력해주세요" />
                        <Btn tit="중복확인" color="white"/>
                    </div>
                </li>
                <li>
                    <label htmlFor="joinPw">비밀번호</label>
                    <div>
                        <input type="password" id="joinPw" placeholder="비밀번호를 입력해주세요"/>
                    </div>
                </li>
                <li>
                    <label htmlFor="joinPw2">비밀번호</label>
                    <div>
                        <input type="password" id="joinPw2" placeholder="비밀번호를 한번 더 입력해주세요"/>
                    </div>
                </li>
                <li>
                    <label htmlFor="joinName">이름</label>
                    <div>
                        <input type="text" id="joinName" placeholder="이름을 입력해 주세요" />
                    </div>
                </li>
                <li>
                    <label htmlFor="joinMail">이메일</label>
                    <div>
                        <input type="text" id="joinMail" placeholder="예: maketkurly@kurly.com" />
                        <Btn tit="중복확인" color="white"/>
                    </div>
                </li>
                <li>
                    <label htmlFor="joinTel">휴대폰</label>
                    <div>
                        <input type="text" id="joinTel" placeholder="숫자만 입력해주세요" />
                    </div>
                </li>
            </ul>
        </div>
        <div className={styles.btn_area}>
          <Btn tit="가입하기" color="basic"/>
        </div>        
    </div>
  );
}

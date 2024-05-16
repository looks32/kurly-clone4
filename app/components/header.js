"use client";   

import Link from "next/link";
import styles from "../styles/header.module.css";
import { usePathname } from "next/navigation";


export default function Header(){
    const path = usePathname();
    return (
        <div className={styles.header_shadow}>
            <div className={styles.header_wrap}>
                <div className={styles.top_info}>
                    <ul>
                        <li>
                            <Link href="#none;" className={styles.font_puple}>회원가입</Link>
                        </li>
                        <li>
                            <Link href="#none;">로그인</Link>
                        </li>
                        <li>
                            <Link href="#none;">고객센터</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.middle}>
                    <h1>
                        <Link href="#none;">
                            <img src="https://res.cloudinary.com/dup3ee8is/image/upload/v1715824440/sgo40imjy5cdx0vz5nl6.svg" alt="컬리마켓 로고" />
                        </Link>
                    </h1>
                    <div className={styles.input_area}>
                        <input type="text" placeholder="검색어를 입력해주세요" className={styles.search_input} />
                        <button className={styles.search_btn}>검색</button>
                    </div>
                    <ul className={styles.icon_area}>
                        <li className={styles.delivery}>
                            <button>배송지</button>
                        </li>
                        <li className={styles.heart}>
                            <Link href="#none;">관심</Link>
                        </li>
                        <li className={styles.cart}>
                            <Link href="#none;">장바구니</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.bottom}>
                    <div>
                        <button className={styles.cate_btn}>카테고리</button>
                    </div>
                    <ul>
                        <li>
                            <Link href="#none;">신상품</Link>
                        </li>
                        <li>
                            <Link href="#none;">베스트</Link>
                        </li>
                        <li>
                            <Link href="#none;">알뜰쇼핑</Link>
                        </li>
                        <li>
                            <Link href="#none;">특가/혜택</Link>
                        </li>
                    </ul>
                    <div className={styles.delivery_info}>
                        <Link href="#none;"><span className={styles.font_puple}>샛별·하루</span> 배송안내</Link>
                    </div>
                </div>
            </div>
        </div>
        // <nav className={styles.nav}>
        //     <ul>
        //         <li>
        //             <Link href="/">home</Link> {path === "/" ? "🔥" : ""}
        //         </li>
        //         <li>
        //             <Link href="/login">login</Link> {path === "/login" ? "🔥" : ""}
        //         </li>
        //     </ul>
        // </nav>
    )
}
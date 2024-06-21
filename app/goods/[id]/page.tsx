"use client";

import { Metadata } from "next";
// import { API_URL } from "../../api/movie-api";
import MovieInfo, { getMovie } from "../../components/movie-info";
import MovieVideos from "../../components/movie-videos";
import { Suspense, useEffect, useRef, useState } from "react";
// import styles from "../../styles/goods.module.css";
import styles from "../../styles/goods-detail.module.css";

import { useRecoilState } from 'recoil';
import { itemsState } from '../../lib/atom';


// export async function generateMetadata({ params: { id } }) {
//     const movie = await getMovie(id);
//     return {
//       title: movie.title,
//     };
//   }

import {
    motion,
    useMotionValueEvent,
    useScroll,
    useAnimation
    } from "framer-motion";

// export const metadata = {
//     title: "Goods",
// };

import goods from "../../json/goods-slider.json";

export default async function Goods({params:{id}}){

    const [items, setItems] = useRecoilState(itemsState);

    // 초기 로드 시 localStorage에서 아이템을 가져오기 위한 useEffect
    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    // id, thumb, time이 변경될 때마다 새로운 아이템을 추가하기 위한 useEffect
    useEffect(() => {
        if (id && goods[id - 1]?.poster) { // 모든 값이 유효한 경우에만 실행
          const newItem = { no: id, poster: goods[id - 1].poster };
    
          setItems(prevItems => {
            // 중복 체크
            const itemExists = prevItems.some(item => item.no === newItem.no);
            if (!itemExists) {
              const newItems = [...prevItems, newItem];
              localStorage.setItem('items', JSON.stringify(newItems));
              return newItems;
            }
            return prevItems;
          });
        }
      }, [id, goods]);

    const navAnimations = [useAnimation(), useAnimation()];

    const { scrollY, scrollYProgress } = useScroll();
        useMotionValueEvent(scrollY, "change", () => {
        //console.log(scrollY.get());
    });

    const section1Ref = useRef(null);
    const section2Ref = useRef(null); 


    useEffect(() => {
        scrollY.onChange(() => {

            //const section1Top = section1Ref.current.offsetTop;
            //const section2Top = section2Ref.current.offsetTop;

            //console.log(section1Top);
            //console.log(section2Top);
        //   if (scrollY.get() > section1Top) {
        //     navAnimations[0].start("scroll");
        //   } else {
        //     navAnimations[0].start("top");
        //   }

        //   if (scrollY.get() > section2Top) {
        //     navAnimations[1].start("scroll");
        //   } else {
        //     navAnimations[1].start("top");
        //   }

        });
      }, [scrollY, navAnimations[0],  navAnimations[1]]);

      const navVariants = {
        top: {
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
        scroll: {
          backgroundColor: "rgba(0, 0, 0, 1)",
        },
      };

    //const movie = await getMovie(id);
    //const videos = await getVideos(id);
    // 위의 방법으로 불러오면 각자 불러오기 때문에 오래걸림 (순차적 로딩);
    // 아래의 방법으로 두개 동시에 불러올 수 있다. (병렬적 fetch), 하지만 둘다 완료 되어야지 둘다 보인다는 단점이 있다.
    //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
    //return <h1>상품명 {id}</h1>
    return (
        <div className={styles.goods_wrap}>
            {/* <h1>{movie.title}</h1>
            <div>{videos.key}</div> */}
            {/*
                아래의 Suspense 를 이용하면 각자 로딩 제어가 가능하고 각자 불러오기 때문에 화면이 비어지는 시간이 적다.
            */}
            {/* <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id}/>
            </Suspense> */}

            <div className={styles.main}>
                <div className={styles.img_area}>
                    <img src={goods[id-1].poster} alt={goods[id-1].text}/>
                </div>
                <div className={styles.detail_area}>
                    <p className={styles.tit}>{goods[id-1].text}</p>
                    <div className={styles.money}>
                        <p>{goods[id-1].per} %</p>
                        <strong>
                            <span>{goods[id-1].price}</span>
                        원</strong>
                    </div>
                    <p className={styles.before}>{goods[id-1].before} 원</p>
                    <p className={styles.origin}>원산지 : 국내산</p>
                    <ul className={styles.detail_list}>
                        <li>
                            <div>배송</div>
                            <div>샛별배송</div>
                        </li>
                        <li>
                            <div>판매자</div>
                            <div>컬리</div>
                        </li>
                        <li>
                            <div>포장타입</div>
                            <div>
                                냉장 (종이포장)
                                <br/>
                                <span>택배배송은 에코 포장이 스티로폼으로 대체됩니다.</span>
                            </div>
                        </li>
                        <li>
                            <div>판매단위</div>
                            <div>1봉</div>
                        </li>
                        <li>
                            <div>중량/용량</div>
                            <div>5입</div>
                        </li>
                    </ul>
                </div>
            </div>

            <nav className={styles.nav}>
                <ul>
                    <motion.li variants={navVariants} animate={navAnimations[0]} initial={"top"} ref={section1Ref}>
                        <a href="#setion1">
                            <span>상품설명</span>
                        </a>
                    </motion.li>
                    <motion.li variants={navVariants} animate={navAnimations[1]} initial={"top"} ref={section2Ref}>
                        <a href="#setion2">
                            <span>후기</span>
                        </a>
                    </motion.li>
                </ul>
            </nav>

            <section id="setion1" className={styles.section}>
                <img src={goods[id-1].detail ? goods[id-1].detail : 'https://res.cloudinary.com/dup3ee8is/image/upload/v1718691526/goods/goods-default.jpg'} alt={goods[id-1].detail ? goods[id-1].text : '이미지가 없습니다.'} />
            </section>

            <section id="setion2" className={styles.section}>
                <h2>상품후기</h2>
                <ul className={styles.review_area}>
                    <li>
                        <div>
                            <span className={`${styles.label} ${styles.best}`}>베스트</span>
                            <span className={`${styles.label} ${styles.members}`}>멤버스</span>
                            <span className={styles.label}>일반</span>
                            <span className={styles.name}>김**</span>
                        </div>
                        <div className={styles.detail_text_area}>
                            <strong>당도선별 성주 참외 1.5kg</strong>
                            <p>말모말모 
                                조선호텔 푸드는 늘 만족도가 높은데 삼계탕은 처음이에요
                                닭은 후라이드 치킨으로만
                                먹는 사람인데 끓이자 마자
                                먹어보고 싶더라구요
                                푹 끓였는데도 물 육수 첨가 필요없이 알맞아서 좋았고
                                깔끔한 닭이 찹쌀 인삼 품고
                                냄새도 너무너무 좋고 손대자마자 살살살 풀어집니다
                                첨에 보여주니 레토르트 싫다고 무관심하던 남편 너무 맛있게 국물까지 싹 비우더라구요
                                뼈바르기가 매우 수월한데 부드럽게 푹 끓여져 있고 예쁜 영계라 뼈가 잘잘합니다
                                아가나 아이들 먹을땐 젓가락으로 톡톡톡 확인 잘 해서 걸러내고 먹이면 정말 정말 좋아할거에요 둥구나무 오미자생채 곁들이면 최고입니다
                                </p>
                            <div className={styles.detail_img_area}>
                                <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                            <span className={styles.date}>2024.05.20</span>
                        </div>
                        <button className={styles.good_btn}>도움되요<span>90</span></button>
                    </li>
                    <li>
                        <div>
                            <span className={`${styles.label} ${styles.best}`}>베스트</span>
                            <span className={`${styles.label} ${styles.members}`}>멤버스</span>
                            <span className={styles.label}>일반</span>
                            <span className={styles.name}>김**</span>
                        </div>
                        <div className={styles.detail_text_area}>
                            <strong>당도선별 성주 참외 1.5kg</strong>
                            <p>말모말모 
                                조선호텔 푸드는 늘 만족도가 높은데 삼계탕은 처음이에요
                                닭은 후라이드 치킨으로만
                                먹는 사람인데 끓이자 마자
                                먹어보고 싶더라구요
                                푹 끓였는데도 물 육수 첨가 필요없이 알맞아서 좋았고
                                깔끔한 닭이 찹쌀 인삼 품고
                                냄새도 너무너무 좋고 손대자마자 살살살 풀어집니다
                                첨에 보여주니 레토르트 싫다고 무관심하던 남편 너무 맛있게 국물까지 싹 비우더라구요
                                뼈바르기가 매우 수월한데 부드럽게 푹 끓여져 있고 예쁜 영계라 뼈가 잘잘합니다
                                아가나 아이들 먹을땐 젓가락으로 톡톡톡 확인 잘 해서 걸러내고 먹이면 정말 정말 좋아할거에요 둥구나무 오미자생채 곁들이면 최고입니다
                                </p>
                            <div className={styles.detail_img_area}>
                                <button>
                                    <img src="" alt="" />
                                </button>
                            </div>
                            <span className={styles.date}>2024.05.20</span>
                        </div>
                        <button className={styles.good_btn}>도움되요<span>90</span></button>
                    </li>
                </ul>
            </section>
        </div>
    )
}


// http://localhost:3000/goods/1342?region=kr|&page=2
//export default function Login(props){}
// console.log(props)
// { params: { id: '1342' }, searchParams: { region: 'kr', page: '2' } }
// 위 처럼 확인 해 볼수 있음
import { Metadata } from "next";
import Link from "next/link";
import Moive from "../components/movie";
import styles from "../styles/movie-list.module.css";
import MainBanner from "../components/main-banner";
import MainTitle from "../components/main-title";
import AdArea from "../components/ad-area";
import SpecialGoods from "../components/special-goods";


import GoodsSlider from "../components/goods-slider";

import goods from "../json/goods-slider.json";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  //await new Promise((resolve) => setTimeout(resolve, 10000)); // 강제 로딩
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  // const movies = await getMovies();
  return (
    <div>
      <MainBanner/>

      <div className="main_inner">

        <MainTitle mainTit="🛒지금 가장 많이 담는 특가" subTit="컬리 추천 특가템 최대 30%"/>

        <GoodsSlider goods={goods} cate="food"/>

        <MainTitle mainTit="🏅뷰컬페에서 가장 인기있어요" subTit="지금 뷰티컬리는 최대 85% 빅세일 중!"/>

        <GoodsSlider goods={goods} cate="beauty"/>

        <AdArea adImg="https://res.cloudinary.com/dup3ee8is/image/upload/v1715836598/ad1.png" url="http://www.naver.com"/>

        <SpecialGoods tit="일일특가" subText="24시간 한정! 최저가 특가⏰" lastText="망설이면 늦어요!" goods={goods} cate="food" id="1" />

        <SpecialGoods tit="🎉뷰컬페 일일특가" subText="24시간 한정 초특가 보장🔥" lastText="망설이면 늦어요!"/>

        <SpecialGoods tit="✨최저가 도전" subText="놓칠 수 없는 기회!" lastText="망설이면 늦어요!"/>

        <AdArea adImg="https://res.cloudinary.com/dup3ee8is/image/upload/v1715836598/ad2.png"  url="http://www.daum.net"/>

      </div>

    </div>
    // <div>sad</div>
    // <ul className={styles.movie_list}>
    //   {movies.map(movie => (
    //     <Moive
    //       key={movie.id}
    //       id={movie.id}
    //       poster_path={movie.poster_path}
    //       title={movie.title}
    //     />
    //   ))}
    // </ul>
  )
}
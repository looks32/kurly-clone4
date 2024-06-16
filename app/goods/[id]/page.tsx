import { Metadata } from "next";
// import { API_URL } from "../../api/movie-api";
import MovieInfo, { getMovie } from "../../components/movie-info";
import MovieVideos from "../../components/movie-videos";
import { Suspense } from "react";
import styles from "../../styles/goods.module.css";

// export async function generateMetadata({ params: { id } }) {
//     const movie = await getMovie(id);
//     return {
//       title: movie.title,
//     };
//   }

export const metadata = {
    title: "Goods",
};

import goods from "../../json/goods-slider.json";

export default async function Goods({params:{id}}){
    //const movie = await getMovie(id);
    //const videos = await getVideos(id);
    // 위의 방법으로 불러오면 각자 불러오기 때문에 오래걸림 (순차적 로딩);
    // 아래의 방법으로 두개 동시에 불러올 수 있다. (병렬적 fetch), 하지만 둘다 완료 되어야지 둘다 보인다는 단점이 있다.
    //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
    //return <h1>상품명 {id}</h1>
    return (
        <>
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

            <div>
                <div>
                    <img src={goods[id-1].poster} alt={goods[id-1].text}/>
                </div>
                <div>
                    <div>{goods[id-1].text}</div>
                    <strong>{goods[id-1].price} 원</strong>
                    <div>{goods[id-1].per} %</div>
                    <div>{goods[id-1].before} 원</div>
                    <div>원산지 : 국내산</div>
                    <ul>
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
                        <li>
                            <div>소비기한(또는 유통기한)정보</div>
                            <div>농산물로 별로의 소비기한은 없으나 가급적 빨리 섭취를 권장드립니다.</div>
                        </li>
                    </ul>
                </div>
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <a href="#setion1">
                            <span>상품설명</span>
                        </a>
                    </li>
                    <li>
                        <a href="#setion2">
                            <span>후기</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <section id="setion1">
                <section>상품설명</section>
            </section>

            <section id="setion2">
                <section>후기</section>
            </section>
        </>
    )
}


// http://localhost:3000/goods/1342?region=kr|&page=2
//export default function Login(props){}
// console.log(props)
// { params: { id: '1342' }, searchParams: { region: 'kr', page: '2' } }
// 위 처럼 확인 해 볼수 있음
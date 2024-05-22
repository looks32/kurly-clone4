import { Metadata } from "next";
// import { API_URL } from "../../api/movie-api";
import MovieInfo, { getMovie } from "../../components/movie-info";
import MovieVideos from "../../components/movie-videos";
import { Suspense } from "react";

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
            <img src={goods[id-1].poster} alt={goods[id-1].text}/>
            <div>{goods[id-1].text}</div>
            <strong>{goods[id-1].price} 원</strong>
        </>
    )
}


// http://localhost:3000/goods/1342?region=kr|&page=2
//export default function Login(props){}
// console.log(props)
// { params: { id: '1342' }, searchParams: { region: 'kr', page: '2' } }
// 위 처럼 확인 해 볼수 있음
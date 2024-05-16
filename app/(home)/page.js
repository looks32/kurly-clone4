import { Metadata } from "next";
import Link from "next/link";
import Moive from "../components/movie";
import styles from "../styles/movie-list.module.css";
import MainBanner from "../components/main-banner";

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
    <MainBanner/>
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
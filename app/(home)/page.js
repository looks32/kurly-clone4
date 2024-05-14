import { Metadata } from "next";
import Link from "next/link";

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
  const movies = await getMovies();
  return <div>{movies.map(movie => <li key={movie.id}><Link href={`/goods/${movie.id}`}>{movie.title}</Link></li>)}</div>;
}
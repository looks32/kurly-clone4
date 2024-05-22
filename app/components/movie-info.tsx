import { API_URL } from "../api/movie-api";


export async function getMovie(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}
  
export default async function MovieInfo({id}) {
    // throw new Error('Error!!!');  에러 확인용
    const movie = await getMovie(id);
    return (
        <div>
            <img
                src={movie.poster_path}
                alt={movie.title}
            />
            <div>
                <h1>{movie.title}</h1>
                <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>
                Homepage &rarr;
                </a>
            </div>
        </div>
    )
}
import { API_URL } from "../(home)/page";


async function getMovie(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}
  
export default async function MovieInfo({id}) {
    // throw new Error('Error!!!');  에러 확인용
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}
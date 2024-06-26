import { API_URL  } from "../api/movie-api";


async function getVideos(id){
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id}){
    const videos = await getVideos(id);
    return (
        <div>
            {videos.map((video) => (
            <iframe
                key={video.id}
                src={`https://youtube.com/embed/${video.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.name}
            />
            ))}
      </div>
    )
}



const API_KEY = import.meta.env.VITE_KEY_API;
const BASE_URL = "https://api.themoviedb.org/3";
console.log(API_KEY.slice(0,20));

function mapMovie(movie){
       return {
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        backdrop: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
        rating: movie.vote_average,
        year: movie.release_date?.slice(0,4),
        overview: movie.overview,
        genreIds: movie.genre_ids,
    }
}

async function fetchMovie(endpoint){
     const url = `${BASE_URL}${endpoint}`

    try{
    const res = await fetch(url, {
        headers:{
            Authorization: `Bearer ${API_KEY}`,
            accept: 'application/json'
        }
    })
    if(!res.ok){
        throw new Error(`HTTP Error: ${res.status}`)
    }

    const result = await res.json();
    return result.results.map(mapMovie)
    
    } catch (error) {
        console.error(error);
        throw error;
    }
    
}

export async function getTrendingMovies(){
   return fetchMovie("/trending/movie/day")
}

export async function getPopularMovies(){
    return fetchMovie("/movie/popular")
}

export async function getTopRatedMovies(){
    return fetchMovie("/movie/top_rated")
}

export async function getUpcomingMovies(){
    return fetchMovie("/movie/upcoming")
}

export async function getGenres(){
    const url=`${BASE_URL}/genre/movie/list`;
    try{
    const res = await fetch(url, {
        headers:{
            Authorization: `Bearer ${API_KEY}`,
            accept: 'application/json'
        }
    })
    if(!res.ok){
        throw new Error(`HTTP Error: ${res.status}`)
    }

    const result = await res.json();
    return result.genres;
    
    } catch (error) {
        console.error(error);
        throw error;
    }
}
export { API_KEY, BASE_URL};
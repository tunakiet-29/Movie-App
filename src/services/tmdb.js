const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";


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
            Authorization: `Bearer ${ACCESS_TOKEN}`,
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
            Authorization: `Bearer ${ACCESS_TOKEN}`,
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

export async function searchMovies(query){
    const url=`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`;

    try{
    const res = await fetch(url, {
        headers:{
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            accept: 'application/json'
        }
    })
    if(!res.ok){
        throw new Error(`HTTP Error: ${res.status}`)
    }

    const result = await res.json();
    return result.results.map(mapMovie);
    
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getMovieTrailer(movieId){
        const url=`${BASE_URL}/movie/${movieId}/videos`;

    try{
    const res = await fetch(url, {
        headers:{
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            accept: 'application/json'
        }
    })
    if(!res.ok){
        throw new Error(`HTTP Error: ${res.status}`)
    }

    const result = await res.json();
    
    const trailer = result.results.find(
        (video) => 
            video.site === "YouTube" &&
            video.type === "Trailer" &&
            video.official
    ) ||  result.results.find(
        (video) => 
            video.site === "YouTube" &&
            video.type === "Trailer" 
    )
    
    return trailer ?? null;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { ACCESS_TOKEN, BASE_URL};
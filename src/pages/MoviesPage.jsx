import { useParams } from "react-router-dom";
import { getTrendingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, getGenres, getMovieTrailer } from "../services/tmdb";
import { useState, useEffect } from "react";
import MovieCard from "../components/movie/MovieCard";
import SkeletonSection from "../components/skeleton/SkeletonSection";
import MovieModal from "../components/movie/MovieModal";
import TrailerModal from "../components/movie/TrailerModal";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import ErrorState from "../components/error/ErrorState";

const categoryApi={
    trending: getTrendingMovies,
    popular: getPopularMovies,
    "top-rated": getTopRatedMovies,
    upcoming: getUpcomingMovies
}

const categoryTitle = {
    trending: "Trending Movies",
    popular: "Popular Movies",
    "top-rated": "Top Rated Movies",
    upcoming: "Upcoming Movies",
}   

function MoviesPage(){
    
    
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [genreMap, setGenreMap] = useState({});
    const { category } = useParams();
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [trailer, setTrailer] = useState(null);
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);

    async function handleWatchTrailer(movie) {
        setTrailer(null);

        try {
            const trailerData = await getMovieTrailer(movie.id);

            if (!trailerData) {
                alert("Trailer is not available");
                return;
            }

            setTrailer(trailerData);
            setIsTrailerOpen(true);
        } catch (error) {
            console.error(error);
        }
    }   

    function handleCloseTrailer() {
        setIsTrailerOpen(false);
        setTrailer(null);
    }

    function handleViewDetails(movie){
        setSelectedMovie(movie);
        setIsModalOpen(true);
    }

    function handleCloseModal(){
        setIsModalOpen(false);
        setSelectedMovie(null);
    }
    async function fetchMovies() {
        setLoading(true);
        setError(null);
        
        const apiFunction = categoryApi[category];

        if (!apiFunction) {
            setError("Category not found");
            setLoading(false);
            return;
        }

        try {
            const [moviesData, genres] = await Promise.all([
                apiFunction(),
                getGenres(),
            ]);

            const genresReduce = genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name;
            return acc;
            }, {});

            setMovies(moviesData);
            setGenreMap(genresReduce);
        } catch (error) {
            setError(error.message || "Something went wrong");
        } finally {
        setLoading(false);
        }
    }
    //Fetch Movies
    useEffect(()=>{
        fetchMovies();
    }, [category])

    //Scroll
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    },[category])

    {/* Loading */}
    if (loading) {
    return (
        <main className="min-h-screen bg-zinc-950 text-white">
            <NavBar />

            <section className="mx-auto max-w-7xl px-6 py-24">
                <SkeletonSection title={categoryTitle[category]} />
            </section>

            <Footer />
        </main>
    );
}
    {/* Error */}
    if (error) {
    return (
        <main className="min-h-screen bg-zinc-950 text-white">
            <NavBar />

            <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6">
                <ErrorState
                    message={error}
                    onRetry={fetchMovies}
                />
            </div>

            <Footer />
        </main>
    );
}
    return(
        <main className="min-h-screen bg-zinc-950 text-white">
             <NavBar />
             <section className="mx-auto max-w-7xl px-6 py-24">
            {/*Category*/}
            <h1 className="text-center text-4xl font-bold">
                {categoryTitle[category] ?? "Movies"}
            </h1>

            {/* MovieSection */}
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                {movies.map((movie)=>(
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        genreMap={genreMap}
                        onViewDetails={handleViewDetails}
                        
                     />
                ))}
            </div>

            </section>

            <Footer />

            {isModalOpen && (
                <MovieModal 
                    movie={selectedMovie}
                    genreMap={genreMap}
                    onClose={handleCloseModal}
                    onWatchTrailer={handleWatchTrailer}

                />
            )}

            {isTrailerOpen && trailer && (
                <TrailerModal
                    trailer={trailer}
                    onClose={handleCloseTrailer}
                />
            )}
        </main>      
    )   
}

export default MoviesPage;
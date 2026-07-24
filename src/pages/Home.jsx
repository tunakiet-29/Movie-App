import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroBanner from "../components/movie/HeroBanner"
import MovieSection from "../components/movie/MovieSection";
import { useState, useEffect } from "react";
import MovieModal from "../components/movie/MovieModal";
import { getTrendingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, getGenres } from "../services/tmdb";
function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trendingMoviesApi, setTrendingMoviesApi] = useState([]);
  const [popularMoviesApi, setPopularMoviesApi] = useState([]);
  const [topRatedMoviesApi, setTopRatedMoviesApi] = useState([]);
  const [upcomingMoviesApi, setUpcomingMoviesApi] = useState([]);
  const [genreMap, setGenreMap ] = useState({});
  useEffect(() => {
    async function fetchMovies(){
      
      try {
        const 
         [
          trending,
          popular,
          topRated,
          upcoming,
          genres
         ]
         = await Promise.all(
          [
            getTrendingMovies(),
            getPopularMovies(),
            getTopRatedMovies(),
            getUpcomingMovies(),
            getGenres(),
          ]
         );
        
        const genresReduce = genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {})

        console.log(genresReduce);
        setTrendingMoviesApi(trending);
        setPopularMoviesApi(popular);
        setTopRatedMoviesApi(topRated);
        setUpcomingMoviesApi(upcoming);
        setGenreMap(genresReduce)

      } catch (error) {
        console.error(error);
      }
    }
    fetchMovies()
  }, [])


  function handleViewDetails(movie){
    setSelectedMovie(movie)
    setIsModalOpen(true)
  }
  function handleCloseModal(){
    setIsModalOpen(false);
  }
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section id="home" className="mx-auto max-w-7xl px-6 py-20">      
        {trendingMoviesApi.length > 0 && (
          <HeroBanner 
          movie={trendingMoviesApi[0]}
          genreMap={genreMap} />
        )}
      </section>

      <section id="movies" className="mx-auto max-w-7xl px-6 py-16 space-y-16">
        <MovieSection 
        title="Trending Movies"
        movies={trendingMoviesApi}
        genreMap={genreMap}
        onViewDetails={handleViewDetails} />

        <MovieSection 
        title="Popular Movies"
        movies={popularMoviesApi}
        onViewDetails={handleViewDetails}
        genreMap={genreMap} />

        <MovieSection 
        title="Top Rated Movies"
        movies={topRatedMoviesApi}
        onViewDetails={handleViewDetails}
        genreMap={genreMap} />

        <MovieSection 
        title="Upcoming Movies"
        movies={upcomingMoviesApi}
        onViewDetails={handleViewDetails}
        genreMap={genreMap} />
      </section>

      {isModalOpen && (
        <MovieModal 
          movie={selectedMovie}
          genreMap={genreMap}
          onClose={handleCloseModal}
        />
      )}
      <Footer />
    </main>
  );
}

export default Home;
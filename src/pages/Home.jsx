import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroBanner from "../components/movie/HeroBanner"
import MovieSection from "../components/movie/MovieSection";
import { useState, useEffect } from "react";
import MovieModal from "../components/movie/MovieModal";
import { getTrendingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, getGenres } from "../services/tmdb";
import SkeletonSection from "../components/skeleton/SkeletonSection";
import SkeletonHero from "../components/skeleton/SkeletonHero";
function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trendingMoviesApi, setTrendingMoviesApi] = useState([]);
  const [popularMoviesApi, setPopularMoviesApi] = useState([]);
  const [topRatedMoviesApi, setTopRatedMoviesApi] = useState([]);
  const [upcomingMoviesApi, setUpcomingMoviesApi] = useState([]);
  const [genreMap, setGenreMap ] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchMovies(){
      setIsLoading(true);
      setError(null);
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
  
        setTrendingMoviesApi(trending);
        setPopularMoviesApi(popular);
        setTopRatedMoviesApi(topRated);
        setUpcomingMoviesApi(upcoming);
        setGenreMap(genresReduce);
  
      } 
      catch (error) {
        setError(error.message);
        
      }
      finally{
        setIsLoading(false);
      }
    }
  useEffect(() => {
    
    fetchMovies()
  }, [])


  function handleViewDetails(movie){
    setSelectedMovie(movie);
    setIsModalOpen(true);
  }
  function handleCloseModal(){
    setIsModalOpen(false);
  }
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section id="home" className="mx-auto max-w-7xl px-6 py-20">      
        { isLoading ?(
          <SkeletonHero/>
        ) : (
           trendingMoviesApi.length > 0 && (
            <HeroBanner 
              movie={trendingMoviesApi[0]}
              genreMap={genreMap} 
            />
           )
        )
       }
      </section>

      <section id="movies" className="mx-auto max-w-7xl px-6 py-16 space-y-16">
        {
          isLoading ? (
            <SkeletonSection title="Trending Movies"/>
          ) : (
            <MovieSection
              title="Trending Movies"
              movies={trendingMoviesApi}
              genreMap={genreMap}
              onViewDetails={handleViewDetails}

            />
          )
        }

       {
          isLoading ? (
            <SkeletonSection title="Popular Movies"/>
          ) : (
            <MovieSection
              title="Popular Movies"
              movies={popularMoviesApi}
              genreMap={genreMap}
              onViewDetails={handleViewDetails}

            />
          )
        }

        {
          isLoading ? (
            <SkeletonSection title="Top Rated Movies"/>
          ) : (
            <MovieSection
              title="Top Rated Movies"
              movies={topRatedMoviesApi}
              genreMap={genreMap}
              onViewDetails={handleViewDetails}

            />
          )
        }

        {
          isLoading ? (
            <SkeletonSection title="Upcoming Movies"/>
          ) : (
            <MovieSection
              title="Upcoming Movies"
              movies={upcomingMoviesApi}
              genreMap={genreMap}
              onViewDetails={handleViewDetails}

            />
          )
        }

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
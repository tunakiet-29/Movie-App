import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import HeroBanner from "../components/movie/HeroBanner"
import MovieSection from "../components/movie/MovieSection";
import { useState, useEffect } from "react";
import MovieModal from "../components/movie/MovieModal";
import { getTrendingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, getGenres, searchMovies, getMovieTrailer } from "../services/tmdb";
import SkeletonSection from "../components/skeleton/SkeletonSection";
import SkeletonHero from "../components/skeleton/SkeletonHero";
import ErrorState from "../components/error/ErrorState";
import SearchBar from "../components/search/SearchBar";
import EmptyState from "../components/empty/EmptyState";
import TrailerModal from "../components/movie/TrailerModal";

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
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const isSearchingMode = debouncedQuery.trim() !== "";
  const movieSection = [
  {
    title: "Trending Movies",
    category: "trending",
    movies: trendingMoviesApi,
  },
  {
    title: "Popular Movies",
    category: "popular",
    movies: popularMoviesApi,
  },
  {
    title: "Top Rated Movies",
    category: "top-rated",
    movies: topRatedMoviesApi,
  },
  {
    title: "Upcoming Movies",
    category: "upcoming",
    movies: upcomingMoviesApi,
  },
];
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

    async function fetchSearchMovies(searchQuery){
      if(!searchQuery.trim()){
        setSearchResults([]);
        setSearchError(null);
        return;
      }

      setIsSearching(true);
      setSearchError(null);

      try {
        const movies = await searchMovies(searchQuery);
        setSearchResults(movies);
      } catch (error) {
        setSearchError(error.message);
      }
      finally{
        setIsSearching(false);
      }
    }

  useEffect(() => {
    
    fetchMovies()
  }, [])

 /* ---------------- Debounce ---------------- */
  useEffect(() => {
    const timer = setTimeout(()=>{
      setDebouncedQuery(query)
    }, 500)

    return ()=> {
      clearTimeout(timer)
    }
  }, [query])

  useEffect(() => {
    fetchSearchMovies(debouncedQuery);
  }, [debouncedQuery]);

 /* ---------------- Trailer ---------------- */
  async function handleWatchTrailer(movie){
    setTrailer(null);
    try {
      const trailerData = await getMovieTrailer(movie.id)

      if(!trailerData){
        alert("Trailer is not available");
        return;
      }

      setTrailer(trailerData);
      setIsTrailerOpen(true);
    } catch (error) {
      console.error(error)
    }
  }

  function handleCloseTrailer(){
    setIsTrailerOpen(false);
    setTrailer(null);
  }
  function handleViewDetails(movie){
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };
  function handleCloseModal(){
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  function handleQueryChange(event){
    setQuery(event.target.value);
  };

  if(error){
        return(
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
        )
       }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <NavBar />

      <section id="home" className="mx-auto max-w-7xl px-6 py-20">      
        {!isSearchingMode && (
          isLoading ? (
          <SkeletonHero/>
              ) : (
                trendingMoviesApi.length > 0 && (
                  <HeroBanner 
                  movie={trendingMoviesApi[0]}
                  genreMap={genreMap} 
                  onWatchTrailer={handleWatchTrailer}
                  onViewDetails={handleViewDetails}
                  />
                  )
              )
          )
       }

      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SearchBar
          query={query}
          onChange={handleQueryChange}
        />
      </section>

      <section id="movies" className="mx-auto max-w-7xl px-6 py-16 space-y-16">
        {isSearchingMode ? (
          isSearching ? (
            <SkeletonSection title="Searching Movies..."/>
          ) : searchError ? (
            <ErrorState
              message={searchError}
              onRetry={() => fetchSearchMovies(debouncedQuery)}
             />
          ) : searchResults.length === 0 ? (
            <EmptyState query={debouncedQuery}/>
          ) : (
          <MovieSection
            title={`Search Results (${searchResults.length})`}
            movies={searchResults}
            genreMap={genreMap}
            onViewDetails={handleViewDetails}
           
          />
          )
        ) : (movieSection.map((section) => {
          if(isLoading) {
          return (
            <SkeletonSection
              key={section.title}
              title={section.title}
            />
            );
        }
          return (
          <MovieSection
            key={section.title}
            title={section.title}
            movies={section.movies}
            category={section.category}
            onViewDetails={handleViewDetails}
            genreMap={genreMap}

          />
        )
      }))} 
        
        
      </section>

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
      <Footer />
    </main>
  );
}

export default Home;
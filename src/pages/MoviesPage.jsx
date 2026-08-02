import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

import MovieCard from "../components/movie/MovieCard";
import MovieModal from "../components/movie/MovieModal";
import TrailerModal from "../components/movie/TrailerModal";

import SkeletonSection from "../components/skeleton/SkeletonSection";
import ErrorState from "../components/error/ErrorState";
import BackButton from "../components/common/BackButton";
import {
  getGenres,
  getMovieTrailer,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../services/tmdb";

const categoryApi = {
  trending: getTrendingMovies,
  popular: getPopularMovies,
  "top-rated": getTopRatedMovies,
  upcoming: getUpcomingMovies,
};

const categoryTitle = {
  trending: "Trending Movies",
  popular: "Popular Movies",
  "top-rated": "Top Rated Movies",
  upcoming: "Upcoming Movies",
};

function MoviesPage() {
  const { category } = useParams();

  const [movies, setMovies] = useState([]);
  const [genreMap, setGenreMap] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  function handleViewDetails(movie) {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
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

  // Fetch movies
  useEffect(() => {
    fetchMovies();
  }, [category]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [category]);

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-100 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
        <NavBar />

        <section className="mx-auto max-w-7xl px-6 py-24">
          <BackButton />
          <SkeletonSection title={categoryTitle[category]} />
        </section>

        <Footer />
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-zinc-100 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
        <NavBar />

        <section className="mx-auto max-w-7xl px-6 py-24">
          <BackButton />

          <div className="flex min-h-[60vh] items-center justify-center">
            <ErrorState
                message={error}
                onRetry={fetchMovies}
            />
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-100 text-zinc-900 transition-colors duaration-300 dark:bg-zinc-950 dark:text-white">
      <NavBar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <BackButton />
        {/* Category */}
        <h1 className="text-center text-4xl font-bold">
          {categoryTitle[category] ?? "Movies"}
        </h1>

        {/* Movie List */}
        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-4

            md:grid-cols-3
            md:gap-6

            lg:grid-cols-4
            lg:gap-8
          "
        >
          {movies.map((movie) => (
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
  );
}

export default MoviesPage;
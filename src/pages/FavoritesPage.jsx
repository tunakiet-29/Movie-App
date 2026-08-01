import { useEffect, useState } from "react";

import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";
import MovieCard from "../components/movie/MovieCard";
import MovieModal from "../components/movie/MovieModal";
import TrailerModal from "../components/movie/TrailerModal";

import { getFavorites } from "../utils/favorites";
import { getGenres, getMovieTrailer } from "../services/tmdb";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [genreMap, setGenreMap] = useState({});

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [trailer, setTrailer] = useState(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genres = await getGenres();

        const genresReduce = genres.reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {});

        setGenreMap(genresReduce);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
    setFavorites(getFavorites());
  }, []);

  function handleViewDetails(movie) {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setSelectedMovie(null);
    setIsModalOpen(false);

    setFavorites(getFavorites());
  }

  async function handleWatchTrailer(movie) {
    setTrailer(null);

    try {
      const trailerData = await getMovieTrailer(movie.id);

      if (!trailerData) {
        alert("Trailer is not available.");
        return;
      }

      setTrailer(trailerData);
      setIsTrailerOpen(true);
    } catch (error) {
      console.error(error);
    }
  }

  function handleCloseTrailer() {
    setTrailer(null);
    setIsTrailerOpen(false);
  }

  return (
    <main className="min-h-screen bg-zinc-100 text-zinc-900 transition-colors duaration-300 dark:bg-zinc-950 dark:text-white">
      <NavBar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-center text-4xl font-bold">
          Favorite Movies
        </h1>

        {favorites.length === 0 ? (
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold">
              No favorite movies yet.
            </h2>

            <p className="mt-3 text-zinc-400">
              Add your favorite movies by clicking the heart icon.
            </p>
          </div>
        ) : (
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
            {favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                genreMap={genreMap}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
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

export default FavoritesPage;
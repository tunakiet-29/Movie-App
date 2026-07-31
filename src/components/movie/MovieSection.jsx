import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieSection({
  title,
  movies,
  onViewDetails,
  genreMap,
  category,
}) {
  return (
    <section className="py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">
          {title}
        </h2>

        <Link
          to={`/movies/${category}`}
          className="
            text-sm
            font-medium
            text-red-500
            transition-colors
            hover:text-red-400
            sm:text-base
          "
        >
          View All
        </Link>
      </div>

      {/* Movie List */}
      <div
        className="
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
            onViewDetails={onViewDetails}
            genreMap={genreMap}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;
import { Heart, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { formatGenres } from "../../utils/genres";
import { isFavorite, toggleFavorite } from "../../utils/favorites";
function MovieCard({ movie, onViewDetails, genreMap }) {
  const [isFavoriteMovie, setIsFavoriteMovie] = useState(false);

  useEffect(()=>{
    setIsFavoriteMovie(isFavorite(movie.id));
  }, [movie.id])
  const genres = formatGenres(movie.genreIds, genreMap);

  return (
    <div
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-xl
        bg-white
        shadow-lg
        transition-all
        duration-300
        sm:hover:-translate-y-2
        sm:hover:scale-[1.03]
        sm:hover:shadow-2xl
        sm:hover:shadow-red-500/20
        dark:bg-zinc-900
      "
    >
      {/* Poster */}
      <div className="relative overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          loading="lazy"
          className="
            aspect-2/3
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/50
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {/* View Details */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            translate-y-3
            opacity-0
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <button
            type="button"
            onClick={(e) => {
                e.stopPropagation();
                onViewDetails(movie);
            }}
            className="
              cursor-pointer
              rounded-full
              bg-red-600
              px-5
              py-2
              font-medium
              text-white
              transition-colors
              duration-300
              hover:bg-red-700
            "
          >
            View Details
          </button>
        </div>

        {/* Favorite */}
        <button
          type="button"
          aria-label={
            isFavoriteMovie
              ? "Remove from favorites"
              : "Add to favorites"
          }
          onClick={(e)=>{
            e.stopPropagation();

            const state= toggleFavorite(movie);
            setIsFavoriteMovie(state);
          }}
          className="
            absolute
            top-2
            right-2
            p-1.5
            sm:top-3
            sm:right-3
            sm:p-2
            rounded-full
            bg-black/50
            transition-all
            duration-300
            hover:scale-110
            hover:bg-red-600
          "
        >
          <Heart
            size={16}
            fill={isFavoriteMovie ? "currentColor" : "none"}
            className={`
                transition-colors duration-300
                ${
              isFavoriteMovie
                ? "text-red-500"
                : "text-white group-hover:text-red-300"
            }`}
            
          />
        </button>
      </div>

      {/* Info */}
      <div className="space-y-1.5 p-2.5 sm:space-y-2 sm:p-4">
        <div className="flex justify-between text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
          <span className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4"
            />
            {movie.rating.toFixed(1)}
          </span>

          <span>{movie.year}</span>
        </div>

        <h3 className="line-clamp-2 min-h-10 text-sm font-semibold text-zinc-900 sm:line-clamp-1 sm:min-h-0 sm:text-lg dark:text-white">
          {movie.title}
        </h3>

        <p className="line-clamp-1 text-[11px] text-zinc-500 sm:text-sm dark:text-zinc-400">
          {genres}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
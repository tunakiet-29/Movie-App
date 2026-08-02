import { Play, Star, X } from "lucide-react";
import { Fragment } from "react";
import { formatGenres } from "../../utils/genres";

function MovieModal({
  movie,
  onClose,
  genreMap,
  onWatchTrailer,
}) {
  const movieInfo = [
    {
      icon: (
        <Star
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />
      ),
      value: movie.rating.toFixed(1),
    },
    {
      value: movie.year,
    },
  ];

  const genres = formatGenres(movie.genreIds, genreMap);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto py-8">
      {/* Overlay */}
      <div
        className="absolute inset-0 z-40 bg-black/70"
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative z-50 mx-4 w-full max-w-sm md:max-w-5xl rounded-2xl bg-white p-5 shadow-2xl transition-colors duration-300 dark:bg-zinc-900 sm:p-6 md:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Modal"
          className="
            absolute
            top-3
            right-3
            cursor-pointer
            rounded-full
            p-2
            text-zinc-600
            transition-all
            duration-300
            hover:bg-zinc-200
            hover:text-zinc-900
            dark:text-zinc-300
            dark:hover:bg-zinc-800
            dark:hover:text-white
            md:top-6
            md:right-6
          "
        >
          <X size={20} />
        </button>

        {/* Grid */}
        <div className="grid grid-cols-[110px_1fr] gap-4 md:grid-cols-2 md:gap-8">
          {/* Poster */}
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-41.25 w-27.5 rounded-xl object-cover md:h-auto md:w-auto md:max-h-[70vh]"
          />

          {/* Info */}
          <div className="flex flex-col gap-3 md:gap-5">
            {/* Title */}
            <h1 className="text-lg font-bold text-zinc-900 md:text-3xl dark:text-white">
              {movie.title}
            </h1>

            {/* Rating - Year */}
            <div className="flex items-center gap-2 text-sm text-zinc-600 md:text-lg dark:text-zinc-300">
              {movieInfo.map((item, index) => (
                <Fragment key={index}>
                  {index > 0 && <span>•</span>}

                  <span className="flex items-center gap-1">
                    {item.icon}
                    {item.value}
                  </span>
                </Fragment>
              ))}
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white md:text-lg">
                Overview
              </h2>

              <p className="max-h-24 md:max-h-40 max-w-lg overflow-y-auto text-base text-zinc-600 dark:text-zinc-300 md:text-lg">
                {movie.overview}
              </p>
            </div>

            {/* Genre */}
            <div>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white md:text-lg">
                Genre
              </h2>

              <p className="text-base text-zinc-600 dark:text-zinc-300 md:text-lg">
                {genres}
              </p>
            </div>

            {/* Trailer */}
            <button
              type="button"
              onClick={() => onWatchTrailer?.(movie)}
              className="
                mt-auto
                flex
                w-fit
                cursor-pointer
                items-center
                gap-2
                rounded-full
                border
                border-red-400
                bg-red-600
                px-4
                py-2.5
                md:px-6
                md:py-3
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-red-700
              "
            >
              <Play
                size={18}
                className="fill-white"
              />
              <span>Watch Trailer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
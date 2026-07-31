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
      <div className="relative z-50 mx-4 w-full max-w-5xl rounded-2xl bg-zinc-900 p-5 shadow-2xl sm:p-6 md:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Modal"
          className="
            absolute
            top-6
            right-6
            cursor-pointer
            rounded-full
            p-2
            text-zinc-300
            transition-all
            duration-300
            hover:bg-zinc-800
            hover:text-white
          "
        >
          <X size={20} />
        </button>

<<<<<<< HEAD
        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Poster */}
          <img
            src={movie.poster}
            alt={movie.title}
            className="max-h-[70vh] w-full rounded-xl object-cover"
          />
=======
        {/*Modal*/}
        <div className="relative z-50 mx-4 w-full max-w-sm md:max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-zinc-900 p-4 sm:p-6 md:p-8 shadow-2xl">
>>>>>>> update/readme

          {/* Info */}
          <div className="flex flex-col gap-5">
            {/* Title */}
            <h1 className="text-2xl font-bold md:text-3xl">
              {movie.title}
            </h1>

            {/* Rating - Year */}
            <div className="flex items-center gap-2 text-base text-zinc-300 md:text-lg">
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
              <h2 className="text-base font-semibold md:text-lg">
                Overview
              </h2>

              <p className="max-h-40 max-w-lg overflow-y-auto text-base text-zinc-300 md:text-lg">
                {movie.overview}
              </p>
            </div>

            {/* Genre */}
            <div>
              <h2 className="text-base font-semibold md:text-lg">
                Genre
              </h2>

              <p className="text-base text-zinc-300 md:text-lg">
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
                px-6
                py-3
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
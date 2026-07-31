import { Play, X, Star } from "lucide-react";
import { Fragment } from "react";
import { formatGenres } from "../../utils/genres";

function MovieModal({ movie, onClose, genreMap, onWatchTrailer }){
    const movieInfo = [
        {
            icon: <Star size={16} className="fill-yellow-400 text-yellow-400" />,
            value: movie.rating.toFixed(1)
        },

        {
            value: movie.year
        },

    ]

    const genres = formatGenres(movie.genreIds, genreMap);
    return(
    <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center py-8">
        {/*Overlay*/}
        <div className="absolute inset-0 bg-black/70 z-40" aria-hidden="true"></div>

        {/*Modal*/}
        <div className="relative z-50 mx-4 w-full max-w-sm md:max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-zinc-900 p-4 sm:p-6 md:p-8 shadow-2xl">

            {/* Close Modal Button */}
            <button
                type="button"
                onClick={onClose}
                aria-label="Close Modal"
                className="
                    absolute
                    top-3
                    right-3
                    md:top-6
                    md:right-6
                    z-50
                    flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    rounded-full
                  bg-black/60
                    backdrop-blur-md
                  text-zinc-300
                    transition-all
                    duration-300
                  hover:bg-zinc-800
                  hover:text-white
                    "
                >
                    <X size={20} />
            </button>
            
            {/*Grid*/}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 overflow-y-auto max-h-[calc(90vh-2rem)] pr-1">

            {/* Poster */}
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-72 sm:h-96 max-h-[70vh] rounded-xl object-cover"
            />

            {/* Info */}
            <div className="flex flex-col gap-5">
                {/*Title*/}
                <h1
                    className="font-bold text-xl md:text-3xl"
                >{movie.title}</h1>

                {/*Rating -  Year - Genre*/}
                <div className="flex items-center gap-2 text-sm text-zinc-300 md:text-lg"> 
                    {movieInfo.map((item, index) => (
                        <Fragment
                            key={index}
                        >
                            {index > 0 && <span>•</span>}
                            <span className="flex items-center gap-1">
                                {item.icon}
                                {item.value}
                            </span>
                        </Fragment>
                    ))}
                </div>

                {/*Overview*/}
                <div>
                    <h2 className="font-semibold text-base md:text-lg">Overview</h2>
                    <p className="text-sm text-zinc-300 max-w-lg max-h-32 md:max-h-40 overflow-y-auto md:text-lg pr-2">{movie.overview}</p>
                </div>

                {/*Genre*/}
                <div>
                    <h2 className="text-base font-semibold md:text-lg">Genre</h2>
                    <p className="text-sm text-zinc-300 md:text-lg">{genres}</p>
                </div>
                {/*Watch Trailer Button*/}
                <button
                    type="button"
                    className="
                    mt-auto
                    flex
                    items-center
                    gap-2
                    w-full
                    sm:w-fit
                    justify-center
                    rounded-full
                  bg-red-600
                    px-5
                    py-2.5
                    font-medium
                  text-white
                    transition
                  hover:bg-red-700
                    sm:hover:scale-105
                "
                    onClick={()=>onWatchTrailer?.(movie)}
                >
                    <Play size={18} className="fill-white" />
                    <span>Watch Trailer</span>
                </button>
            </div>    
        </div> 
    </div>
           
    </div>
    )
}
export default MovieModal;
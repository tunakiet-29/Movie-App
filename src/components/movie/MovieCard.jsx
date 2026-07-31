import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { formatGenres } from "../../utils/genres";

function MovieCard({ movie, onViewDetails, genreMap}){
    const [isFavorite, setIsFavorite] = useState(false);
    const genres = formatGenres(movie.genreIds, genreMap)
    return(
        <div className="group cursor-pointer rounded-xl overflow-hidden bg-zinc-900 shadow-lg transition-all duration-300 hover:shadow-2xl sm:hover:shadow-red-500/20 sm:hover:-translate-y-2 sm:hover:scale-[1.03]">
            {/* Poster */}
            <div className="relative overflow-hidden">
                 <img 
                    src= {movie.poster}
                    alt= {movie.title}
                    className="w-full aspect-2/3 object-cover transition-transform duration-500 sm:group-hover:scale-110"
                    loading="lazy" 
                />
            
            {/* Overlay */}
                <div
                    className="
                    absolute inset-0
                    hidden sm:block
                  bg-black/50
                    opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                    "
                ></div>

            {/* View Details */}
                <div
                    className="absolute inset-0 hidden sm:flex items-center justify-center opacity-0 transition-all duration-300 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <button
                        type="button"
                        onClick={()=> onViewDetails(movie)}
                        className="cursor-pointer rounded-full bg-red-600 px-5 py-2 font-medium text-white transition-colors duration-300 hover:bg-red-700"
                    >View Details</button>
                </div>           
            
            {/* Favorite */}
            <button
                type="button"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                onClick={()=>setIsFavorite((prev) => !prev)}
                className="absolute top-3 right-3 rounded-full bg-black/50 p-1.5 transition-all duration-300 hover:bg-red-600 hover:scale-110 sm:p-2"
            >
                <Heart
                    size={16}
                    className={
                            `${
                                isFavorite
                                    ? "text-red-500"
                                    : "text-white group-hover:text-red-300"
                                } w-4 h-4 sm:w-4.5 sm:h-4.5`
                            }
                    fill={isFavorite ? "currentColor" : "none"}
                />
            </button>
        </div>
               
            {/* Info */}
            <div className="p-2.5 space-y-2 sm:p-4">
                <div className="flex justify-between text-xs text-zinc-300 sm:text-sm">
                    <span className="flex items-center gap-1"><Star size={16} className="fill-yellow-400 text-yellow-400"/>{movie.rating.toFixed(1)}</span>
                    <span>{movie.year}</span>
                </div>

                <h3 className="text-sm sm:text-lg font-semibold line-clamp-2 min-h-10.5">{movie.title}</h3>
                
                <p className="text-[11px] sm:text-sm text-zinc-400 line-clamp-1">{genres}</p>

                <button
                    type="button"
                    onClick={()=> onViewDetails(movie)}
                    className="mt-3 block w-full rounded-lg bg-red-600 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 sm:hidden"
                >
                    View Details
                </button>
            </div>
            
        </div>
    )
}

export default MovieCard;
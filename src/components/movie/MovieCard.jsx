import { Heart } from "lucide-react";
import { useState } from "react";

function MovieCard({ movie, onViewDetails }){
    const [isFavorite, setIsFavorite] = useState(false);

    return(
        <div className="group cursor-pointer rounded-xl overflow-hidden bg-zinc-900 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 hover:scale-[1.03]">
            {/* Poster */}
            <div className="relative overflow-hidden">
                 <img 
                    src= {movie.poster}
                    alt= {movie.title}
                    className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy" 
                />
            
            {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

            {/* View Details */}
                <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100"
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
                className="absolute top-3 right-3 rounded-full bg-black/50 p-2 transition-all duration-300 hover:bg-red-600 hover:scale-110"
            >
                <Heart size={18} 
                    className={isFavorite ? "text-red-500" : "text-white group-hover:text-red-300"}
                    fill={isFavorite ? "currentColor" : "none"}
                />
            </button>
        </div>
               
            {/* Info */}
            <div className="p-3 space-y-2 sm:p-4">
                <div className="flex justify-between text-sm text-zinc-300">
                    <span>⭐ {movie.rating}</span>
                    <span>{movie.year}</span>
                </div>

                <h3 className="text-base font-semibold sm:text-lg line-clamp-1">{movie.title}</h3>
                
                <p className="text-xs text-zinc-400 sm:text-sm">{movie.genre}</p>

            </div>
            
        </div>
    )
}

export default MovieCard;
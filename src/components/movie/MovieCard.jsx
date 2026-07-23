function MovieCard({ movie }){
    return(
        <div className="cursor-pointer rounded-xl overflow-hidden bg-zinc-900 shadow-lg hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
            {/* Poster */}
                <img 
                src= {movie.poster}
                alt= {movie.title}
                className="w-full aspect-[2/3] object-cover"
                loading="lazy" 
                />

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
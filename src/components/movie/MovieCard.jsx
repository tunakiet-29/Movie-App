function MovieCard(){
    return(
        <div className="rounded-xl overflow-hidden bg-zinc-900 shadow-lg hover:scale-[1.03] transition-all duration-300 hover:shadow-2xl">
            {/* Poster */}
                <img 
                className="w-full aspect-[2/3] object-cover"
                />

            {/* Info */}
            <div className="p-4 space-y-2">
                <div className="flex justify-between text-sm text-zinc-300">
                    <span>⭐ 8.8</span>
                    <span>2023</span>
                </div>

                <h3 className="text-lg font-semibold">Title</h3>
                
                <p className="text-sm text-zinc-400">Genre</p>

            </div>
            
        </div>
    )
}

export default MovieCard;
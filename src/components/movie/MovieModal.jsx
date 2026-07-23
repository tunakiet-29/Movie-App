import { Play, X } from "lucide-react";
import { Fragment } from "react";

function MovieModal({ movie }){
    const movieInfo = [`⭐ ${movie.rating}`, movie.year, movie.genre]
    return(
    <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center">
        {/*Overlay*/}
        <div className="absolute inset-0 bg-black/70 z-40" aria-hidden="true"></div>

        {/*Modal*/}
        <div className="relative mx-4 max-w-5xl w-full rounded-2xl bg-zinc-900 p-5 shadow-2xl sm:p-6 md:p-8">

            {/* Close Modal Button */}
            <button
                type="button"
                aria-label="Close Modal"
                className="cursor-pointer absolute top-6 right-6 rounded-full p-2 text-zinc-300 transition-all duration-300 hover:bg-zinc-800 hover:text-white"
            >
                <X 
                size={20}
                />
            </button>

        
        
            {/*Grid*/}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {/* Poster */}
            <img
                src={movie.poster}
                alt={movie.title}
                className="w-full max-h-[70vh] rounded-xl object-cover"
            />

            {/* Info */}
            <div className="flex flex-col gap-5">
                {/*Title*/}
                <h1
                    className="font-bold text-2xl md:text-3xl"
                >{movie.title}</h1>

                {/*Rating -  Year - Genre*/}
                <div className="flex items-center gap-2 text-base text-zinc-300 md:text-lg"> 
                    {movieInfo.map((item, index) => (
                        <Fragment
                            key={item}
                        >
                            {index > 0 && <span>•</span>}
                            <span>{item}</span>
                        </Fragment>
                    ))}
                </div>

                {/*Overview*/}
                <div>
                    <h2 className="font-semibold text-base md:text-lg">Overview</h2>
                    <p className="text-base text-zinc-300 max-w-lg max-h-40 overflow-y-auto md:text-lg">{movie.overview}</p>
                </div>

                {/*Genre*/}
                <div>
                    <h2 className="text-base font-semibold md:text-lg">Genre</h2>
                    <p className="text-base text-zinc-300 md:text-lg">{movie.genre}</p>
                </div>
                {/*Watch Trailer Button*/}
                <button
                    type="button"
                    className="flex w-fit items-center gap-2 cursor-pointer rounded-full border border-red-400 bg-red-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-red-700 hover:scale-105"
                >
                    <Play size={18} />
                    <span>Watch Trailer</span>
                </button>
            </div>    
        </div> 
    </div>
           
    </div>
    )
}
export default MovieModal;
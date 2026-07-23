import {Fragment} from "react";


function HeroBanner({ movie }){
    const movieInfo = [`⭐ ${movie.rating}`, movie.year, movie.genre]
    return(
        <section className="relative h-[70vh] max-w-7xl mx-auto w-full flex items-center px-4 rounded-2xl overflow-hidden sm:h-[75vh] md:h-[80vh] sm:px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
            src={movie.backdrop}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="eager"
            />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

        {/* Content */}
          <div className="relative z-10 max-w-xl flex flex-col gap-4 sm:gap-6">
            {/* Movie Info */}
            <div className="flex flex-wrap items-center text-xs gap-2 text-zinc-300 sm:text-sm">
                {movieInfo.map((item, index)=>(
                <Fragment key={index}>
                    {index > 0 && <span>•</span>}
                    <span>{item}</span>
                </Fragment>
                ))}
            </div>

            {/* Title  */}
            <h1 className="font-bold text-3xl tracking-wide leading-tight sm:text-4xl md:text-5xl">{movie.title}</h1>

            {/* Overview  */}
            <p className="text-sm text-zinc-300 max-w-lg leading-relaxed sm:text-base md:text-lg">{movie.overview}</p>

            {/* Buttons  */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button 
                className="w-full cursor-pointer rounded-full border border-red-400 bg-red-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-red-700 sm:w-auto"
                >Watch Trailer</button>

                <button 
                className="w-full cursor-pointer rounded-full border border-zinc-500 px-6 py-3 font-medium text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-zinc-300 hover:bg-zinc-800 sm:w-auto"
                type="button"
                >More Info</button>
            </div>
           </div>
        </section>
    )
}

export default HeroBanner;
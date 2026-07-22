import {Fragment} from "react";
import heroBg from "../../assets/images/hero-banner.jpg"
const movieInfo = ["⭐ 8.8", "2023", "Action"]

function HeroBanner(){
    return(
        <section className="relative h-[70vh] max-w-7xl mx-auto w-full flex items-center px-4 rounded-2xl overflow-hidden sm:h-[75vh] md:h-[80vh] sm:px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
            src={heroBg}
            alt="Oppenheimer poster"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

        {/* Content */}
          <div className="relative z-10 max-w-xl flex flex-col gap-4 sm:gap-6">
            {/* Movie Info */}
            <div className="flex flex-wrap items-center text-xs gap-2 text-zinc-300 sm:text-sm">
                {movieInfo.map((item, index)=>(
                <Fragment key={item}>
                    {index > 0 && <span>•</span>}
                    <span>{item}</span>
                </Fragment>
                ))}
            </div>

            {/* Title  */}
            <h1 className="font-bold text-3xl tracking-wide leading-tight sm:text-4xl md:text-5xl">Oppenheimer</h1>

            {/* Overview  */}
            <p className="text-sm text-zinc-300 max-w-lg leading-relaxed sm:text-base md:text-lg">The story of J. Robert Oppenheimer and the creation of the atomic bomb during World War II.</p>

            {/* Buttons  */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button 
                className="w-full sm:w-auto bg-red-600 font-medium text-white px-6 py-3 border border-red-400 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105"
                type="button"
                >Watch Trailer</button>

                <button 
                className="w-full sm:w-auto text-zinc-300 font-medium px-6 py-3 border border-zinc-500 rounded-full hover:bg-zinc-800 hover:border-zinc-300 transition-all duration-300 hover:scale-105"
                type="button"
                >More Info</button>
            </div>
           </div>
        </section>
    )
}

export default HeroBanner;
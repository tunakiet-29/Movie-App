import {Fragment} from "react";
import heroBg from "../../assets/images/hero-banner.jpg"
const movieInfo = ["⭐ 8.8", "2023", "Action"]

function HeroBanner(){
    return(
        <section className="relative h-[80vh] max-w-7xl mx-auto w-full flex items-center px-6 rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img 
            src={heroBg}
            alt="Oppenheimer poster"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

        {/* Content */}
          <div className="relative z-10 max-w-2xl flex flex-col gap-6">
            {/* Movie Info */}
            <div className="flex items-center text-sm gap-3 text-zinc-300">
                {movieInfo.map((item, index)=>(
                <Fragment key={item}>
                    {index > 0 && <span>•</span>}
                    <span>{item}</span>
                </Fragment>
                ))}
            </div>

            {/* Title  */}
            <h1 className="font-bold text-5xl tracking-wide leading-tight">Oppenheimer</h1>

            {/* Overview  */}
            <p className="text-lg text-zinc-300 max-w-xl leading-relaxed">The story of J. Robert Oppenheimer and the creation of the atomic bomb during World War II.</p>

            {/* Buttons  */}
            <div className="flex gap-4">
                <button className="bg-red-600 font-medium text-white px-6 py-3 border border-red-400 rounded-full hover:bg-red-700 transition-colors duration-300 hover:scale-105">Watch Trailer</button>

                <button className="text-zinc-300 font-medium px-6 py-3 border border-zinc-500 rounded-full hover:bg-zinc-800 hover:border-zinc-300 transition-colors duration-300 hover:scale-105">More Info</button>
            </div>
           </div>
        </section>
    )
}

export default HeroBanner;
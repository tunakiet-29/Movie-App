import MovieCard from "./MovieCard"
function MovieSection({ title }){
    return(
        <section className="space-y-6 py-10">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button className="text-red-500 hover:text-red-400 transition-colors">View All</button>
            </div>

            {/*Movie List*/}
            <div className="grid grid-cols-4 gap-6">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </section>
    )
}

export default MovieSection;
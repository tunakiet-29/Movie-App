import MovieCard from "./MovieCard"
function MovieSection({ title }){
    return(
        <section className="space-y-6 py-10">
            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button
                  type="button" 
                  className="font-medium text-red-500 transition-colors hover:text-red-400"
                >View All</button>
            </div>

            {/*Movie List*/}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </section>
    )
}

export default MovieSection;
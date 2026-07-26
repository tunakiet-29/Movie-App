import MovieCard from "./MovieCard"
import { Link } from "react-router-dom";
function MovieSection({ title, movies, onViewDetails, genreMap, category }){
    return(
        <section className="space-y-6 py-10">
            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold">{title}</h2>
                <Link
                    to={`/movies/${category}`}
                    className="font-medium text-red-500 transition-colors hover:text-red-400"
                >
                    View All
                </Link>
            </div>

            {/*Movie List*/}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
               {movies.map((movie) => (
                <MovieCard 
                  key={movie.id}
                  movie={movie}
                  onViewDetails={onViewDetails}
                  genreMap = {genreMap}
                  
                />
               ))}
            </div>
        </section>
    )
}

export default MovieSection;
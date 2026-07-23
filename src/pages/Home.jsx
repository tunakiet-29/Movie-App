import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroBanner from "../components/movie/HeroBanner"
import MovieSection from "../components/movie/MovieSection";
import { trendingMovies } from "../data/movies";
import { popularMovies } from "../data/movies";
import { topRatedMovies } from "../data/movies";
import { upComingMovies } from "../data/movies";

function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section id="home" className="mx-auto max-w-7xl px-6 py-20">      
        <HeroBanner movie={trendingMovies[0]} />
      </section>

      <section id="movies" className="mx-auto max-w-7xl px-6 py-16 space-y-16">
        <MovieSection 
        title="Trending Movies"
        movies={trendingMovies} />
        <MovieSection 
        title="Popular Movies"
        movies={popularMovies} />
        <MovieSection 
        title="Top Rated Movies"
        movies={topRatedMovies} />
        <MovieSection 
        title="Upcoming Movies"
        movies={upComingMovies}/>

      </section>

      <Footer />
    </main>
  );
}

export default Home;
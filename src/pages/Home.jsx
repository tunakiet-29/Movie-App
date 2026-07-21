import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroBanner from "../components/movie/HeroBanner"
import MovieSection from "../components/movie/MovieSection";

function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section id="home" className="mx-auto max-w-7xl px-6 py-20">      
        <HeroBanner />
      </section>

      <section id="movies" className="mx-auto max-w-7xl px-6 py-16 space-y-16">
        <MovieSection title="Trending Movies" />
        <MovieSection title="Popular Movies"/>
        <MovieSection title="Top Rated Movies"/>
        <MovieSection title="Upcoming Movies"/>

      </section>


      <Footer />
    </main>
  );
}

export default Home;
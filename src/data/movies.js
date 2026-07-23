import infinity from "../assets/images/movies/Avengers-Infinity_War-Official-Poster.jpg";
import batman from "../assets/images/movies/Batman_2022_CGV.jpg";
import deadpool from "../assets/images/movies/deadpool.jpg";
import doctorStrange from "../assets/images/movies/DoctorStrange.jpg";
import ghostRider from "../assets/images/movies/ghostrider.jpg";
import spiderMan from "../assets/images/movies/spiderman.jpg";
import venom from "../assets/images/movies/Venom.jpg";
import backdropBM from "../assets/images/backdrop/BMbackdrop.jpg"

export const trendingMovies = [
  {
    id: 1,
    title: "The Batman",
    year: 2022,
    rating: 8.0,
    genre: "Action",
    poster: batman,
    backdrop: backdropBM,
    overview:
      "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
  },
  {
    id: 2,
    title: "Deadpool and Wolverine",
    year: 2024,
    rating: 8.5,
    genre: "Action",
    poster: deadpool,
    overview:
      "Deadpool teams up with Wolverine on a chaotic multiverse adventure filled with action, comedy, and unexpected surprises.",
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    year: 2021,
    rating: 8.2,
    genre: "Action",
    poster: spiderMan,
    overview:
      "Spider-Man seeks Doctor Strange's help after his identity is revealed, causing dangerous consequences across the multiverse.",
  },
];

export const popularMovies = [
  {
    id: 1,
    title: "Venom",
    year: 2018,
    rating: 8.6,
    genre: "Sci-Fi",
    poster: venom,
    overview:
      "Journalist Eddie Brock bonds with an alien symbiote that grants him extraordinary powers while battling powerful enemies.",
  },
  {
    id: 2,
    title: "Avengers: Infinity War",
    year: 2018,
    rating: 9.0,
    genre: "Action",
    poster: infinity,
    overview:
      "The Avengers unite with their allies to stop Thanos from collecting all six Infinity Stones and wiping out half of all life.",
  },
];

export const topRatedMovies = [
  {
    id: 1,
    title: "Doctor Strange: Multiverse of Madness",
    year: 2022,
    rating: 8.8,
    genre: "Fantasy",
    poster: doctorStrange,
    overview:
      "Doctor Strange journeys through the multiverse with a mysterious teenager while confronting terrifying alternate realities.",
  },
];

export const upComingMovies = [
  {
    id: 1,
    title: "Ghost Rider",
    year: 2007,
    rating: 8.3,
    genre: "Action",
    poster: ghostRider,
    overview:
      "Motorcycle stuntman Johnny Blaze becomes the Ghost Rider and fights supernatural forces after making a deal with the devil.",
  },
];
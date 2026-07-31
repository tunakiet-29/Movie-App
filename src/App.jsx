import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import FavoritesPage from "./pages/FavoritesPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:category" element={<MoviesPage />} />
      <Route path="/favorites" element={<FavoritesPage />}/>
    </Routes>
  );
}

export default App;
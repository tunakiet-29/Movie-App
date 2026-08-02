const FAVORITES_KEY = "movieverse-favorite";

export function getFavorites(){
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
}

export function saveFavorites(favorites){
    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(favorites)
    );
}

export function isFavorite(id){
    return getFavorites().some((movie)=> movie.id === id);
}

export function toggleFavorite(movie){
    const favorites = getFavorites();

    const exists = favorites.find((item) => item.id === movie.id);

    if(exists){
        const updated= favorites.filter((item) => item.id !== movie.id);
        saveFavorites(updated);
        return false;
    }

    favorites.push({
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
        rating: movie.rating,
        overview: movie.overview,
        year: movie.year,
        genreIds: movie.genreIds,
    });
    saveFavorites(favorites);
    return true;
}
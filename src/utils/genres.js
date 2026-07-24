export function formatGenres(genreIds, genreMap){
    return genreIds.map(id=>genreMap[id]).filter(Boolean) .join(" • ");
}
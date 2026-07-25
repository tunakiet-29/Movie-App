import { Search } from "lucide-react";

function SearchBar({query, onChange}){
    return(
        <div className="flex w-full items-center gap-3">
            <Search 
            size={20}
            className="text-zinc-400"
            />
            <input
            type="text"
            className="rounded-xl flex-1 bg-zinc-900 border border-zinc-700 text-white px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 placeholder:text-zinc-500"
            value={query}
            placeholder="Search movies..."
            aria-label="Search Movies"
            onChange={onChange} 
            />
        </div>
    )
}

export default SearchBar;
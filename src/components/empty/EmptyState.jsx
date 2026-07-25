import { SearchX } from "lucide-react";

function EmptyState({ query }) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">

            <SearchX
                size={48}
                className="text-zinc-500"
            />

            <h2 className="mt-4 text-2xl font-bold">
                No movies found
            </h2>

            <p className="mt-2 text-zinc-400">
                We couldn't find anything for
            </p>

            <p className="mt-1 font-semibold text-red-400">
                "{query}"
            </p>

            <p className="mt-4 text-sm text-zinc-500">
                Try another keyword or check your spelling.
            </p>

        </div>
    );
}

export default EmptyState;
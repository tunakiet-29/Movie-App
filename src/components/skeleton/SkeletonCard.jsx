function SkeletonCard() {
    return (
        <div className="animate-pulse overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-lg">

            {/* Poster */}
            <div className="aspect-2/3 bg-zinc-200 dark:bg-zinc-800"></div>

            {/* Info */}
            <div className="p-3 space-y-3 sm:p-4">

                <div className="flex justify-between">
                    <div className="h-4 w-12 rounded bg-zinc-200 dark:bg-zinc-800"></div>
                    <div className="h-4 w-10 rounded bg-zinc-200 dark:bg-zinc-800"></div>
                </div>

                <div className="h-5 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800"></div>

                <div className="h-4 w-1/2 rounded bg-zinc-200 dark:bg-zinc-800"></div>

            </div>

        </div>
    );
}

export default SkeletonCard;
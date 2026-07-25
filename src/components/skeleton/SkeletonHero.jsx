function SkeletonHero(){
    return(
        <section className="animate-pulse relative h-[70vh] max-w-7xl mx-auto w-full flex items-center px-4 rounded-2xl overflow-hidden sm:h-[75vh] md:h-[80vh] sm:px-6">
            {/* Background Image */}
            <div className="absolute inset-0 bg-zinc-800"></div>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
            {/* Content */}
            <div className="relative z-10 max-w-xl flex flex-col gap-4 sm:gap-6">
                {/* Movie Info */}
                <div className="flex items-center gap-2">
                    <div className="h-4 w-12 rounded bg-zinc-700"></div>

                    <div className="h-4 w-8 rounded bg-zinc-700"></div>

                    <div className="h-4 w-24 rounded bg-zinc-700"></div>
                </div>

                {/* Title  */}
                <div className="h-12 w-3/4 rounded bg-zinc-700"></div>

                {/* Overview  */}
                <div className="space-y-2">

                    <div className="h-4 w-full rounded bg-zinc-700"></div>

                    <div className="h-4 w-5/6 rounded bg-zinc-700"></div>

                    <div className="h-4 w-2/3 rounded bg-zinc-700"></div>

                </div>

                {/* Buttons  */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="h-12 w-full rounded-full bg-zinc-700 sm:w-36"></div>
                    <div className="h-12 w-full rounded-full bg-zinc-700 sm:w-32"></div>
                </div>
            </div>
        </section>
    )
}

export default SkeletonHero;
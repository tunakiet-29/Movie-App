import  SkeletonCard  from "./SkeletonCard";

function SkeletonSection({ title, count = 6}){
    return(
        <section className="animate-pulse space-y-6 py-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {/* Title */}
                <h2 className="text-2xl font-bold">
                    {title}
                </h2>

                <div className="h-5 w-20 rounded bg-zinc-800"></div>
            </div>
            
            {/* Skeleton List */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {
                    Array.from({length: count}).map((_, index)=>(
                        <SkeletonCard key={index} />
                    ))
                }
            </div>
        </section>
    )
}

export default SkeletonSection;
import { X } from "lucide-react";
function TrailerModal({ trailer, onClose }){
    if (!trailer) return null;
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80" aria-hidden="true"></div>

            {/* Modal */}
            <div className="relative z-50 w-full mx-4 max-w-5xl rounded-xl bg-zinc-900 p-4">
                {/* Close Button */}
                <button
                type="button"
                onClick={onClose}
                aria-label="Close Trailer Modal"
                className="cursor-pointer absolute top-6 right-6 rounded-full p-2 text-zinc-300 transition-all duration-300 hover:bg-zinc-800 hover:text-white"
                >
                    <X size={20} />
                </button>
                {/* iFrame */}
                <div className="aspect-video w-full overflow-hidden rounded-xl">
                    <iframe 
                        src= {`https://www.youtube.com/embed/${trailer.key}`}
                        title="Movie Trailer"
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}

export default TrailerModal;
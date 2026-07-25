import { TriangleAlert } from "lucide-react";

function ErrorState({ message, onRetry }){
    return(
        <div className="flex max-w-lg flex-col items-center justify-center gap-4 py-20 text-center">
            {/* Error Icon */}
            <TriangleAlert 
                size={48}
                className="text-yellow-400" />

            {/* Message */}
            <h2 className="text-3xl font-bold">Oops!</h2>

            <p className="text-lg text-zinc-300">Something went wrong.</p>

            <p className="max-w-md text-sm text-zinc-500">{message}</p>

            {/* Button */}
            <button
                type="button"
                onClick={onRetry}
                className="mt-2 rounded-full bg-red-600 text-white font-medium px-6 py-3 transition-colors duration-300 hover:bg-red-700"
            >
                Retry
            </button>
        </div>
    )
}

export default ErrorState;
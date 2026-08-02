import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/")}
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-zinc-300
        bg-white
        px-4
        py-2
        text-sm
        font-medium
        text-zinc-800
        transition-all
        duration-300
        hover:-translate-x-1
        hover:bg-zinc-100
        dark:border-zinc-700
        dark:bg-zinc-900
        dark:text-white
        dark:hover:bg-zinc-800
      "
    >
      <ArrowLeft size={18} />
      Back to Home
    </button>
  );
}

export default BackButton;
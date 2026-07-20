import { Clapperboard, Search, Moon } from "lucide-react";

function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Clapperboard className="h-8 w-8 text-red-500" />

          <h1 className="text-2xl font-bold tracking-wide">
            Movie<span className="text-red-500">Verse</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <a
            href="#"
            className="transition duration-200 hover:text-red-500"
          >
            Home
          </a>

          <a
            href="#"
            className="transition duration-200 hover:text-red-500"
          >
            Movies
          </a>

          <a
            href="#"
            className="transition duration-200 hover:text-red-500"
          >
            Favorites
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button
            className="cursor-pointer transition duration-200 hover:text-red-500"
            aria-label="Search"
          >
            <Search size={22} />
          </button>

          <button
            className="cursor-pointer transition duration-200 hover:text-yellow-400"
            aria-label="Toggle Theme"
          >
            <Moon size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import { Clapperboard, Search, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Clapperboard className="h-8 w-8 text-red-500" />

          <h1 className="text-2xl font-bold tracking-wide">
            Movie<span className="text-red-500">Verse</span>
          </h1>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#home"
            className="transition-colors duration-200 hover:text-red-500"
          >
            Home
          </a>

          <a
            href="#movies"
            className="transition-colors duration-200 hover:text-red-500"
          >
            Movies
          </a>

          <a
            href="#"
            className="transition-colors duration-200 hover:text-red-500"
          >
            Favorites
          </a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-5">
          <button
            type="button"
            className="cursor-pointer transition-colors duration-200 hover:text-red-500"
            aria-label="Search"
          >
            <Search size={22} />
          </button>

          <button
            type="button"
            className="cursor-pointer transition-colors duration-200 hover:text-yellow-400"
            aria-label="Toggle Theme"
          >
            <Moon size={22} />
          </button>
        </div>

        <button
          type="button"
          className="md:hidden cursor-pointer transition-colors duration-200 hover:text-red-500"
          onClick={()=>setIsOpen(prev => !prev)}
          aria-label = {isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        
      </div>

      {/* Mobile menu */}

        {isOpen && (
          <div className="md:hidden border-t bg-zinc-950">
            <div className="flex flex-col items-start gap-6 px-6 py-5">
              <a 
                href="#home" 
                onClick={()=>setIsOpen(false)}
                className="w-full transition-colors duration-200 hover:text-red-500"
              >Home</a>

              <a
                href="#movies" 
                onClick={()=>setIsOpen(false)}
                className="w-full transition-colors duration-200 hover:text-red-500"
              >Movies</a>

              <a 
                href="#" 
                onClick={()=>setIsOpen(false)}
                className="w-full transition-colors duration-200 hover:text-red-500"
              >Favorites</a>
            </div>
            
            <div className="flex flex-col items-start px-6 gap-6 mt-6 border-t border-zinc-800 pt-6">
              <button
                type="button"
                className="flex items-center gap-3 cursor-pointer transition-colors duration-200 hover:text-red-500"
                aria-label="Search"
              >
                <Search size={22} />
                <span>Search</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 cursor-pointer transition-colors duration-200 hover:text-yellow-500"
                aria-label="Toggle Theme"
              >
                <Moon size={22} />
                <span>Dark Mode</span>
              </button>

            </div>
          </div>
        )}
    </nav>
  );
}

export default Navbar;
import { Clapperboard } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col items-center gap-5">
      {/* Brand */}
      <a href="#home" className="flex items-center gap-2">
          <Clapperboard className="h-6 w-6 text-red-500" />

          <p className="text-xl font-bold tracking-wide">
            Movie<span className="text-red-500">Verse</span>
          </p>
      </a>

      {/* Description */}
      <p className="max-w-md text-center text-sm text-zinc-400">Discover trending, popular and top rated movies.</p>

      {/* Navigation */}
      <nav 
      className="flex flex-wrap justify-center gap-6 text-sm"
      aria-label="Footer Navigation"
      >
        <a 
        href="#home"
        className="transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:text-white"
        >Home</a>

        <a 
        href="#movies"
        className="transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:text-white"
        >Movies</a>

        <a 
        href="#"
        className="transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:text-white"
        >Favorites</a>
      </nav>

      {/* Copyright */}

      <p className="text-xs text-zinc-500">© 2026 MovieVerse. All rights reserved.</p>
    </div>
    </footer>
  );
}

export default Footer;
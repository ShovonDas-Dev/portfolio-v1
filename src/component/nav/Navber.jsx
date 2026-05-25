import { FaDiscord, FaGithub, FaInstagram, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import SearchBox from "../../assets/SearchBox"
import { useEffect, useState } from "react";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-transparent bg-[#010714]/100 shadow-lg backdrop-blur-md py-4'
          : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* ================= বাম পাশের লোগো ================= */}
        <div className="flex items-center gap-8">
          <Link to="/" className="!no-underline text-lg md:text-xl font-secondary flex items-center gap-1.5">
            <img src="/src/assets/OrbitLogo/CodeLogo.png" alt="Shovon Das" className="w-8 h-8 rounded-full" />
            <span className="text-white font-semibold font-weight-normal">Shovon Das</span>
          </Link>
        </div>

        {/* ================= ডান পাশের এলিমেন্টসমূহ (সার্চ ও সোশ্যাল) ================= */}
        <div className="flex gap-3 md:gap-6 items-center">

          {/* ================= মাঝের মেনু ================= */}
          <div className="flex items-center gap-3 md:gap-6 text-sm font-secondary">
            <NavLink
              to="/"
              className={({ isActive }) =>
               `${isActive ? "text-aqua" : "text-white"} hover:text-mint font-primary transition-colors text-sm md:text-lg`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
               `${isActive ? "text-aqua" : "text-white"} hover:text-mint font-primary transition-colors text-sm md:text-lg`
              }
            >    
              Blogs
            </NavLink>
          </div>
          
          {/* সার্চ বার: বড় স্ক্রিনে দেখাবে */}
          <div className="hidden md:block">
            <SearchBox />
          </div>

          {/* সার্চ আইকন: মোবাইলে দেখাবে */}
          <button className="block md:hidden text-gray-400 hover:text-white transition-colors cursor-pointer">
            <FaSearch className="text-base" />
          </button>

          {/* সোশ্যাল আইকন: বড় স্ক্রিনে দেখাবে */}
          <div className="hidden md:flex items-center gap-4 md:gap-6 text-xs text-gray-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-white hover:text-mint transition-colors md:text-sm">
              <FaInstagram className="text-md md:text-lg text-mint" /> Instagram
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-mint transition-colors md:text-sm">
              <FaDiscord className="text-md md:text-lg text-mint" /> Discord
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-mint transition-colors md:text-sm">
              <FaGithub className="text-md md:text-lg text-mint" /> Github
            </a>
          </div>

        </div>

      </div>
    </nav>
  );
}
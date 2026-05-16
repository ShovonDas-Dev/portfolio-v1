import { FaDiscord, FaGithub, FaInstagram, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import SearchBox from "../../assets/SearchBox"


export default function Navbar() {
  return (
    <nav className="bg-bg1 text-white px-4 py-4 md:px-8 border-b border-gray-800 font-secondary font-weight-thin">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* ================= বাম পাশের লোগো ================= */}
        <div className="flex items-center gap-8">
          <Link to="/" className="!no-underline text-lg md:text-xl font-secondary flex items-center gap-1.5  ">
            <span className="text-mint ">SK </span>
            <span className=" text-white font-semibold font-weight-normal ">Shovon Das</span>
          </Link>

          
        </div>

        {/* ================= ডান পাশের এলিমেন্টসমূহ (সার্চ ও সোশ্যাল) ================= */}
        <div className="flex items-center gap-6">

          {/* ================= মাঝের মেনু (সব ডিসপ্লেতেই থাকবে, শুধু সাজানো আলাদা) ================= */}
          <div className="flex items-center gap-4 md:gap-6 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-${isActive ? "aqua" : "white"}  hover:text-mint transition-colors text-md md:text-lg`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
               `text-${isActive ? "aqua" : "white"}  hover:text-mint transition-colors text-md md:text-lg`

              }
            >
              Blogs
            </NavLink>
          </div>
          
          {/* সার্চ বার: বড় স্ক্রিনে ইনপুট দেখাবে, ছোট স্ক্রিনে (md এর নিচে) হাইড থাকবে */}
          <div className="hidden md:block">
            <SearchBox />
          </div>
         

          {/* সার্চ আইকন: ছোট স্ক্রিনে (Mobile/Tablet) দেখাবে, বড় স্ক্রিনে হাইড থাকবে */}
          <button className="block md:hidden text-gray-400 hover:text-white transition-colors cursor-pointer">
            <FaSearch className="text-base" />
          </button>

          {/* সোশ্যাল আইকন গ্রুপ: বড় স্ক্রিনে দেখাবে, মোবাইলে (md এর নিচে) পুরোপুরি হাইড */}
          <div className="hidden md:flex items-center gap-4 md:gap-6 text-xs text-gray-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-white hover:text-mint transition-colors md:text-sm ">
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
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className="px-6 md:px-10 py-6 max-w-7xl mx-auto font-poppins">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">D</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="font-bold hover:border-b-2 hover:border-band"><Link>Services</Link></li>
          <li className="font-bold hover:border-b-2 hover:border-band"><Link>Works </Link></li>
          <li className="font-bold hover:border-b-2 hover:border-band"><Link to="/blog">Blog </Link></li>
         
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="mt-4 flex flex-col gap-4 text-gray-300 md:hidden">
          <li className="font-bold hover:border-b-2 hover:border-band"><Link>Services</Link></li>
          <li className="font-bold hover:border-b-2 hover:border-band"><Link>Works </Link></li>
          <li className="font-bold hover:border-b-2 hover:border-band"><Link to="/blog">Blog </Link></li>
        </ul>
      )}
    </div>
  )
}

export default Navbar

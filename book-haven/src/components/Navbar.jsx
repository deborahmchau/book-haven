import { Link } from "react-router-dom";
import { useState } from "react"; 
import { Menu, X } from "lucide-react";
import bookLogo from "../assets/book-logo.png"; 

export default function Navbar() { 
    const [isOpen, setIsOpen] = useState(false); 

    return ( 
       <nav className="bg-pink-300 text-black px-6 py-4 flex justify-between items-center relative z-50">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
             <img src={bookLogo} alt="Bookhaven Logo" className="w-32" />
          </Link>

           {/* Desktop Menu */} 
          <div className="hidden md:flex space-x-8 font-bold">
            <Link to="/" className="hover:text-purple-700">HOME</Link>
            <Link to="/" className="hover:text-purple-700">SEARCH</Link>
            <Link to="/" className="hover:text-purple-700">MY LIBRARY</Link> 
          </div>

           {/* Mobile Menu Button */} 
           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none"> {isOpen ? <X size={28} /> : <Menu size={28} />} </button> 

            {/* Mobile Dropdown */}
            {isOpen && ( 
                <div className="absolute top-full left-0 w-full bg-purple-300 flex flex-col items-center py-4 space-y-4 md:hidden shadow-lg">
                   <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline font-bold">HOME</Link>
                   <Link to="/search" onClick={() => setIsOpen(false)} className="hover:underline font-bold">SEARCH</Link>
                   <Link to="/library" onClick={() => setIsOpen(false)} className="hover:underline font-bold">MY LIBRARY</Link>
                </div> 
             )}
         </nav>
       );
  } 

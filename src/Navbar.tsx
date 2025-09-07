import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = ({ }) => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsDropdownOpen(false);
  };


  return (
    <nav className="navbar p-4 relative">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-4">          
          <Link to="/" className="home-btn anti-btn py-2" onClick={handleCloseMenu}>Home</Link>   
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-lg">
        <li><Link to="/live" className="nav-btn py-2" onClick={handleCloseMenu}>Live</Link></li>
          <li><Link to="/bio" className="nav-btn py-2" onClick={handleCloseMenu}>About</Link></li>
          <li><a target="_blank" href="https://coattheband.bandcamp.com/" className="nav-btn py-2">Music</a></li>
          <li><Link to="/listen" className="nav-btn py-2">Listen</Link></li>
          {/* <li><Link to="/portfolio" className="nav-btn py-2" onClick={handleCloseMenu}>Art</Link></li>           */}
          <li><Link to="/contact" className="nav-btn py-2" onClick={handleCloseMenu}>Contact</Link></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="dropdown px-4 py-2 text-gray rounded" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Menu
          </button>
        </div>
        
        {/* Mobile Fullscreen Nav */}
        {isDropdownOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center md:hidden">
            <ul className="text-white text-2xl space-y-6">
              <li><Link to="/" className="nav-btn py-2" onClick={handleCloseMenu}>Home</Link></li>
              <li><a target="_blank" href="https://coattheband.bandcamp.com/" className="nav-btn py-2">Music</a></li>
              <li><Link to="/listen" className="nav-btn py-2" onClick={handleCloseMenu}>Listen</Link></li>
              {/* <li><Link to="/portfolio" className="nav-btn py-2" onClick={handleCloseMenu}>Portfolio</Link></li> */}
              <li><Link to="/bio" className="nav-btn py-2" onClick={handleCloseMenu}>About</Link></li>
              <li><Link to="/contact" className="nav-btn py-2" onClick={handleCloseMenu}>Contact</Link></li>
            </ul>
            <button className="text-white mt-6 text-xl" onClick={handleCloseMenu}>Close</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
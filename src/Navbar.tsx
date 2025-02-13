import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar: React.FC<NavbarProps> = ({ }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div className="navbar p-4">
      <nav className="flex justify-between items-center w-full">
        <div className="flex gap-4">
          <Link to="/" className="home-logo"></Link>
          <Link to="/" className="anti-btn py-2 cyber-glow:glowPulse pink">
            Home
          </Link>
        </div>
        <div className="relative">
          <button className="dropdown px-4 py-2 text-white rounded cyber-glow:glowPulse" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Menu</button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 shadow-lg rounded dropdown-menu">
              <li>
                <Link to="/listen" className="link">Listen</Link>                
              </li>
              <li>
                <Link to="/bio" className="link">About Us</Link>
              </li>              
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

// Define props type
interface NavbarProps {
  onColorChange: (color: string) => void; // Function that takes a color string
}

const Navbar: React.FC<NavbarProps> = ({ onColorChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("");

  // Function to handle color change
  const handleColorChange = (color: string): void => {
    onColorChange(color); // Calls function passed from App
    setIsDropdownOpen(false); // Close dropdown
    setBgColor(color);
  };

  return (
    <div className="navbar p-4">
      <nav className="flex justify-between items-center w-full">
        <div className="flex gap-4">
          <Link to="/" className="home-logo"></Link>
          <Link to="/" className="anti-btn py-2 cyber-glow:glowPulse pink">
            Home
          </Link>
        </div>

        {/* Color Picker Dropdown */}
        <div className="relative">
          <button
            className="dropdown px-4 py-2 text-white rounded cyber-glow:glowPulse"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Mode
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 shadow-lg rounded bg-transparent">
              <li>
                <button
                  className="dropdown-btn cyber-glow:glowPulse block m-auto px-4 py-2 hover:bg-yellow-300 text-center text-sm"
                  onClick={() => handleColorChange("#2b1165")}
                >
                  Vaporwave
                </button>
              </li>
              <li>
                <button
                  className="dropdown-btn cyber-glow:glowPulse block px-4 py-2 hover:bg-yellow-300 text-sm"
                  onClick={() => handleColorChange("bg-yellow-100")}
                >
                  Matrix
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

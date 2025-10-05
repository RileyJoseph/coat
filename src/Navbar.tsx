import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = ({ }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Listen for Snipcart ready event
    document.addEventListener('snipcart.ready', () => {
      // Update cart count when cart changes
      (window as any).Snipcart.events.on('cart.confirmed', updateCartCount);
      (window as any).Snipcart.events.on('item.added', updateCartCount);
      (window as any).Snipcart.events.on('item.removed', updateCartCount);
      (window as any).Snipcart.events.on('item.updated', updateCartCount);

      // Initial cart count
      updateCartCount();
    });

    return () => {
      if ((window as any).Snipcart) {
        (window as any).Snipcart.events.off('cart.confirmed', updateCartCount);
        (window as any).Snipcart.events.off('item.added', updateCartCount);
        (window as any).Snipcart.events.off('item.removed', updateCartCount);
        (window as any).Snipcart.events.off('item.updated', updateCartCount);
      }
    };
  }, []);

  const updateCartCount = () => {
    if ((window as any).Snipcart?.store?.getState) {
      const state = (window as any).Snipcart.store.getState();
      setCartCount(state.cart.items.count);
    }
  };

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
        <ul className="hidden md:flex gap-6 text-lg items-center">
        <li><Link to="/live" className="nav-btn py-2" onClick={handleCloseMenu}>Live</Link></li>
          <li><Link to="/bio" className="nav-btn py-2" onClick={handleCloseMenu}>About</Link></li>
          <li><a target="_blank" href="https://coattheband.bandcamp.com/" className="nav-btn py-2">Music</a></li>
          <li><Link to="/shop" className="nav-btn py-2" onClick={handleCloseMenu}>Shop</Link></li>
          <li><Link to="/listen" className="nav-btn py-2">Listen</Link></li>
          {/* <li><Link to="/portfolio" className="nav-btn py-2" onClick={handleCloseMenu}>Art</Link></li>           */}
          <li><Link to="/contact" className="nav-btn py-2" onClick={handleCloseMenu}>Contact</Link></li>
          {cartCount > 0 && (
            <li>
              <button className="snipcart-checkout relative nav-btn py-2">
                Cart
                <span className="absolute -top-2 -right-2 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              </button>
            </li>
          )}
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
          <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center md:hidden z-50">
            <button className="text-white mt-6 text-xl absolute top-5 right-10 cursor-pointer" onClick={handleCloseMenu}>X</button>
            <ul className="text-white text-2xl space-y-6">
              <li><Link to="/" className="nav-btn py-2" onClick={handleCloseMenu}>Home</Link></li>
              <li><a target="_blank" href="https://coattheband.bandcamp.com/" className="nav-btn py-2">Music</a></li>
              <li><Link to="/listen" className="nav-btn py-2" onClick={handleCloseMenu}>Listen</Link></li>
              <li><Link to="/shop" className="nav-btn py-2" onClick={handleCloseMenu}>Shop</Link></li>
              <li><Link to="/bio" className="nav-btn py-2" onClick={handleCloseMenu}>About</Link></li>
              <li><Link to="/contact" className="nav-btn py-2" onClick={handleCloseMenu}>Contact</Link></li>
              {cartCount > 0 && (
                <li>
                  <button className="snipcart-checkout relative nav-btn py-2" onClick={handleCloseMenu}>
                    Cart
                    <span className="absolute -top-2 -right-2 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {cartCount}
                    </span>
                  </button>
                </li>
              )}
              <li>
                <button className="text-white py-2 text-xl font-bold" onClick={handleCloseMenu}>Close</button>
              </li>
              {/* <button className="text-white py-2 text-xl font-bold inter" onClick={handleCloseMenu}>Close</button> */}
            </ul>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState } from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 footer pulse-border text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-8">
        <div className="footer-details w-full md:w-2/3 flex flex-col md:flex-row justify-between">
          
          <div className="w-full md:w-1/3 text-left">
            <h2>Coat</h2>
            <h3 className="text-xl font-semibold">Booking:</h3>
            <a href="mailto:coattheband@gmail.com" className="hover:underline">coattheband@gmail.com</a>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h3 className="text-xl font-semibold underline">Pages</h3>
            <ul className="text-sm text-gray-400 space-y-1 ">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/listen" className="hover:underline">Listen</a></li>
              <li><a href="/bio" className="hover:underline">About Us</a></li>          
            </ul>
          </div>
        </div>      
        <div className="w-full md:w-2/3 flex flex-col items-start md:items-end mt-6 md:mt-0 inline text-right">
          <div className="container mx-auto inline">

            <a
              href="https://coattheband.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-bandcamp"
            >
            </a>
            <a href="https://www.facebook.com/profile.php?id=100088146293886#" target="_blank" className="fa fa-facebook "></a>
            <a href="https://www.instagram.com/coat.music" target="_blank" className="fa fa-instagram "></a>
          </div>
        </div>
      </div>
      {/*  */}
    </footer>
  );
};

export default Footer;

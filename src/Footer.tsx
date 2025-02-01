import React, { useState } from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <a
          href="https://coattheband.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >Bandcamp
        </a>

        <div className="text-center">
        </div>
        <div className="text-center space-y-2">
          <h1>Coat</h1>
          <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

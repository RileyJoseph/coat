import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 footer pulse-border text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-8 sm:flex-row">
      <h2 className="mobile-only">Coat</h2>
        <div className="footer-details w-full md:w-2/3 flex flex-col md:flex-row md:justify-left sm:w-1/2">
          <div className="w-full md:w-1/3 text-left footer-left">
            <h2 className="no-mobile">Coat</h2>
            <h3 className="text-xl font-semibold">Booking:</h3>
            <a href="mailto:coattheband@gmail.com" className="hover:underline">coattheband@gmail.com</a>
          </div>

          <div className="w-full md:w-1/3 text-left md:text-center mt-4 md:mt-0 pages">
            <h3 className="text-xl font-semibold underline">Pages</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/listen" className="hover:underline">Listen</a></li>
              <li><a href="/bio" className="hover:underline">About Us</a></li>          
            </ul>
          </div>
        </div>      


        <div className="w-full md:w-1/3 flex md:justify-end justify-center mt-6 md:mt-0 sm:w-1/2">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:flex space-x-4 md:space-x-4 gap-4 social-icons">
            <a href="https://coattheband.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="fa fa-bandcamp"></a>
            <a href="https://www.facebook.com/profile.php?id=100088146293886#" target="_blank" className="fa fa-facebook"></a>
            <a href="https://www.instagram.com/coat.music" target="_blank" className="fa fa-instagram"></a>
            <a href="https://open.spotify.com/artist/7fAvIUJJUk4DIckyRczLmW?si=R1B6-XGfSpuD0HCTIBq8cw" target="_blank" className="fa fa-spotify"></a>
            <a href="https://music.apple.com/us/artist/coat/1670318082" target="_blank" className="fa fa-apple"></a>
          </div>
        </div>

      </div>
    </footer>

  );
};

export default Footer;

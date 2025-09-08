import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 footer pulse-border text-center footer-bg">
      <div className="footer-content container mx-auto flex flex-col md:flex-row justify-between py-8">
        <div className="footer-details w-full md:w-1/3 flex flex-col px-4 md:px-8 sm:px-4">
          <div className="footer-logos procon text-left">
            <h2>Booking</h2>
            <p className="md:pr-8 font-semibold">
              For all booking inquires, please contact: <br />
              <a href="mailto:coattheband@gmail.com" className="hover:underline">coattheband@gmail.com</a>
            </p>      
          </div>
        </div>

        <div className="footer-details w-full md:w-1/2 flex flex-col md:flex-row px-4 mt-8 md:mt-0 right-half">
          <div className="text-left w-full md:w-1/2 mx-auto">
            <p className="text-xl font-bold footer-heading">PAGES</p>
            <ul className="text-sm space-y-1">
              {/* <li className="pt-2"><a href="/" className="hover:underline ">Home</a></li> */}
              <li className="pt-2"><a href="/" className="hover:underline">Home</a></li>
              <li className="pt-2"><a href="/bio" className="hover:underline ">About Us</a></li>       
              <li className="pt-2"><a href="/listen" className="hover:underline">Listen</a></li>
              <li className="pt-2"><a target="_blank" href="https://coattheband.bandcamp.com/" className="hover:underline ">Bandcamp</a></li>      
              <li className="pt-2"><a href="/contact" className="hover:underline ">Contact</a></li>          
            </ul>
          </div>

          <div className="footer-resume flex flex-col w-full md:w-1/2 text-left">
            <p className="text-xl font-bold footer-heading md:text-left sm:text-left sm:pt-8 pt-8 md:pt-0">Thank You For Listening</p>
            <p className="text-sm md:text-left sm:text-left">Support local art.</p>
          </div>
        </div>
      </div>




      {/* <div className="container mx-auto flex flex-col md:flex-row justify-between px-8 sm:flex-row ">
      <h2 className="mobile-only">Coat</h2>
        <div className="footer-details w-full md:w-2/3 flex flex-col md:flex-row md:justify-left sm:w-1/2">
          <div className="w-full md:w-1/3 text-left mt-4 md:mt-0 pages">
            <h3 className="text-xl font-semibold underline">Pages</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/listen" className="hover:underline">Listen</a></li>
              <li><a href="/bio" className="hover:underline">About Us</a></li>          
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-left footer-left">
            <h3 className="text-xl font-semibold">For booking inquires contact:</h3>
            <a href="mailto:coattheband@gmail.com" className="hover:underline">coattheband@gmail.com</a>
          </div>
        </div>      
      </div> */}

      
        <div className="w-full text-right flex md:justify-end justify-center mt-6 md:mt-0 footer-icons md:pr-12 py-8">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:flex space-x-4 md:space-x-4 gap-4 social-icons">
            <a href="https://coattheband.bandcamp.com/" target="_blank" rel="noopener noreferrer" className="fa fa-bandcamp"></a>
            <a href="https://www.facebook.com/profile.php?id=100088146293886#" target="_blank" className="fa fa-facebook"></a>
            <a href="https://www.instagram.com/coat.music" target="_blank" className="fa fa-instagram"></a>
            <a href="https://open.spotify.com/artist/7fAvIUJJUk4DIckyRczLmW?si=R1B6-XGfSpuD0HCTIBq8cw" target="_blank" className="fa fa-spotify"></a>
            <a href="https://music.apple.com/us/artist/coat/1670318082" target="_blank" className="fa fa-apple"></a>
          </div>
        </div>
        <div>
          <p className="text-xs">Copyright @ 2025 Coat Music. All Rights Reserved.</p>
        </div>        
    </footer>

  );
};

export default Footer;

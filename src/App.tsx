import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Listen from "./Listen";
import BandcampWindow from "./windows/BandcampWindow";
import LibraryWindow from "./windows/LibraryWindow";
import LoungeWindow from "./windows/LoungeWindow";
import Footer from "./Footer";


// Define type for allowed background colors
type BgColor = "bg-white" | "bg-blue-100" | "bg-yellow-100";

const App: React.FC = () => {
  const [bgColor, setBgColor] = useState<BgColor>("bg-white");

  const handleColorChange = (color: BgColor): void => {
    setBgColor(color);
    const root = document.documentElement;

    switch (color) {
      case "bg-blue-100":
        root.style.setProperty("--bg-color", "#3b82f6");
        root.style.setProperty("--fg-color", "#facc15");
        root.style.setProperty("--primary-color", "#f472b6");
        root.style.setProperty("--secondary-color", "#f472b6");
        root.style.setProperty(
          "--bg-gradient",
          "linear-gradient(180deg, #3b82f6 0%, rgba(26, 58, 130, 1) 37%, rgba(171, 36, 177, 1) 69%, #facc15 100%)"
        );
        root.style.setProperty(
          "--fg-gradient",
          "linear-gradient(0deg, #3b82f6 0%, rgba(26, 58, 130, 1) 37%, rgba(171, 36, 177, 1) 69%, #facc15 100%)"
        );
        break;
      case "bg-yellow-100":
        root.style.setProperty("--bg-color", "#000000");
        root.style.setProperty("--fg-color", "#098100");
        root.style.setProperty("--primary-color", "#000000");
        root.style.setProperty("--secondary-color", "#098100");
        root.style.setProperty(
          "--bg-gradient",
          "linear-gradient(180deg, #098100 0%, #000000 100%)"
        );
        root.style.setProperty(
          "--fg-gradient",
          "linear-gradient(0deg, #098100 0%, #000000 100%)"
        );
        break;
      default:
        root.style.setProperty("--bg-color", "#2b1165");
        root.style.setProperty("--fg-color", "#f54171");
        root.style.setProperty("--primary-color", "#f472b6");
        root.style.setProperty("--secondary-color", "#f472b6");
        root.style.setProperty(
          "--bg-gradient",
          "linear-gradient(180deg, #2b1165 0%, rgba(26, 58, 130, 1) 37%, rgba(171, 36, 177, 1) 69%, #f54171 100%)"
        );
        root.style.setProperty(
          "--fg-gradient",
          "linear-gradient(0deg, #2b1165 0%, rgba(26, 58, 130, 1) 37%, rgba(171, 36, 177, 1) 69%, #f54171 100%)"
        );
        break;
    }
  };

  return (
    <Router>
      <Navbar onColorChange={handleColorChange} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="app-body">
                <div className="canvas-mask">
                  <div className="hero-info">                  
                    <h1 className="landing">COAT</h1>
                    {/* <img className="hero-logo" src="/images/logo.png" alt="" /> */}
                    <h3>Is a psychedelic rock band out of <br/> Oklahoma City, Oklahoma</h3>
                    <a className="fullscreen-link"                       
                      onClick={() => {
                        const windowsElement =
                          document.getElementById("live");
                        if (windowsElement) {
                          windowsElement.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}>See Live</a>
                  </div>
                {/* <immg src="https://i.pinimg.com/originals/15/2b/a2/152ba2bdfbdbeeea8d0d64451347399c.gif" /> */}
                  <div className="c c1"></div>
                  <div className="c c2"></div>
                  <div className="c c3"></div>
                  <div className="c c4"></div>
                  <div className="c c5"></div>
                  <div className="c c6"></div>
                  <div className="c c7"></div>
                  <div className="c c8"></div>
                  <div className="c c9"></div>
                  <div className="c c10"></div>
                  <div className="c c11"></div>
                  <div className="c c12"></div>
                  <div className="c c13"></div>
                  <div className="c c14"></div>
                  <div className="c c15"></div>
                  <div className="c c16"></div>
                  <div className="c c17"></div>
                  <div className="c c18"></div>
                  <div className="c c19"></div>
                  <div className="c c20"></div>
                  <div className="c c21"></div>
                  <div className="c c22"></div>
                  <div className="c c23"></div>
                  <div className="c c24"></div>
                  <div className="c c25"></div>
                  <div className="c c26"></div>
                  <div className="c c27"></div>
                  <div className="c c28"></div>
                  <div className="c c29"></div>
                  <div className="c c30"></div>
                  {/* <div className="l"></div>                 */}
                </div>
              </div>
            
              <div id="live" className="window-container flex flex-row items-center">
                <h2 className="mt-4">Shows:</h2>
                <ul>
                  <li>Feb. 14 @ Speakeasy</li>
                  <li>March 14th @ The Blue Note</li>
                  <li>May 3rd @ Resonant Head</li>
                </ul>
              </div>
              <div
                id="windows"
                className="window-container flex flex-col items-center pulse-border"
              >
                <div className="scene flex flex-wrap justify-center gap-32 w-full">
                  <div className="window-div text-xl flex flex-col items-center">
                    <LoungeWindow />
                    <h2 className="text-center mt-4 text-2xl secondary">
                      「 l i s t e n 」
                    </h2>
                  </div>
                  <div className="window-div text-xl flex flex-col items-center">
                    <LibraryWindow />
                    <h2 className="text-center mt-4 text-2xl secondary">
                      「 m e r c h 」
                    </h2>
                  </div>
                  <div className="window-div text-xl flex flex-col items-center">
                    <BandcampWindow />
                    <h2 className="text-center mt-4 text-2xl secondary">
                      「 b a n d c a m p 」
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        {/* <Route path="/book-recommendations" element={<BookRecommendations />} /> */}
        <Route path="/vapor-lounge" element={<Listen />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Listen from "./Listen";
import Live from "./Live";
import BandcampWindow from "./windows/BandcampWindow";
import LibraryWindow from "./windows/LibraryWindow";
import LoungeWindow from "./windows/LoungeWindow";
import Footer from "./Footer";
import gsap from "gsap";

const blobCount = 20;

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    function randy(min: number, max: number) {
      return Math.floor(Math.random() * (1 + max - min) + min);
    }

    const time = 4;
    const tl = gsap.timeline({ repeat: -1, yoyo: false });
    const container = containerRef.current;

    container.innerHTML = "";
    
    for (let i = 0; i < blobCount; i++) {
      const div = document.createElement("div");
      div.className = "blob"; // Optional: Add class for styling
      container.appendChild(div);
    }

    const blobs = container.children;
    const initSettings = [];

    for (let i = 0; i < blobs.length; i++) {
      const init = {
        rot: randy(-2500, 2500),
        rotX: randy(-2500, 2500),
        rotY: randy(-2500, 2500),
        rotZ: randy(-2500, 2500),
        left: randy(-40, 130) + "%",
        top: randy(-40, 130) + "%",
      };

      initSettings.push(init);
      tl.set(blobs[i], {
        rotation: init.rot,
        rotationX: init.rotX,
        rotationY: init.rotY,
        rotationZ: init.rotZ,
        left: init.left,
        top: init.top,
      });
    }

    for (let i = 0; i < blobs.length; i++) {
      tl.to(blobs[i], time * 25, {
        rotation: "+=" + 3600,
        rotationX: "+=" + 3600,
        rotationY: "+=" + 3600,
        rotationZ: "+=" + 3600,
        ease: "none",
      }, 0);
    }

    for (let i = 0; i < blobs.length; i++) {
      tl.to(blobs[i], time * 2, {
        left: randy(-40, 130) + "%",
        ease: "sine.inOut",
      }, 0);
    }

    return () => tl.kill(); // Cleanup animation when component unmounts
  }, []);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <div>
            <div className="app-body">
              <div className="blur"></div>
              <div id="heat-map" ref={containerRef}></div>
              <div className="hero-info">                  
                <h1 className="landing">COAT</h1>
                {/* <img className="hero-logo" src="/images/logo.png" alt="" /> */}
                <h3>Is a psychedelic rock band out of <br/> Oklahoma City, Oklahoma</h3>
                <br />
                <a className="fullscreen-link btn mt-16"                       
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
            </div>
          
            <div id="live" className="live">
              <h2 className="mt-32">Upcoming Shows:</h2>
              <div className="shows">
                <ul className="mt-8">
                  <li>
                    <span className="date">Feb. 14</span>  
                    <span className="location">The 51st St. Speakeasy
                    <span className="city">Oklahoma City, OK</span></span>
                    <span className="time">9:00</span>
                  </li>
                  <li>
                    <span className="date">March 14th</span> 
                    <span className="location">The Blue Note
                    <span className="city">Oklahoma City, OK</span></span>
                    <span className="time">9:00</span>
                  </li>
                  <li>
                    <span className="date">May 3rd</span> 
                    <span className="location">Resonant Head
                      <span className="city">Oklahoma City, OK</span>
                    </span>
                    <span className="time">8:00</span>
                  </li>
                  <li>
                    <span className="date">June TBD</span> 
                    <span className="location">The Blue Note
                      <span className="city">Oklahoma City, OK</span>
                    </span>
                    <span className="time">9:00</span>
                  </li>                    
                </ul>                
              </div>
            </div>
            <div id="windows" className="window-container flex flex-col items-center pulse-border">
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
        } />
        <Route path="/listen" element={<Listen />} />
        <Route path="/live" element={<Live />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

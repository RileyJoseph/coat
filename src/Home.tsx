import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import BandcampWindow from "./windows/BandcampWindow";
import BioWindow from "./windows/BioWindow";
import LoungeWindow from "./windows/LoungeWindow";

const blobCount = 20;

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation(); 

  useEffect(() => {
    if (location.pathname !== "/") return;

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
      div.className = "blob";
      container.appendChild(div);
    }

    const blobs = container.children;

    for (let i = 0; i < blobs.length; i++) {
      tl.set(blobs[i], {
        rotation: randy(-2500, 2500),
        rotationX: randy(-2500, 2500),
        rotationY: randy(-2500, 2500),
        rotationZ: randy(-2500, 2500),
        left: randy(-40, 130) + "%",
        top: randy(-40, 130) + "%",
      });
    }

    for (let i = 0; i < blobs.length; i++) {
      tl.to(blobs[i], time * 25, { rotation: "+=3600", ease: "none" }, 0);
    }

    for (let i = 0; i < blobs.length; i++) {
      tl.to(blobs[i], time * 2, { left: randy(-40, 130) + "%", ease: "sine.inOut" }, 0);
    }

    return () => tl.kill(); 

  }, [location.pathname]); 

  return (
    <div>
      <div className="app-body">
        <div className="blur"></div>
        <div id="heat-map" ref={containerRef}></div>
        <div className="hero-info">                  
          <h1 className="landing">COAT</h1>
          <h3>Is a psychedelic rock band out of <br/> Oklahoma City, Oklahoma</h3>
          <br />
          <a className="fullscreen-link btn mt-16"                       
            onClick={() => {
              const windowsElement = document.getElementById("live");
              if (windowsElement) {
                windowsElement.scrollIntoView({ behavior: "smooth" });
              }
            }}>See Live</a>
        </div>
      </div>

      <div id="live" className="live flex items-center , pulse-border">
        <h2 className="">Upcoming Shows:</h2>
        <div className="shows">
          <ul className="mt-8">
            <li><span className="date">Feb. 14</span> <span className="location">The 51st St. Speakeasy <span className="city">Oklahoma City, OK</span></span><span className="time">9:00</span></li>
            <li><span className="date">March 14th</span> <span className="location">The Blue Note <span className="city">Oklahoma City, OK</span></span><span className="time">9:00</span></li>
            <li><span className="date">May 3rd</span> <span className="location">Resonant Head <span className="city">Oklahoma City, OK</span></span><span className="time">8:00</span></li>
            <li><span className="date">June TBD</span> <span className="location">The Blue Note <span className="city">Oklahoma City, OK</span></span><span className="time">9:00</span></li>                    
          </ul>                
        </div>
      </div>

      <div id="windows" className="window-container panels flex items-center pulse-border">
        {/* <div className="panels scene flex flex-wrap justify-center gap-32 w-full"> */}
          <div className="window-div listen-panel text-xl flex flex-col items-center">
            {/* <LoungeWindow /> */}
            <h2 className="text-center mt-4 text-2xl secondary">「 l i s t e n 」</h2>
          </div>
          <div className="window-div bio-panel text-xl flex flex-col items-center">
            {/* <BioWindow /> */}
            <h2 className="text-center mt-4 text-2xl secondary">「 a b o u t 」</h2>
          </div>
          <div className="window-div bandcamp-panel text-xl flex flex-col items-center">
            {/* <BandcampWindow /> */}
            <h2 className="text-center mt-4 text-2xl secondary">「 b a n d c a m p 」</h2>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;

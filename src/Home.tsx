import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Live from "./Live";
import Windows from "./Windows";
import gsap from "gsap";

const blobCount = 20;

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation(); 
  // const navigate = useNavigate();

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

    return () => {
      tl.kill(); // ✅ Ensure cleanup function explicitly returns void
    };

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

      <Live />
      
      <Windows />
    </div>
  );
};

export default Home;

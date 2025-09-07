import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Live from "./Live";
import Windows from "./Windows";
import gsap from "gsap";
// import ThreeScene from "./ThreeScene";

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
      tl.kill(); // Ensure cleanup function explicitly returns void
    };

  }, [location.pathname]); 
  return (
    <div>
      <div className="app-body bg-black min-h-screen">
        <div className="relative mx-auto w-full max-w-[1400px] h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] bg-color-black">
          <div className="tv-bg relative block w-full h-full bg-center bg-no-repeat bg-contain flowers" style={{ backgroundImage: "url('/images/coat-flowers5.png')" }}>
            {/* <div className="blur pointer-events-none  inset-0" /> */}
            {/* <div id="heat-map" ref={containerRef} className=" inset-0"></div> */}
{/* 
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="landing text-6xl md:text-8xl font-extrabold tracking-tight">COAT</h1>
              <h3 className="mt-4 text-lg md:text-2xl opacity-90">Is a psychedelic rock band out of <br /> Oklahoma City, Oklahoma</h3>
              <button
                className="fullscreen-link btn mt-16 border border-white/60 px-6 py-3 rounded hover:bg-white/10 transition"
                onClick={() => document.getElementById('live')?.scrollIntoView({ behavior: 'smooth' })}>
                See Live
              </button>
            </div> */}

          </div>
        </div>
        {/* <ThreeScene /> */}
      </div>

      <Live />
      <Windows />
    </div>
  );
};

export default Home;

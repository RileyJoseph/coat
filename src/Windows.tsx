import React from "react";
import { useNavigate } from "react-router-dom";


const Windows: React.FC = () => {
  // const location = useLocation(); 
  const navigate = useNavigate();
  return (
    <div id="windows" className="window-container panels flex items-center pulse-border">
      <div className="window-div listen-panel justify-center panel text-xl flex flex-col items-center w-1/3" onClick={() => navigate("/listen")}>
        <h2 className="text-center mt-4 text-2xl text-white">「 l i s t e n 」</h2>
      </div>
      <div className="window-div bio-panel justify-center text-xl panel flex flex-col items-center w-1/3" onClick={() => navigate("/bio")}>
        <h2 className="text-center mt-4 text-2xl text-white">「 a b o u t 」</h2>
      </div>
      <div className="window-div bandcamp-panel justify-center text-xl panel flex flex-col items-center w-1/3"  onClick={() => window.open("https://coattheband.bandcamp.com/", "_blank")}>
        <h2 className="text-center mt-4 text-2xl text-white">「 b a n d c a m p 」</h2>
      </div>
    </div>
  );
};

export default Windows;

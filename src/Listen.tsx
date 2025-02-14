import React, { useState, useEffect } from "react";

const Listen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="listen flex flex-col items-center justify-center min-h-screen">
      <h1>Listen</h1>
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-lg font-semibold animate-pulse">Loading...</p>
        </div>
      ) : (
        <div>
        <div className="youtube grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center w-full mt-8">                
          <div className="m-auto"><iframe width="500" height="315" src="https://www.youtube.com/embed/9f59A-X0570?si=3NRxGjKBMAdCAq9o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
          <div className="m-auto"><iframe width="500" height="315" src="https://www.youtube.com/embed/D25OfCbxZdE?si=WuCNkByBxkn0pmjE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
          <div className="m-auto"><iframe width="500" height="315" src="https://www.youtube.com/embed/Fxx7UDfw6tY?si=uHkw6ogDQlUUE_9q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
          <div className="m-auto"><iframe width="500" height="315" src="https://www.youtube.com/embed/S5VK0YN5Qgg?si=y6_9uMxmIpeZ0sG3" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
        </div>

          <div className="spotify-wrapper grid grid-cols-1 md:grid-cols-2 gap-8 p-8 m-8 w-full">   
            <div className="playlist w-full"><iframe style={{ borderRadius: "12px", zIndex: "1000" }} src="https://open.spotify.com/embed/artist/7fAvIUJJUk4DIckyRczLmW?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>
            <div className="playlist w-full"><iframe allow="autoplay *; encrypted-media *;" height="400" style={{width:"100%", maxWidth:"660px", overflow:"hidden", background:"transparent"}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/coat-ep/1725241427"></iframe></div>
          </div>     
        </div>
      )} 
    </div>
  );
};

export default Listen;

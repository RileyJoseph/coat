import React, { useState, useEffect } from "react";

// Define message type
interface Message {
  sender: "user" | "bot";
  text: string;
}

const Listen: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("bg-white");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const API_BASE_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8888/.netlify/functions/api"
      : "/.netlify/functions/api";

  // Function to send messages
  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch(`${API_BASE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      setMessages([...newMessages, { sender: "bot", text: data.message }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { sender: "bot", text: "Error occurred." }]);
    }
  };

  // Simulate loading effect
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app-body vapor-lounge flex flex-col items-center min-h-screen">
      <div className="canvas-mask">
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
        <div className="spotify-wrapper">
        <iframe
          style={{ borderRadius: "12px", zIndex: "1000" }}
          src="https://open.spotify.com/embed/playlist/7iR7csX0rnBiSs3knrlbbn?si=b65db3b5b88447af?utm_source=generator"
          width="50%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Playlist"
          className="spotify"
        ></iframe>
        </div>      
      </div>          
    </div>
  );
};

export default Listen;

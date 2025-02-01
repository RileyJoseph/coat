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
    <div className="app-body vapor-lounge flex flex-col items-center justify-center min-h-screen">
      <div className="overlay"></div>
      <div className={`overlay glitch ${bgColor}`}></div>

      {isLoading ? (
        <img
          src="/images/loading.gif"
          alt="Loading..."
          className="w-64 h-64 mb-4"
        />
      ) : (
        <>
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

        </>
      )}
    </div>
  );
};

export default Listen;

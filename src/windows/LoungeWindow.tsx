import { useNavigate } from "react-router-dom";

const LoungeMirror: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate("/listen"); // Navigate to the BookRecommendations page
  };

  return (
    <div 
      id="mirror" 
      onClick={handleClick} 
      className="cursor-pointer mirror"
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <div id="mirror-content"></div>
    </div>
  );
};

export default LoungeMirror;
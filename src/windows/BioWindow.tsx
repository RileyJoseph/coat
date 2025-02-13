import React from "react";
import { useNavigate } from "react-router-dom";

const BioWindow: React.FC = () => {
  const navigate = useNavigate();

  // Handle navigation on click
  const handleClick = (): void => {
    navigate("/bio");
  };

  return (
    <div
      id="mirror-two"
      onClick={handleClick}
      className="cursor-pointer mirror"
      role="button"
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      <div id="mirror-content-two"></div>
    </div>
  );
};

export default BioWindow;

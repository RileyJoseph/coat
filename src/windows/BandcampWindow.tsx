import React from "react";

const BandcampWindow: React.FC = () => {
  // Function to handle clicks and open a new tab
  const handleClick = (): void => {
    window.open("https://coattheband.bandcamp.com/", "_blank");
  };

  return (
    <div
      id="mirror-three"
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
      <div id="mirror-content-three"></div>
    </div>
  );
};

export default BandcampWindow;

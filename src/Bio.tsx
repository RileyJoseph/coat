import React, { useState, useEffect } from "react";

const Bio: React.FC = () => {
  
  return (
    <div className="about-us flex items-center min-h-screen">
      <div className="about-us-hero flex items-center">
        {/* <img className="bio-pic" src="/images/band-psych.JPG" alt="picture of the band Coat" /> */}
        <h1>About Us</h1>        
        <div className="bio-text">        
          <p>Coat is a 5-piece psychedelic rock band out of Oklahoma City, Oklahoma. 
          Bringing together members of OKC groups Twiggs, Swim Fan, Computer Girl and 
          Johnny Manchild, Coat is a group of musicians with a wide range of 
          musical backgrounds and interests. Only one EP into their life as a band, the 
          group's music already spans a wide sonic landscape. As they gear up to write 
          and record their debut album, the band plans to expand their live show experience
          and dive deeper into the well of experimental sound.
          </p>
          <br />
          <p className="bold">Coat is anti-facist and promotes love and inclusion. Bigots can get fucked.</p>
          <br />
          <p>Support us by buying our music on <a target="_blank" href="https://coattheband.bandcamp.com/">Bandcamp.</a></p>
          <p>Support Oklahoma Teachers <a href="https://catapultrecordings.bandcamp.com/album/help-oklahoma-teachers" target="_blank">here</a></p>
        </div>    
      </div>
    </div>
  );
};

export default Bio;

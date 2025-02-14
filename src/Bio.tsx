import React from "react";

const Bio: React.FC = () => {
  
  return (
    <div className="about-us flex min-h-screen">
      {/* <img className="bio-pic w-half md:w-1/2" src="/images/coat-marquee.JPG" alt="picture of the band Coat" /> */}
      <div className="bio-pic w-half md:w-full sm:w-full"></div>
      <div className="about-us-text flex items-center justify-center w-half md:w-full sm:w-full">
        <h1 className="blue">About Us</h1>        
        <div className="bio-text">        
          <p>Coat is a 5-piece psychedelic rock band out of Oklahoma City, Oklahoma. 
          Bringing together members of OKC groups Twiggs, Swim Fan, Computer Girl and 
          Johnny Manchild, Coat is a group of musicians with a wide range of 
          musical backgrounds and interests. Only one EP into their life as a band, the 
          group's music already spans a wide sonic landscape pulling inspiration from artists like Angel Olsen 
          to groups like The Oh Sees. As they gear up to write 
          and record their debut album, the band plans to expand their live show experience
          and dive deeper into the well of experimental sound.
          </p>
          <br />
          <p>Support us by buying our music on <a className="underline" target="_blank" href="https://coattheband.bandcamp.com/">Bandcamp.</a></p>
          <p>Support Oklahoma Teachers <a className="underline" href="https://catapultrecordings.bandcamp.com/album/help-oklahoma-teachers" target="_blank">here.</a></p>
          <br />
          <p><span className="blue">Hannah Edmondson</span> - vocals, EWI, guitar</p>
          <p><span className="blue">Alex Coleman</span> - guitar, synth</p>
          <p><span className="blue">Justin McCullough</span> - bass</p>
          <p><span className="blue">Ryan Mcguire</span> - drums</p>
          <p><span className="blue">Riley Joseph</span> - guitar</p>
          <br />
          <p className="bold">Coat is anti-facist and promotes love and inclusion. <br /> Bigots can get fucked.</p>
          
        </div>    
      </div>
    </div>
  );
};

export default Bio;

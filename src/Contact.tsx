import React from "react";

const Contact: React.FC = () => {
  
  return (
    <div className="about-us flex min-h-screen">
      {/* <img className="bio-pic w-half md:w-1/2" src="/images/coat-marquee.JPG" alt="picture of the band Coat" /> */}
      <div className="bio-pic w-half md:w-full sm:w-full"></div>
      <div className="about-us-text flex items-center justify-center w-half md:w-full sm:w-full">
        <h1 className="">Contact</h1>        
        <div className="bio-text">        
          <p>For all booking inquries please contact: <br />
          <a href="mailto:coattheband@gmail.com" className="hover:underline">coattheband@gmail.com</a>
          </p>
          <br />
          <p>Support us by buying our music on <a className="underline" target="_blank" href="https://coattheband.bandcamp.com/">Bandcamp.</a></p>
          <p>Support Oklahoma Teachers <a className="underline" href="https://catapultrecordings.bandcamp.com/album/help-oklahoma-teachers" target="_blank">here.</a></p>

          <p className="bold">Coat is anti-facist and promotes love and inclusion. <br /> Bigots can get fucked.</p>
          
        </div>    
      </div>
    </div>
  );
};

export default Contact;

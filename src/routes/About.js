import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from "../components/AboutContent";

const About= () => {
  return (
    <div>
      {/* Order in which component will be displayed */}
      <Navbar />
      {/* sample text that will override the text in the HeroImg2 component */}
      <HeroImg2 heading="ABOUT" text ="I am a cybersecurity enthusiast"/>
      <AboutContent/>
      <Footer />
    </div>
  );
};
export default About;
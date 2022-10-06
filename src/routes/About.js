import React from "react";
import AboutContent from "../components/About/AboutContent";
import Footer from "../components/Footer/Footer";
import Heroimg2 from "../components/Hero/HeroImg2";
import Navbar from "../components/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text="I`m a friendly Front-End Developer." />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;

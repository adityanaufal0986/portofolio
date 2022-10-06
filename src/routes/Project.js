import React from "react";
import Footer from "../components/Footer/Footer";
import Heroimg2 from "../components/Hero/HeroImg2";
import Navbar from "../components/Navbar/Navbar";
import PricingCard from "../components/Price/PricingCard";
import Work from "../components/Work/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;

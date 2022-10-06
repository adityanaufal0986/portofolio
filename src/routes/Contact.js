import React from "react";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import Heroimg2 from "../components/Hero/HeroImg2";

import Navbar from "../components/Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT." text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;

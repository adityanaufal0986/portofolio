import "./Footer.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Magelang</p>
              <p>Indonesia</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              1-2323-343-23
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              adityanaufal504@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            This is me Aditya Naufal.Student of Vocational High Scool 2
            Magelang. I enjoy discussing new projects and design challenges
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

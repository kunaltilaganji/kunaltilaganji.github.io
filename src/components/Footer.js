import "./FooterStyles.css";
import React from 'react';
import {FaHome, FaPhone,  FaMailBulk, FaFacebook, FaLinkedin, FaTwitter, FaAddressBook} from "react-icons/fa";


// FOOTER section contains following contents:
// 1) Address 
// 2) Phone number
// 3) Email
// 4) About the author
// 5) Social media links which are not redirected to any page (WORK ON THAT)

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            {/* YOUR LOCATION IN THE FOOTER SECTION */}
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Tiara 305 Hiranandani Estate</p>
              {/* /<p> Thane , Maharashtra</p> */}
              <p> India</p>
            </div>
          </div>

          <div className="phone">
            {/* PHONE NUMBER REVEALED */}
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
               1234567890  {/*<--Phone number */}
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              tilganjikunal@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4> About the Author</h4>
          <p>
            Welcome to my website . Hope you enjoyed it. Feel free to contact me
            if you have any queries.
          </p>
          <div className="social">
            {/* THIS IS FACEBOOK HERE */}
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            {/* THIS IS TWITTER HERE */}
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

            {/* THIS IS LINKEDIN HERE */}

            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
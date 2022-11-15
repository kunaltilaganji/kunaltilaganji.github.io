import "./AboutContentStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import React1 from"../assets/react1.jpg"
import React2 from"../assets/react2.webp"

const AboutContent = () => {
  return (
   <div className= "about">
        <div className= "left">
          <h1> Who am i? </h1>
          <p> I am a student Who intends to expand his knowlegde and work on projects and innovate.</p>
        
        {/*Button which provides Direct Link to Contact page */}

          <Link  to= "/contact">
            <button className= "btn"> Contact Me 
            </button>
            
          </Link>
        </div>
        Arranging the images in a row
        <div className= "right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={React1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
              <img src={React2} className="img" alt="true"/>
            </div>
            
          </div>
        </div>
    </div>
  );
};

export default AboutContent;
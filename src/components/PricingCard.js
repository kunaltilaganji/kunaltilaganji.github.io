import "./PricingCardStyles.css"
import React from 'react'
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
  <div className="pricing">
    <div className="card-container">
        <div className="card">
            <h3>-BASIC-</h3>
            <span className="bar"></span>
            <p className="btc">$ 1000 </p>
            <p>-3 Days</p> 
            <p>-3 Pages</p> 
            <p>-Featured</p> 
            <p>-Resposive Design</p> 
            <Link to = "/contact" className="btn">
                Purachase Now
            </Link>
        </div>
        <div className="card">
            <h3>-PREMIUM-</h3>
            <span className="bar"></span>
            <p className="btc">$ 20000 </p>
            <p>-5 Days</p> 
            <p>-7 Pages</p> 
            <p>-Featured</p> 
            <p>-Resposive Design</p> 
            <Link to = "/contact" className="btn">
                Purachase Now
            </Link>
        </div>
        <div className="card">
            <h3>-BUSINESS-</h3>
            <span className="bar"></span>
            <p className="btc">$ 30000 </p>
            <p>-5 Days</p> 
            <p>-7 Pages</p> 
            <p>-Featured</p> 
            <p>-Resposive Design</p> 
            <Link to = "/contact" className="btn">
                Purachase Now
            </Link>
        </div>
    </div>
  </div>);
};

export default PricingCard;
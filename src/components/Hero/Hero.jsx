
import React from 'react';
import './Hero.css';
import bgImg from '../../assets/images/hero.jpg'

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="container">
        <div className="hero-content">
            <span>
                GET STARTED WITH AUDIBLE
            </span>
            <h1>Listen to audiobooks, podcasts, Audible Originals and more</h1>
        
            <button className="hero-btn">Start your 30-day free trial</button>
            <p>₹199 per month after 30-day trial. Cancel anytime. Now accepting UPI payment method.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;

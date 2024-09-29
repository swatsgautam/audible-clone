import React from 'react';
import heroContentImg from '../../assets/images/Non_Member_Benefits_Banner.jpg';
import './HeroContent.css'
const HeroContent = () => {
  return (
    <div className="hero-text-block" style={{ backgroundImage: `url(${heroContentImg})` }}>
        <div className="container">
            <div className="hero-text-content">
                <div className="hero-text-header">
                    <h2>What you get</h2>
                    <span>As an Amazon Prime member, your free 30-day trial comes with:</span>
                </div>
                
                <div className="hero-text-list">
                    <ul>
                        <li>
                            <i className="fa fa-check"></i>
                            <h3>2 credits to use on any 2 titles of your choice—yours to keep, even if you cancel.</h3>
                        </li>
                        <li>
                            <i className="fa fa-check"></i>
                            <h3>The Plus Catalogue—listen all you want to thousands of audiobooks, podcasts, and Audible Originals.</h3>
                        </li>
                        <li>
                            <i className="fa fa-check"></i>
                            <h3>No commitment—cancel anytime.</h3>
                        </li>
                    </ul>
                </div>
                <div className="hero-text-btn">
                    <button className="hero-btn">Start your 30-day free trial</button>
                    <p>₹199 per month after 30-day trial. Cancel anytime. Now accepting UPI payment method.</p>
                </div>            
            </div>
        </div>
    </div>  
  );
};

export default HeroContent;

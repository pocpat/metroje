import React from 'react';
import '../../styles/Footer.css';
import waba from '../../srcAssets/waba.jpg';
import kolos from '../../srcAssets/kolos.jpg';
import ba from '../../srcAssets/ba.jpg';
import fb from '../../srcAssets/fb.jpg';
import insta from '../../srcAssets/inst.jpg';
import li from '../../srcAssets/li.jpg';
import twit from '../../srcAssets/twit.jpg';

const Footer = () => {
  return (
    <div className="fContainer">
      <div className="fsubscribe">
        <h2>subscribe to our newsletter</h2>
        <div className="finput">
          <button>Subscribe</button>
          <input type="text" placeholder="Enter your email address" />
        </div>
      </div>

      <div className="flogos">
        <img src={waba} alt="waba" />
        <img src={kolos} alt="kolos" />
        <img src={ba} alt="ba" />
      </div>
      <div className="ficons">
        <img src={fb} alt="fb" />
        <img src={insta} alt="instagram" />
        <img src={li} alt="linkedin" />
        <img src={twit} alt="twitter" />
      </div>
      <div className="fcontact">
        <p>Level 33, ANZ Centre, 23-29 Albert St, Auckland 1010, New Zealand</p>
        <p> © 2022 Metro NZ Property Management</p>
    </div>
    </div>
  );
};

export default Footer;

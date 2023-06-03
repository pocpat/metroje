import React from 'react';
import redimg from '../../srcAssets/s2hands.jpg';
const HomeCardIcons = () => {
  return (
    <div className="hsiContainer">
      <img src={redimg} alt="redimg" className="hciImg" />
      <p>
        Changing to Metro NZ is easy. Just give us a few details and we’ll do
        the rest. We work with landlords, renters, building owners, and property
        investors.
      </p>
    </div>
  );
};

export default HomeCardIcons;

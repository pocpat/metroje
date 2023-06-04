import React from 'react';
import '../../styles/LilHeader.css';

const LilHeader = () => {
  return (
    <div className="rhBody">
      <p>09 391 4642</p>
      <p>info@metronz.co.nz</p>
      <input className="lh_search" type="text" placeholder="Search" />
      <button className="rhBtn">LOGIN</button>
    </div>
  );
};

export default LilHeader;

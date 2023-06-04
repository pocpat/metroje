import React from 'react';
import '../../styles/HomeSection1.css';
import house from '../../srcAssets/house.jpg';

const HomeSection1 = () => {
  return (
    <div className="s1container">
      <section className="s1Left">
        <div className="s1Title">
          <h1>
            Expertise.
            <br /> Integrity.
            <br /> Harmony.{' '}
          </h1>
          <h4>Property Management Auckland</h4>
        </div>
        <div className="s1BTNs">
          <button className="btn">Property owners</button>
          <button className="btn">Tenants</button>
        </div>
      </section>
      <section className="s1Right">
        <img src={house} alt="house pic" className="s1house" />
      </section>
    </div>
  );
};

export default HomeSection1;

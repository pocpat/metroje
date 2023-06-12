import React from 'react';
import '../../styles/HomeSection2.css';
import HomeCardIcons from './HomeCardIcons';
import {cards} from '../../srcAssets/card-map-data/Section2MapData';


const HomeSection2 = () => {
  return (
    <div className="s2Container">
        {cards.map((card) => (
          <HomeCardIcons image={card.image} text={card.text} />
        ))}
    </div>
  );
};

export default HomeSection2;

import React from 'react';
import '../../styles/HomeSection3.css';
import HomeCardPeople from './HomeCardPeople';
import { people } from '../../srcAssets/card-map-data/Section3MapData';

const HomeSection3 = () => {
  return (
    <>
      <div className="s3Container">
      {people.map((person) => (
          <HomeCardPeople name= {person.name} city={person.city} image={person.image} text={person.text} />
        ))}
      </div>
      <hr />
    </>
  );
};

export default HomeSection3;

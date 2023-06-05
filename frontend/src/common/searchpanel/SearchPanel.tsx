import React from 'react';
import '../../styles/SearchPanel.css';
import BedroomsSelectLabels from './BedroomsFadeMenu';
import LocationFadeMenu from './LocationFadeMenu';
import PropertytypeSelectLabels from './PropertytypeFadeMenu';
import RentmaxSelectLabels from './RentmaxFadeMenu';
import RentminSelectLabels from './RentminFadeMenu';




const SearchPanel = () => {
  return (
    <div className="spContainer">
      <p>Search our available listings</p>
      <section className="spWhiteSearch">
        <div className="spLocation">
          <label>Location</label>
          <input type="text" />
        </div>
        <div className="spSuburb">
          <label>Suburb</label>
          <input type="text" />
        </div>
      </section>
      <section className="spGraySearch">
        <div className="spRentMin">
          <RentminSelectLabels/>
        </div>
        <div className="spRentMax">
          <RentmaxSelectLabels/>
        </div>
        <div className="spBedrooms"> 
        <BedroomsSelectLabels />
        </div>
        <div className="spPropertyType">
          <PropertytypeSelectLabels />
        </div>
      </section>
      <section className="spSearchButton">
        <button>Search</button>
      </section>
    </div>
  );
};

export default SearchPanel;
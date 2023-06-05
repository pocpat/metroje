import React, {useState} from 'react';
// import '../../styles/SearchPanel.css';

const SearchPanel = () => {
  const[open, setOpen] = useState(false);
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
          <label>Rent Min</label>
          <input type="number"  />
        </div>
        <div className="spRentMax">
          <label>Rent Max</label>
          <input type="number" />
        </div>
        <div className="spBedrooms">
          <label>Bedrooms</label>
          <input type="number" />
        </div>
        <div className="spPropertyType">
          <label>Property Type</label>
          <input type="text" />
        </div>
      </section>
      <section className="spSearchButton">
        <button>Search</button>
      </section>
    </div>
  );
};

export default SearchPanel;

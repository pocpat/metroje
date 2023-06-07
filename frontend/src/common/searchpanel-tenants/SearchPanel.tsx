import React from 'react';
import { useState } from 'react';
import '../../styles/SearchPanel.css';
import BedroomsSelectLabels from './BedroomsFadeMenu';
import PropertytypeSelectLabels from './PropertytypeFadeMenu';
import RentmaxSelectLabels from './RentmaxFadeMenu';
import RentminSelectLabels from './RentminFadeMenu';
import { FormData } from '../../../types';
import axios from 'axios';

const SearchPanel = () => {
  const [formData, setFormData] = useState<FormData>({
    location: '',
    suburb: '',
    rentmin: 0,
    rentmax: 0,
    bedrooms: 0,
    propertytype: '',
  });
  const [rmin, setRmin] = useState(0);
  const [rmax, setRmax] = useState(0);
  const [bed, setBed] = useState(0);
  const [propertytype, setPropertytype] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };

  // const handleRentMinChange = (value:) => {
  //   setRmin(parseInt(e.target.value));
  // }

  const handleSubmit = () => {
    formData.rentmin = rmin;
    formData.rentmax = rmax;
    formData.bedrooms = bed;
    console.log(formData);
    // Send the form data to the backend server using Axios
    axios
      .post('http://localhost:8080/rents/results', formData)
      .then((response) => {
        // Handle the response from the backend server
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div className="spContainer">
      <p>Search our available listings</p>
      <section className="spWhiteSearch">
        <div className="spLocation">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="spSuburb">
          <label>Suburb</label>
          <input
            type="text"
            name="suburb"
            value={formData.suburb}
            onChange={handleChange}
          />
        </div>
      </section>
      <section className="spGraySearch">
        <div className="spRentMin">
          <RentminSelectLabels rmin={rmin} setRmin={setRmin}/>
        </div>
        <div className="spRentMax">
          <RentmaxSelectLabels rmax={rmax} setRmax={setRmax}
          />
        </div>
        <div className="spBedrooms">
          <BedroomsSelectLabels  bed={bed}  setBed={setBed}/>
        </div>
        <div className="spPropertyType">
          <PropertytypeSelectLabels />
        </div>
      </section>
      <section className="spSearchButton">
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </section>
    </div>
  );
  // TODO: <CardHero cardata={cardData} />;
};

export default SearchPanel;

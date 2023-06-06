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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
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
          <RentminSelectLabels />
        </div>
        <div className="spRentMax">
          <RentmaxSelectLabels />
        </div>
        <div className="spBedrooms">
          <BedroomsSelectLabels />
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
};

export default SearchPanel;

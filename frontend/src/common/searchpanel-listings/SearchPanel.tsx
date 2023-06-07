import React from 'react';
import { useState } from 'react';
import '../../styles/SearchPanel.css';
import BedroomsSelectLabels from '../searchpanel-tenants/BedroomsFadeMenu';
import PropertytypeSelectLabels from '../searchpanel-tenants/PropertytypeFadeMenu';
import RentmaxSelectLabels from '../searchpanel-tenants/RentmaxFadeMenu';
import RentminSelectLabels from '../searchpanel-tenants/RentminFadeMenu';
import { FormData } from '../../../types';
import axios from 'axios';
import RefineSearch from './RefineSearch';
import { SearchPanelProps } from '../../../types/props';

const SearchPanel = ({ cardData, setCardData }: SearchPanelProps) => {
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
  const [results, setResults] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    formData.rentmin = rmin;
    formData.rentmax = rmax;
    formData.bedrooms = bed;
    // Send the form data to the backend server using Axios
    axios
      .get('http://localhost:8080/rents/results', { params: formData })
      .then((response) => {
        // Handle the response from the backend server
        console.log(response.data);
        setCardData(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
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
          <RentminSelectLabels rmin={rmin} setRmin={setRmin} />
        </div>
        <div className="spRentMax">
          <RentmaxSelectLabels rmax={rmax} setRmax={setRmax} />
        </div>
        <div className="spBedrooms">
          <BedroomsSelectLabels bed={bed} setBed={setBed} />
        </div>
        <div className="spPropertyType">
          <PropertytypeSelectLabels />
        </div>
      </section>
      <section className="spSearchButton">
        <button type="submit" onClick={handleOpenModal}>
          Refine Search
        </button>
        <RefineSearch openModal={openModal} onCloseModal={handleCloseModal} />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </section>
    </div>
  );
};

export default SearchPanel;

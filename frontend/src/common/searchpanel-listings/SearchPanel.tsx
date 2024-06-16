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
import ButtonHero from '../buttons/ButtonHero';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';  // new 1

const SearchPanel = ({ cardData, setCardData }: SearchPanelProps) => {
  const [formData, setFormData] = useState<FormData>({
    location: '',
    suburb: '',
    rentmin: 0,
    rentmax: 0,
    bedrooms: 0,
    propertytype: 0,
  });
  const [rmin, setRmin] = useState(0);
  const [rmax, setRmax] = useState(0);
  const [bed, setBed] = useState(0);
  const [results, setResults] = useState<any[]>([]);
  const [propertytype, setPropertytype] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.trim(),
    }));
  };


  const handleSubmit = () => {
    const searchParams = {
      ...formData,
      rentmin: rmin,
      rentmax: rmax,
      bedrooms: bed,
    };
    console.log('Form Data from SearchPanel.tsx :', searchParams);


    // Send the form data to the backend server using Axios
    axios
      .get('http://localhost:8080/rents/results', { params: searchParams })
      .then((response) => {
          console.log(
            'Response Data from SearchPanel.tsx. Handle the response from the backend server :', 
            response.data);
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
          <PropertytypeSelectLabels propertytype={propertytype}  setPropertytype={setPropertytype}/>
        </div>
      </section>
      <section className="spSearchButton">
        <ButtonHero
        onClick={handleOpenModal}
        backgroundColor="#ffffff"
        border= " #410909"
        color=" #410909"
        text="REFINE SEARCH"
        width="200px"
        height='50px'
        />
        <RefineSearch openModal={openModal} onCloseModal={handleCloseModal} />
        <ButtonHero
        onClick={handleSubmit}
        backgroundColor=" #E4353C"
        border= "#E4353C"
        color="#EFEFEF"
        text="SEARCH"
        width="140px"
        height='50px'
        />
      </section>
    </div>
  );
};

export default SearchPanel;

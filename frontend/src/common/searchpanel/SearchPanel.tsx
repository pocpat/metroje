import React from 'react';
import '../../styles/SearchPanel.css';
import BedroomsSelectLabels from './BedroomsFadeMenu';
import PropertytypeSelectLabels from './PropertytypeFadeMenu';
import RentmaxSelectLabels from './RentmaxFadeMenu';
import RentminSelectLabels from './RentminFadeMenu';


interface FormData {
  location: string;
  suburb: string;
  rentmin: number;
  rentmax: number;
  bedrooms: number;
  propertytype: string;
}
const SearchPanel = () => {
  // // const handleSubmit = () => {
  //   // Get the values of the inputs and dropdown menus
  //   const locationValue = document.querySelector('.spLocation input').value;
  //   const suburbValue = document.querySelector('.spSuburb input').value;
  //   const rentminValue = document.querySelector('.spRentMin input').value;
  //   const rentmaxValue = document.querySelector('.spRentMax input').value;
  //   const bedroomsValue = document.querySelector('.spBedrooms input').value;
  //   const propertytypeValue = document.querySelector('.spPropertyType input').value;


    // // Create an object with the form data
    // const formData: FormData = {
    //   location: locationValue,
    //   suburb: suburbValue,
    //   rentmin: rentminValue,
    //   rentmax: rentmaxValue,
    //   bedrooms: bedroomsValue,
    //   propertytype: propertytypeValue
    // };


//  // Send the form data to the backend server
//  fetch('http://localhost:8080/rents/filter', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(formData)
// })
// .then(response => response.json())
// .then(data => {
//   // Handle the response from the backend server
//   console.log(data);
// })
// .catch(error => {
//   // Handle any errors
//   console.error(error);
// });
// };

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
        <button type='submit' 
        // onClick={handleSubmit}
        >Search</button>
      </section>
    </div>
  );
};



export default SearchPanel;
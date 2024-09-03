// =============================== NEW 2 ====================================
import React, { useState } from 'react';
import '../../styles/SearchPanel.css';
import BedroomsSelectLabels from './BedroomsFadeMenu';
import PropertytypeSelectLabels from './PropertytypeFadeMenu';
import RentmaxSelectLabels from './RentmaxFadeMenu';
import RentminSelectLabels from './RentminFadeMenu';
import axios from 'axios';
import ButtonHero from '../buttons/ButtonHero';
import { SearchPanelProps } from '../../../types';
import { CardData } from '../../../types';

const SearchPanel: React.FC<SearchPanelProps> = ({ onSearchResults }) => {  
  const [formData, setFormData] = useState({
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
    console.log('handleChange formData:', formData);
  };

  const handleSubmit = () => {
    const updatedFormData = {
      ...formData,
      rentmin: rmin,
      rentmax: rmax,
      bedrooms: bed,
      propertytype: propertytype,
    };
    console.log('formData from search-panel handleSubmit FE:', updatedFormData);

    // Validate formData before sending
    if (isNaN(rmin) || isNaN(rmax) || isNaN(bed) || !propertytype) {
      console.error('Invalid form data');
      return;
    }

    // Send the form data to the backend server using Axios
    axios
      .post('http://localhost:8080/rents/results', updatedFormData)
      .then((response) => {
        // Handle the response from the backend server
        console.log('response from the backend server:', response.data);
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
          <RentminSelectLabels rmin={rmin} setRmin={setRmin} />
        </div>
        <div className="spRentMax">
          <RentmaxSelectLabels rmax={rmax} setRmax={setRmax} />
        </div>
        <div className="spBedrooms">
          <BedroomsSelectLabels bed={bed} setBed={setBed} />
        </div>
        <div className="spPropertyType">
          <PropertytypeSelectLabels
            propertytype={propertytype}
            setPropertytype={setPropertytype}
          />
        </div>
      </section>
      <section className="spSearchButtonTenants">
        <ButtonHero
          onClick={handleSubmit}
          backgroundColor=" #E4353C"
          border="#E4353C"
          color="#EFEFEF"
          text="SEARCH"
          width="140px"
          height="50px"
        />
      </section>
    </div>
  );
};

export default SearchPanel;

// =============================== NEW 1 ====================================
// import React from 'react';
// import { useState } from 'react';
// import '../../styles/SearchPanel.css';
// import BedroomsSelectLabels from './BedroomsFadeMenu';
// import PropertytypeSelectLabels from './PropertytypeFadeMenu';
// import RentmaxSelectLabels from './RentmaxFadeMenu';
// import RentminSelectLabels from './RentminFadeMenu';
// import { FormData } from '../../../types';
// import axios from 'axios';
// import ButtonHero from '../buttons/ButtonHero';
// import { SearchPanelProps } from '../../../types';
// import { Dispatch, SetStateAction } from 'react';
// import { CardData } from '../../../types';

// // export interface SearchPanelProps {
// //   cardData: CardData[];
// //   setCardData: Dispatch<SetStateAction<CardData[]>>;
// // }



// const SearchPanel: React.FC<SearchPanelProps> = ({ onSearchResults }) => {  
//   const [formData, setFormData] = useState({
//     location: '',
//     suburb: '',
//     rentmin: 0,
//     rentmax: 0,
//     bedrooms: 0,
//     propertytype: '',
//   });
//   const [rmin, setRmin] = useState(0);
//   const [rmax, setRmax] = useState(0);
//   const [bed, setBed] = useState(0);
//   const [propertytype, setPropertytype] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//     console.log('handleChange formData:', formData);
//   };

//   const handleSubmit = () => {
//     const updatedFormData = {
//       ...formData,
//       rentmin: rmin,
//       rentmax: rmax,
//       bedrooms: bed,
//       propertytype: propertytype,
//     };
//     console.log('formData from search-panel handleSubmit FE:', updatedFormData);

//     // Validate formData before sending
//     if (isNaN(rmin) || isNaN(rmax) || isNaN(bed) || !propertytype) {
//       console.error('Invalid form data');
//       return;
//     }

//     // Send the form data to the backend server using Axios
//     axios
//       .post('http://localhost:8080/rents/results', updatedFormData)
//       .then((response) => {
//         // Handle the response from the backend server
//         console.log('response from the backend server:', response.data);
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error(error);
//       });
//   };

//   return (
//     <div className="spContainer">
//       <p>Search our available listings</p>
//       <section className="spWhiteSearch">
//         <div className="spLocation">
//           <label>Location</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="spSuburb">
//           <label>Suburb</label>
//           <input
//             type="text"
//             name="suburb"
//             value={formData.suburb}
//             onChange={handleChange}
//           />
//         </div>
//       </section>
//       <section className="spGraySearch">
//         <div className="spRentMin">
//           <RentminSelectLabels rmin={rmin} setRmin={setRmin} />
//         </div>
//         <div className="spRentMax">
//           <RentmaxSelectLabels rmax={rmax} setRmax={setRmax} />
//         </div>
//         <div className="spBedrooms">
//           <BedroomsSelectLabels bed={bed} setBed={setBed} />
//         </div>
//         <div className="spPropertyType">
//           <PropertytypeSelectLabels
//             propertytype={propertytype}
//             setPropertytype={setPropertytype}
//           />
//         </div>
//       </section>
//       <section className="spSearchButtonTenants">
//         <ButtonHero
//           onClick={handleSubmit}
//           backgroundColor=" #E4353C"
//           border="#E4353C"
//           color="#EFEFEF"
//           text="SEARCH"
//           width="140px"
//           height="50px"
//         />
//       </section>
//     </div>
//   );
// };

// export default SearchPanel;










// =============================== OLD ====================================
// const SearchPanel = () => {
//   const [formData, setFormData] = useState<FormData>({
//     location: '',
//     suburb: '',
//     rentmin: 0,
//     rentmax: 0,
//     bedrooms: 0,
//     propertytype: '',
//   });
//   const [rmin, setRmin] = useState(0);
//   const [rmax, setRmax] = useState(0);
//   const [bed, setBed] = useState(0);
//   const [propertytype, setPropertytype] = useState('');


//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//     console.log("handleChange formData:", formData);
//   };

 

//   const handleSubmit = () => {
//     formData.rentmin = rmin;
//     formData.rentmax = rmax;
//     formData.bedrooms = bed;
//     formData.propertytype = propertytype;
//     console.log("formData from search-panel handleSubmit FE: ",formData);

//         // Validate formData before sending
//         if (isNaN(rmin) || isNaN(rmax) || isNaN(bed) || !propertytype) {
//           console.error("Invalid form data");
//           return;
//         }


//     // Send the form data to the backend server using Axios
//     axios
//       .post('http://localhost:8080/rents/results', formData)
//       .then((response) => {
//         // Handle the response from the backend server
//         console.log("response from the backend server: " , response.data);
//       })
//       .catch((error) => {
//         // Handle any errors
//         console.error(error);
//       });
//   };

//   return (
//     <div className="spContainer">
//       <p>Search our available listings</p>
//       <section className="spWhiteSearch">
//         <div className="spLocation">
//           <label>Location</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="spSuburb">
//           <label>Suburb</label>
//           <input
//             type="text"
//             name="suburb"
//             value={formData.suburb}
//             onChange={handleChange}
//           />
//         </div>
//       </section>
//       <section className="spGraySearch">
//         <div className="spRentMin">
//           <RentminSelectLabels rmin={rmin} setRmin={setRmin}/>
//         </div>
//         <div className="spRentMax">
//           <RentmaxSelectLabels rmax={rmax} setRmax={setRmax}
//           />
//         </div>
//         <div className="spBedrooms">
//           <BedroomsSelectLabels  bed={bed}  setBed={setBed}/>
//         </div>
//         <div className="spPropertyType">
//         <PropertytypeSelectLabels propertytype={propertytype} setPropertytype={setPropertytype}/>
//         </div>
//       </section>
//       <section className="spSearchButtonTenants">
//         <ButtonHero
//         onClick={handleSubmit}
//         backgroundColor=" #E4353C"
//         border= "#E4353C"
//         color="#EFEFEF"
//         text="SEARCH"
//         width="140px"
//         height='50px'
//         />
//       </section>
//     </div>
//   );
// };

// export default SearchPanel;

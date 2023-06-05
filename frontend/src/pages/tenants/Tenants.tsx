import React, {useState, useEffect} from 'react';
import axios from "axios";
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import SearchPanel from '../../common/SearchPanel';

const Tenants = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() =>{
    axios.get('http://localhost:8080/rents/filter').then((response) =>{
        setProperties(response.data)
          
      })
  }, []);
  return (
    <div>
      <Header />
      <SearchPanel />
      {/* <div className="Rents">
        {properties.map(property => (
          <div key={property._id}>
            <h3>{property.location}</h3>
            <p>Suburb: {property.suburb}</p>
            <p>Rent price: {property.rentprice}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Property type: {property.propertytype}</p>
          </div>
        ))}
      </div> */}
      <Footer />
    </div>
  );
};

export default Tenants;

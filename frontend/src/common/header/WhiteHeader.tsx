import React from 'react';
import { useState } from 'react';
import '../../styles/WhiteHeader.css';
import banner from '../../srcAssets/bannerTest_1.jpg';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
// const[open, setOpen] = useState(false);




  return (
    <div className="wh_navigation">
      <img src={banner} alt="Image" className="wh_img" />
      {/* wh_hamburger  */}
      <button
        className="wh_hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? 'wh_navigation-menu expanded' : 'wh_navigation-menu'
        }
      >
        <ul>
          <li>
            <a href="/#" 
            // onClick={()=> setOpen(!open)}
            >Owners</a>
           
          </li>
          <li>
            <a href="/#" className='whTenants' >Tenants</a>
          </li>
          <li>
            <a href="/#" >Services</a>
          </li>
          <li>
            <a href="/#" >Listings</a>
          </li>
          <li>
            <a href="/#" >About Us</a>
          </li>
          <li>
            <a href="/#">News</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

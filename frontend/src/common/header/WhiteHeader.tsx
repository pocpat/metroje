import React from 'react';
import { useState } from 'react';
import '../../styles/WhiteHeader.css';
// import banner from '../../../srcAssets/IconPics/logosmall.png';
import TenantsFadeMenu from './TenantsFadeMenu';
import OwnersFadeMenu from './OwnersFadeMenu';
import ServicesFadeMenu from './ServicesFadeMenu';
import ListingsFadeMenu from './ListingsFadeMenu';
import AboutFadeMenu from './AboutFadeMenu';  
import NewsFadeMenu from './NewsFadeMenu';
// import hamburger from '../../srcAssets/IconPics/hamburger.png';
// import logosmall from '../../srcAssets/IconPics/logosmall.png';
import bannerTest_1 from '../../srcAssets/bannerTest_1.jpg';
import hamburger from '../../srcAssets/hamburger.png';




export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
// const[open, setOpen] = useState(false);




  return (
    <div className="wh_navigation">
     <a href="/" title="Home">
  <img src={bannerTest_1} alt="Image" className="wh_img" />
</a>
      {/* wh_hamburger  */}
      <button
        className="wh_hamburger"
      
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      
      >
        <img
          src={hamburger}
          alt="Hamburger"
          className="wh_hamburger-icon"
        />
      </button>
     
      <div
        className={
          isNavExpanded ? 'wh_navigation-menu expanded' : 'wh_navigation-menu'
        }
      >
        <ul>
        
          <li>
          <OwnersFadeMenu/>
          </li>
          <li>
            <TenantsFadeMenu/>
          </li>
          <li>
          <ServicesFadeMenu/> 
          </li>
          <li>
           <ListingsFadeMenu/>
          </li>
          <li>
          <AboutFadeMenu/>  
          </li>
          <li>
           <NewsFadeMenu/>
          </li>
        </ul>
      </div>
    </div>
  );
}

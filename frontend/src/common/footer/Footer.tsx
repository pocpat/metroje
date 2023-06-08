import React from 'react';
import '../../styles/Footer.css';
import waba from '../../srcAssets/footer/waba3.png';
import kolos from '../../srcAssets/footer/kolos3.png';
import ba from '../../srcAssets/footer/ba3.png';
import fb from '../../srcAssets/IconsPics/fbicon.png';
import insta from '../../srcAssets/IconsPics/insta.png';
import li from '../../srcAssets/IconsPics/li.png';
import twit from '../../srcAssets/IconsPics/tw.png';
import location from '../../srcAssets/IconsPics/location.png';
import ButtonHero from '../buttons/ButtonHero';


const Footer = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="fContainer">
      <div className="fsubscribe">
        <p>subscribe to our newsletter</p>
        <div className="finput">
          {/* <button>Subscribe</button> */}

          <ButtonHero
        backgroundColor=" #E4353C"
        border= "#E4353C"
        color="#EFEFEF"
        text="SUBSCRIBE"
        width="150px"
        onClick={handleClose}
        height='40px'
      />

          <input type="text"  />
        </div>
      </div>

      <div className="flogos">
        <img src={waba} alt="waba" />
        <img src={kolos} alt="kolos" />
        <img src={ba} alt="ba" />
      </div>
      <div className="ficons">
        <img src={fb} alt="fb" />
        <img src={insta} alt="instagram" />
        <img src={li} alt="linkedin" />
        <img src={twit} alt="twitter" />
      </div>
      <div className="fcontact">
        <p><img src={location} alt="location" />
        Level 33, ANZ Centre, 23-29 Albert St, Auckland 1010, New Zealand</p>
        <p> © 2022 Metro NZ Property Management</p>
    </div>
    </div>
  );
};

export default Footer;

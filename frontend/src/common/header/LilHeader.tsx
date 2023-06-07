import React from 'react';
import '../../styles/LilHeader.css';
import { CiSearch } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import ButtonHero from '../buttons/ButtonHero';

const LilHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="rhBody">
      <BsTelephone className="" style={{ color: 'red' }} />
      <p>09 391 4642</p>
      <GoMail style={{ color: 'red' }} />
      <p>info@metronz.co.nz</p>
      <input className="lh_search" type="text" placeholder="Search" />
      <CiSearch style={{ color: 'red' }} />
      {/* <button className="rhBtn">LOGIN</button> */}

      <ButtonHero
        backgroundColor=" #E4353C"
        border= "#E4353C"
        color="#EFEFEF"
        text="LOGIN"
        width="100px"
        onClick={handleClose}
        height="40px"
      />
    </div>
  );
};

export default LilHeader;

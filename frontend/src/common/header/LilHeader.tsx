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
      <BsTelephone className="" style={{ color: 'red',fontSize:"25" }} />
      <p>09 391 4642</p>
      <GoMail style={{ color: 'red',fontSize:"25" }} />
      <p>info@metronz.co.nz</p>
      <div style={{ position: 'relative' }}>
  <input className="lh_search" type="text"  />
  <CiSearch style={{ position: 'absolute', right: '15px', top: '5px', color: 'red', fontSize: '20px', fontWeight:'bold' }} />
</div>

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

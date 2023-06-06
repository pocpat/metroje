import React from 'react';
import '../../styles/LilHeader.css';
import { CiSearch } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const LilHeader = () => {
  return (
    <div className="rhBody">
      <BsTelephone className='' style={{ color: 'red' }} />
      <p>09 391 4642</p>
      <GoMail style={{ color: 'red' }} />
      <p>info@metronz.co.nz</p>
      <input className="lh_search" type="text" placeholder="Search" />
      <CiSearch style={{ color: 'red' }} />
      <button className="rhBtn">LOGIN</button>
    </div>
  );
};

export default LilHeader;

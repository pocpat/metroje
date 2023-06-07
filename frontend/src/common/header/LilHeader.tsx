import React from 'react';
import '../../styles/LilHeader.css';
import { CiSearch } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

const LilHeader = () => {
  const phone = {
    color: 'red',
    width: '1.15rem',
    height: '1.15rem',
  };

  const mail = {
    color: 'red',
    width: '1.5rem',
    height: '1.25rem',
    pr: 0,
  };

  const search = {
    color: 'red',
    width: '1.25rem',
    height: '1.25rem',
  };

  return (
    <div className="rhBody">
      <BsTelephone style={phone} />
      <p>09 391 4642</p>
      <GoMail style={mail} />
      <p>info@metronz.co.nz</p>
      <input className="lh_search" type="text" placeholder="Search" />
      <CiSearch style={search} />
      <button className="rhBtn">LOGIN</button>
    </div>
  );
};

export default LilHeader;

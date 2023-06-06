import React from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import SearchPanel from '../../common/searchpanel/SearchPanel';
import ActionAreaCard from '../../common/CardHero';
// import { Sort } from '@mui/icons-material';
import SortPanel from '../sortPanel/SortPanel';
const Tenants = () => {
  console.log('CardHero is being rendered');
  return (
    <div>
      <Header />
      <SearchPanel />
      <SortPanel />
      <ActionAreaCard />
      <Footer />
    </div>
  );
};

export default Tenants;

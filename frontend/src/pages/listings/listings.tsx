import React from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import SearchPanel from '../../common/searchpanel-listings/SearchPanel';
import ActionAreaCard from '../../common/CardHero';
import SortPanel from '../sortPanel/SortPanel';

const Listings = () => {
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

export default Listings;

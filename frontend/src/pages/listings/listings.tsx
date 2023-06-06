import React from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import SearchPanel from '../../common/searchpanel/SearchPanel';
import ActionAreaCard from '../../common/CardHero';

const Tenants = () => {
  return (
    <div>
      <Header />
      <SearchPanel />
      <ActionAreaCard />
      <Footer />
    </div>
  );
};

export default Tenants;

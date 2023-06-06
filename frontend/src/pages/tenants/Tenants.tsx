import React from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import SearchPanel from '../../common/searchpanel-tenants/SearchPanel';
import ActionAreaCard from '../../common/CardHero';
const Tenants = () => {
  console.log('CardHero is being rendered');

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

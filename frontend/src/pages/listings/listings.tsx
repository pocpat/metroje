import React, { useState } from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import SearchPanel from '../../common/searchpanel-listings/SearchPanel';
import ActionAreaCard from '../../common/CardHero';
// import ActionAreaCardCarousel from "../../common/Carousel/CardHeroCarousel"
import SortPanel from '../sortPanel/SortPanel';
import { CardData } from '../../../types';

const Listings = () => {
  const [cardData, setCardData] = useState<CardData[]>([]);

  return (
    <div>
      <Header />
      <SearchPanel   cardData={cardData} setCardData={setCardData} />
      <SortPanel />
      <ActionAreaCard cardData={cardData} setCardData={setCardData} />
{/* <ActionAreaCardCarousel cardData={cardData} setCardData={setCardData} /> */}


      <Footer />
    </div>
  );
};

export default Listings;

import React from 'react';
import Header from '../../common/header/Header';
import HomeSection1 from './HomeSection1';
import HomeSection2 from './HomeSection2';
import HomeSection3 from './HomeSection3';
import HomeSection3Carousel from '../../common/Carousel/HomeSection3Carousel';
import HomeSection4 from './HomeSection4';
import Footer from '../../common/footer/Footer';
// import  '../../styles/HomeSection3Carousel.css';
// import HomeSection3Carousel from './HomeSection3Carousel';

import '../../styles/Home.css';
const Home = () => {
  return (
    <div className="homePageContainer">
      <Header />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      {/* <HomeSection3Carousel/> */}
      <HomeSection4 />
      <Footer />
    </div>
  );
};

export default Home;

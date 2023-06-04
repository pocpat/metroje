import React from 'react'
import Header from '../../common/header/Header'
import HomeSection1 from './HomeSection1'
import HomeSection2 from './HomeSection2'
import HomeSection3 from './HomeSection3'
import HomeSection4 from './HomeSection4'
import Footer from '../../common/footer/Footer'
const Home = () => {
  return (
    <div>
      <Header/>
      <HomeSection1/>
      <HomeSection2/> 
      <HomeSection3/>
      <HomeSection4/>
      <Footer/> 
      
    
    </div>
  )
}

export default Home
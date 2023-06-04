import React from 'react'
import '../../styles/HomeSection3.css'
import HomeCardPeople from './HomeCardPeople'


const HomeSection3 = () => {
  return (
    <>
    <div className='hcpContainer'>
      <HomeCardPeople/>
      <HomeCardPeople/>
      <HomeCardPeople/>
    </div>
    <hr/>
    </>
  )
}

export default HomeSection3
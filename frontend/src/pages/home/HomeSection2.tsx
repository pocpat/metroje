import React from 'react'
import '../../styles/HomeSection2.css'
import HomeCardIcons from './HomeCardIcons'
import Fr1 from '../../srcAssets/section2Imgs/Fr1.png';
import Fr2 from '../../srcAssets/section2Imgs/Fr2.png';
import Fr3 from '../../srcAssets/section2Imgs/Fr3.png';
import Fr4 from '../../srcAssets/section2Imgs/Fr4.png';



const HomeSection2 = () => {
  return (
    <div className='s2Container'>   
 
    
<HomeCardIcons
image={Fr1}
text="Changing to Metro NZ is easy. Just give us a few details and we’ll do the rest. We work with landlords, renters, building owners, and property investors."
/>
<HomeCardIcons
image={Fr2}
text="We specialize in selling tenanted properties, so you can relax knowing your investment is in good hands. We tailor our services to your needs."
/>
<HomeCardIcons
image={Fr3}
text="We conduct a thorough appraisal of your property based on current market rates. We will help you get the most from your investment."
/>
<HomeCardIcons
image={Fr4}
text="Every property we manage is Healthy Homes compliant and in good condition. We work with you to get the best from your property."
/>
</div>
  )
}

export default HomeSection2
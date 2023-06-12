import React from 'react';
import Header from '../../common/header/Header';
import Footer from '../../common/footer/Footer';
import SearchPanel from '../../common/searchpanel-tenants/SearchPanel';
import tenantsimg from '../../srcAssets/houses/tenantsimg.png';
import grfLndsc from '../../srcAssets/tntsgraph_landsc.jpg';
import '../../styles/Tenants.css';
const Tenants = () => {
  console.log('CardHero is being rendered');

  return (
    <div>
      <Header />
      <SearchPanel />
      <div className="tenantsContainer">
      <main className=""  
      style={{ backgroundImage: `url(${tenantsimg})`, 
      backgroundSize: 'cover', backgroundPosition: 'center bottom'
     }} 
      >
        <article className="tenantsContainer__main--text">
          <h1>Happy Tenants - Our Mission</h1>
          <p>
            At Metro NZ Property Management we pride ourselves on the superior
            quality of our rentals.
          </p>
          <p>
            We have properties across New Zealand and overseas, so there are
            many opportunities to find your dream home.
          </p>
          <p>
            We work with property owners who are committed to offering the best,
            so you can be sure your new home will be in great condition when you
            move in, and will stay that way throughout your tenancy.
          </p>
          <div></div>
        </article>
        
      </main>
      <article className="tenantsContainer__Graph"> 
        <img src={grfLndsc} alt="tenants graph" className="tenantsContainer__Graph--img" />
        </article>  
{/* <img src={tenantsimg} alt="tenantsimg" className="tntsImg" /> */}
</div>
      <Footer />
    </div>
  );
};
export default Tenants;

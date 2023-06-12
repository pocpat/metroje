import React from 'react';
import '../../styles/HomeSection1.css';
import house from '../../srcAssets/house.jpg';
import ButtonHero from '../../common/buttons/ButtonHero';
const HomeSection1 = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="s1container">
      <section className="s1container__left">
        <div className="s1container__left--title">
          <h1>
            Expertise.
            <br /> Integrity.
            <br /> Harmony.
          </h1>
          <p>Property Management Auckland</p>
        </div>
        <div className="s1container__left--buttons">
          <ButtonHero
            backgroundColor=" #E4353C"
            border="#E4353C"
            color="#EFEFEF"
            text="PROPERTY OWNERS"
            width="230px"
            onClick={handleClose}
            height="50px"
          />
          <ButtonHero
            backgroundColor=" #E4353C"
            border="#E4353C"
            color="#EFEFEF"
            text="TENANTS"
            width="140px"
            onClick={handleClose}
            height="50px"
          />
        </div>
      </section>
      <section className="s1container__right">
        <img
          src={house}
          alt="house pic"
          className="s1container__right--house"
        />
      </section>
    </div>
  );
};

export default HomeSection1;

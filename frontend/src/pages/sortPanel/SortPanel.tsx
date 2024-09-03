import React from 'react';
import '../../styles/SortPanel.css';
import SortFadeMenu from '../../common/searchpanel-tenants/SortFadeMenu';



const SortPanel = () => {
  return (
    <div className="spListingsContainer">
      Sort By 
      <SortFadeMenu />
    </div>
  );
};

export default SortPanel;

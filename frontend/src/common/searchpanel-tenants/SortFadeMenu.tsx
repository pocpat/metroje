import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Sort from '../../srcAssets/smallIconsPng/sortArrow.png';
import {
    menuItemSelectStyle,
    formHelperTextSelectorStyle,
    selectInputGreyStyle,
  } from './menuItemSelectStyle';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [sortOption, setSortOption] = React.useState<string>('');
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (option: string) => {
    setSortOption(option);
    // Add your sorting logic here
    console.log(`Sorting by: ${option}`);
  };

  const handleMenuItemClick = (option: string) => {
    handleSort(option);
    handleClose();
  };

  return (
    <div>
      <img src={Sort} alt="sort" id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}/>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleMenuItemClick('Newest')} sx={menuItemSelectStyle}>Newest</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Lowest Price')} sx={menuItemSelectStyle}>Lowest Price</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Highest Price')} sx={menuItemSelectStyle}>Highest Price</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Featured')} sx={menuItemSelectStyle}>Featured</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('Earliest Inspection')} sx={menuItemSelectStyle}>Earliest Inspection</MenuItem>
      </Menu>
    </div>
  );
}



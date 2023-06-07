import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import '../../styles/WhiteHeader.css';


export default function TenantsFadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: ' #410909', fontWeight: 'bold'}}
      >
        Tenants
      </Button>
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
        <MenuItem className ='linkedText' onClick={handleClose}><a href="/tenants">Tenant Information</a></MenuItem>
        <MenuItem onClick={handleClose}> Tenant FAQs</MenuItem>
        <MenuItem className ='linkedText'onClick={handleClose}><a href="/listings">View Listings</a></MenuItem>
        <MenuItem onClick={handleClose}>Maintenance Request Form</MenuItem>
      </Menu>

    </div>
  );
}
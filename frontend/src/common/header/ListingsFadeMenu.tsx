import * as React from 'react';
import Button from '@mui/material/Button';


const ListingsFadeMenu = () => {
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
        className ='linkedText'
        sx={{color: ' #410909', fontWeight: 'bold'}}
      >
       <a href="/listings">Listings</a>
      </Button>
    </div>
  )
}

export default ListingsFadeMenu
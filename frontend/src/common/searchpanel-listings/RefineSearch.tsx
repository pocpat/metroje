import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
} from '@mui/material';
import React from 'react';
import { RefineSearchProps } from '../../../types';
import '../../styles/popup.css';

export default function RefineSearch({
  openModal,
  onCloseModal,
}: RefineSearchProps) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30vw',
    height: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '8px',
    boxShadow: 24,
    pl: 4,
    pr: 4,
  };

  const checkStyle = {
    fontFamily: 'Open Sans',
    fontSize: '1.125rem',
    color: 'black',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 3fr)',
    gap: '0.25, 0.5',
  };

  return (
    <div>
      <Modal open={openModal} onClose={onCloseModal}>
        <Box sx={style}>
          <div className="titleSpace">
            <h3>Advanced Search</h3>
          </div>
          <div>
            <h3>Property Requirements</h3>
            <FormGroup sx={checkStyle}>
              <FormControlLabel control={<Checkbox />} label="Furnished" />
              <FormControlLabel control={<Checkbox />} label="Pets OK" />
              <FormControlLabel control={<Checkbox />} label="Available Now" />
            </FormGroup>
          </div>
          <br />
          <br />
          <div>
            <h3>Nearby Amenities</h3>
            <FormGroup sx={checkStyle}>
              <FormControlLabel control={<Checkbox />} label="Supermarket" />
              <FormControlLabel control={<Checkbox />} label="Gym" />
              <FormControlLabel control={<Checkbox />} label="Park" />
              <FormControlLabel control={<Checkbox />} label="School" />
            </FormGroup>
          </div>
          <br />
          <br />
          <div>
            <h3>Outdoor Features</h3>
            <FormGroup sx={checkStyle}>
              <FormControlLabel control={<Checkbox />} label="Garage" />
              <FormControlLabel control={<Checkbox />} label="Balcony" />
              <FormControlLabel control={<Checkbox />} label="Fully Fenced" />
              <FormControlLabel control={<Checkbox />} label="Swimming Pool" />
              <FormControlLabel control={<Checkbox />} label="Shed" />
              <FormControlLabel control={<Checkbox />} label="Outdoor Area" />
            </FormGroup>
          </div>
          <br />
          <br />
          <div>
            <h3>Indoor Features</h3>
            <FormGroup sx={checkStyle}>
              <FormControlLabel control={<Checkbox />} label="Dishwasher" />
              <FormControlLabel control={<Checkbox />} label="Fibre" />
              <FormControlLabel control={<Checkbox />} label="Heating" />
              <FormControlLabel control={<Checkbox />} label="Study/Office" />
              <FormControlLabel control={<Checkbox />} label="Alarm System" />
              <FormControlLabel
                control={<Checkbox />}
                label="Air Conditioning"
              />
            </FormGroup>
          </div>
          <br />
          <br />
          <div className="popupFooter">
            <Button href="#text-buttons" sx={{ color: 'black' }}>
              CLEAR FILTERS
            </Button>
            <Button variant="contained" sx={{ bgcolor: '#e4353c' }}>
              APPLY FILTERS
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

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

export default function RefineSearch({openModal, onCloseModal}: RefineSearchProps) {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    return (
   
    <div>
      <Modal open={openModal} onClose={onCloseModal}>
        <Box sx={style}>
          <div className="titleSpace">
            <h1 className="popupTitle">Advanced Search</h1>
          </div>
          <div>
            <h1>Property Requirements</h1>
            <br />
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Furnished" />
              <FormControlLabel control={<Checkbox />} label="Pets OK" />
              <FormControlLabel control={<Checkbox />} label="Available Now" />
            </FormGroup>
          </div>
          <br />
          <br />
          <div>
            <h1>Nearby Amenities</h1>
            <br />
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Supermarket" />
              <FormControlLabel control={<Checkbox />} label="Gym" />
              <FormControlLabel control={<Checkbox />} label="Park" />
              <FormControlLabel control={<Checkbox />} label="School" />
            </FormGroup>
          </div>
          <br />
          <br />
          <div>
            <h1>Outdoor Features</h1>
            <br />
            <FormGroup>
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
            <h1>Indoor Features</h1>
            <br />
            <FormGroup>
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
          <div className='popupFooter'>
          <Button href="#text-buttons">Clear Filters</Button><Button variant="contained">Apply Filters</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

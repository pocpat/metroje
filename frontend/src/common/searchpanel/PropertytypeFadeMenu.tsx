import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
  menuItemSelectStyle,
  formHelperTextSelectorStyle,
  selectInputGreyStyle,
} from './menuItemSelectStyle';

export default function PropertytypeSelectLabels() {
  const [proptype, setProptype] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setProptype(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <FormHelperText sx={formHelperTextSelectorStyle}>
          Property Type
        </FormHelperText>
        <Select
          value={proptype}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={selectInputGreyStyle}
        >
          <MenuItem value="" sx={menuItemSelectStyle}>
            <em> </em>
          </MenuItem>
          <MenuItem value={1} sx={menuItemSelectStyle}>
            All
          </MenuItem>
          <MenuItem value={2} sx={menuItemSelectStyle}>
            House
          </MenuItem>
          <MenuItem value={3} sx={menuItemSelectStyle}>
            Townhouse
          </MenuItem>
          <MenuItem value={4} sx={menuItemSelectStyle}>
            Unit
          </MenuItem>
          <MenuItem value={5} sx={menuItemSelectStyle}>
            Carpark
          </MenuItem>
          <MenuItem value={6} sx={menuItemSelectStyle}>
            Apartment
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

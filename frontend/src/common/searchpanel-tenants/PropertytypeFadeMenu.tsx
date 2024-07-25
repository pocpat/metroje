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
import { PropertyTypesSelectProps } from '../../../types/props';

export default function PropertytypeSelectLabels({propertytype, setPropertytype}:PropertyTypesSelectProps) {
  //const [proptype, setProptype] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPropertytype(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <FormHelperText sx={formHelperTextSelectorStyle}>
          Property Type
        </FormHelperText>
        <Select
          value={propertytype}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={selectInputGreyStyle}
        >
          <MenuItem value={0} sx={menuItemSelectStyle}>
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

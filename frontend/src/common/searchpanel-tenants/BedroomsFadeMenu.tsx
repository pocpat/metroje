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
import { BedroomsSelectProps } from '../../../types/props';

export default function BedroomsSelectLabels({
  bed,
  setBed,
}: BedroomsSelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setBed(parseInt(event.target.value));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <FormHelperText sx={formHelperTextSelectorStyle}>
          Bedrooms
        </FormHelperText>
        <Select
          value={bed.toString()}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={selectInputGreyStyle}
        >
          <MenuItem value="">
            {' '}
            <em></em>{' '}
          </MenuItem>
          <MenuItem value={1} sx={menuItemSelectStyle}>
            1
          </MenuItem>
          <MenuItem value={2} sx={menuItemSelectStyle}>
            2
          </MenuItem>
          <MenuItem value={3} sx={menuItemSelectStyle}>
            3
          </MenuItem>
          <MenuItem value={4} sx={menuItemSelectStyle}>
            4
          </MenuItem>
          <MenuItem value={5} sx={menuItemSelectStyle}>
            5 or more
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

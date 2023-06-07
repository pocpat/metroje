import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { menuItemSelectStyle, formHelperTextSelectorStyle,selectInputGreyStyle } from './menuItemSelectStyle';    

interface RentminSelectLabelsProps {
  rmin: number;
  setRmin: (value: number) => void;
}

export default function RentminSelectLabels({ rmin, setRmin }: RentminSelectLabelsProps) {
  
  const handleChange = (event: SelectChangeEvent) => {
    setRmin(parseInt(event.target.value));
  };

  return (
    <div>
     
     
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormHelperText
            sx={formHelperTextSelectorStyle}

      >Rent Min</FormHelperText>

        <Select
          value={rmin.toString()}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={selectInputGreyStyle}

        >
          <MenuItem value=""><em></em> </MenuItem>
          <MenuItem value={0} sx={menuItemSelectStyle}>$0</MenuItem>
          <MenuItem value={100} sx={menuItemSelectStyle}>$100</MenuItem>
          <MenuItem value={200} sx={menuItemSelectStyle}>$200</MenuItem>
          <MenuItem value={300} sx={menuItemSelectStyle}>$300</MenuItem>
          <MenuItem value={500} sx={menuItemSelectStyle}>$500</MenuItem>
          <MenuItem value={1000} sx={menuItemSelectStyle}>$1000 or more</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { menuItemSelectStyle, formHelperTextSelectorStyle,selectInputGreyStyle } from './menuItemSelectStyle';    


export default function RentminSelectLabels() {
  const [rmin, setRnim] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRnim(event.target.value);
  };

  return (
    <div>
     
     
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormHelperText
            sx={formHelperTextSelectorStyle}

      >Rent Min</FormHelperText>

        <Select
          value={rmin}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={selectInputGreyStyle}

        >
          <MenuItem value=""><em></em> </MenuItem>
          <MenuItem value={1} sx={menuItemSelectStyle}>$0</MenuItem>
          <MenuItem value={2} sx={menuItemSelectStyle}>$100</MenuItem>
          <MenuItem value={3} sx={menuItemSelectStyle}>$200</MenuItem>
          <MenuItem value={4} sx={menuItemSelectStyle}>$300</MenuItem>
          <MenuItem value={5} sx={menuItemSelectStyle}>$500</MenuItem>
          <MenuItem value={6} sx={menuItemSelectStyle}>$1000 or more</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

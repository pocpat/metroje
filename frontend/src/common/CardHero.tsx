import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import homeImg from '../srcAssets/houses/h1.png';
import bdrNum from '../srcAssets/smallIconsPng/bdr.png';
import bfrNum from '../srcAssets/smallIconsPng/bfr.png';
import car from '../srcAssets/smallIconsPng/car.png';
import wish from '../srcAssets/smallIconsPng/wish.png';
export default function CardHero() {
  return (
    <>
    <Card sx={{ maxWidth: 300, borderRadius:4 }}>

 
      <CardActionArea 
      // sx={{ maxWidth: 345, border: '1px solid red' }}
      >
        <CardMedia
          component="img"
          height="140"
          image={homeImg}
          alt="house image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  $350
  <img src={wish} alt="bedroom number" style={{ height: '100%' }} />
</div>
 <br></br>
          Address    <br></br>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: 40 }}>
          <img src = {bdrNum} alt = "bedroom number" style={{ marginRight: 8 }}></img>  1</div>
          <div style={{ marginRight: 40 }}>
          <img src = {bfrNum} alt = "bedroom number"style={{ marginRight: 8 }}></img>  2</div>
          <div style={{ marginRight: 40 }}>
          <img src = {car} alt = "bedroom number"style={{ marginRight: 8 }}></img>  3</div>
          </Typography>
        </CardContent>
      </CardActionArea> 
    </Card> 
    </>
  );
}

            {/* {rentprice } */}
            {/* {bedrooms} */}
            {/* {carparking} */}
            {/* {location}+","+{suburb} */}

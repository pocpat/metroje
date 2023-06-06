import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea} from '@mui/material';
import homeImg from '../srcAssets/houses/h1.png';
import bdrNum from '../srcAssets/smallIconsPng/bdr.png';
import bfrNum from '../srcAssets/smallIconsPng/bfr.png';
import car from '../srcAssets/smallIconsPng/car.png';
import wish from '../srcAssets/smallIconsPng/wish.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardData } from '../../types';

export default function CardHero() {
  const [cardData, setCardData] = useState<CardData[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/rents')
      .then((res) => setCardData(res.data))
      .catch((error) => {
        console.error('Error fetching card data:', error);
      });
  }, []);

  return (
    <>
      {cardData && cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 300, borderRadius: 4 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={homeImg}
              alt="house image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  {card.rentprice ? card.rentprice : 'Loading...'}
                  <img
                    src={wish}
                    alt="bedroom number"
                    style={{ height: '100%' }}
                  />
                </div>
                <br></br>
                {card.location}, {card.suburb} <br></br>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: 'flex', flexDirection: 'row' }}
              >
                <div style={{ marginRight: 40 }}>
                  <img
                    src={bdrNum}
                    alt="bedroom number"
                    style={{ marginRight: 8 }}
                  ></img>
                  {card.bedrooms}
                </div>
                <div style={{ marginRight: 40 }}>
                  <img
                    src={bfrNum}
                    alt="bedroom number"
                    style={{ marginRight: 8 }}
                  ></img>
                  {card.bathrooms}
                </div>
                <div style={{ marginRight: 40 }}>
                  <img
                    src={car}
                    alt="bedroom number"
                    style={{ marginRight: 8 }}
                  ></img>
                  {card.carparks}
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}

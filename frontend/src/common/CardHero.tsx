import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from '@mui/material';
import homeImg from '../srcAssets/houses/h1.png';
import bdrNum from '../srcAssets/smallIconsPng/bdr.png';
import bfrNum from '../srcAssets/smallIconsPng/bfr.png';
import car from '../srcAssets/smallIconsPng/car.png';
import wish from '../srcAssets/smallIconsPng/wish.png';
import axios from 'axios';
import { CardData } from '../../types';
import '../styles/CardHero.css';
import { CardHeroProps } from '../../types/props';

let sortOption = 'h';

export default function CardHero({ cardData, setCardData }: CardHeroProps) {
  const [visibleCards, setVisibleCards] = useState(6);

  let responseHandler = (cardDataArray: CardData[]) => {
    let sortedData = cardDataArray.sort((a: CardData, b: CardData) => {
      //  switch case for sorting
      switch (sortOption) {
        case 'l': {
          // by lowest price
          if (a.rentprice < b.rentprice) {
            return -1;
          }
          if (a.rentprice > b.rentprice) {
            return 1;
          }
          return 0;
        }
        case 'h': {
          // by highest price
          if (a.rentprice > b.rentprice) {
            return -1;
          }
          if (a.rentprice < b.rentprice) {
            return 1;
          }
          return 0;
        }
        default:
          return 0;
      }
    });
    setCardData(sortedData);
  };

  useEffect(() => {
    if (cardData != undefined && cardData.length === 0) {
      axios
        .get('http://localhost:8080/rents')
        .then((response) => {
          responseHandler(response.data);
        })
        .catch((error) => {
          console.error('Error fetching card data:', error);
        });
    }
  }, []);

  const handleShowMore = () => {
    setVisibleCards(visibleCards + 3); // Increase the number of visible cards as desired
  };

  return (
    <div>
      <div className="cardsContainer">
        {cardData &&
          cardData.map((card, index) => (
            <Card
              key={index}
              className={`cardsList ${index >= visibleCards ? 'hidden' : ''}`}
            >
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
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      {card.rentprice ? card.rentprice : 'Loading...'}
                      <img src={wish} alt="wish" style={{ height: '100%' }} />
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
                        alt="beathroom number"
                        style={{ marginRight: 8 }}
                      ></img>
                      {card.bathrooms}
                    </div>
                    <div style={{ marginRight: 40 }}>
                      <img
                        src={car}
                        alt="carparck number"
                        style={{ marginRight: 8 }}
                      ></img>
                      {card.carparks}
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </div>
      <div className="showMore">
        <button onClick={handleShowMore}>SHOW MORE</button>
      </div>
    </div>
  );
}

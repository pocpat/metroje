import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from '@mui/material';
import homeImg from '../../srcAssets/houses/h1.png';
import bdrNum from '../../srcAssets/smallIconsPng/bdr.png';
import bfrNum from '../../srcAssets/smallIconsPng/bfr.png';
import car from '../../srcAssets/smallIconsPng/car.png';
import wish from '../../srcAssets/smallIconsPng/wish.png';
import axios from 'axios';
import { CardData } from '../../../types';
import '../../styles/CardHeroCarousel.css';
import { CardHeroProps } from '../../../types/props';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

let sortOption = 'h';

export default function CardHeroCarousel({
  cardData,
  setCardData,
}: CardHeroProps) {
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <Arrow className={undefined} style={undefined} onClick={undefined} />
    ),
    prevArrow: (
      <Arrow className={undefined} style={undefined} onClick={undefined} />
    ),
  };
  function Arrow(props: { className: any; style: any; onClick: any }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#5eb1bf' }}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      <div className="SliderContainer">
        <Slider {...settings}>
          {cardData &&
            cardData.map((card, cardIndex) => {
              return (
                <Card key={cardIndex} className="cardsList">
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
                          <img
                            src={wish}
                            alt="wish"
                            style={{ height: '100%' }}
                          />
                        </div>
                        <br />
                        {card.location}, {card.suburb} <br />
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
                          />
                          {card.bedrooms}
                        </div>
                        <div style={{ marginRight: 40 }}>
                          <img
                            src={bfrNum}
                            alt="bathroom number"
                            style={{ marginRight: 8 }}
                          />
                          {card.bathrooms}
                        </div>
                        <div style={{ marginRight: 40 }}>
                          <img
                            src={car}
                            alt="carpark number"
                            style={{ marginRight: 8 }}
                          />
                          {card.carparks}
                        </div>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

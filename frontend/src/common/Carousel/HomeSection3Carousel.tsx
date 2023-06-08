import React from 'react';
import '../../styles/HomeSection3Carousel.css';
import HomeCardPeople from '../../pages/home/HomeCardPeople';
import person1 from '../../srcAssets/section3Imgs/person1.png';
import person2 from '../../srcAssets/section3Imgs/person2.png';
import person3 from '../../srcAssets/section3Imgs/person3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const HomeSection3Carousel = () => {
  return (
    <>
      <div className="hcpContainer">
        <Slider>
          <HomeCardPeople
            name="Jane"
            city="Auckland"
            image={person1}
            text="My experience was really good from start to finish. Frank and Zsuzsanna have both gone over and above my expectations as property managers. They are the main reason I was able to leave both my properties as rentals instead of selling them. Thank you so much. "
          />
          <HomeCardPeople
            name="Elliot"
            city="Wellington"
            image={person2}
            text="I've been using Metro Property Management for a year now, and I couldn't be happier. Their team is highly professional, responsive, and efficient. The peace of mind I have knowing my investment is in good hands is invaluable. Highly recommended!"
          />
          <HomeCardPeople
            name="Stephen"
            city="Auckland"
            image={person3}
            text="Metro NZ Property Management has been a game-changer for me. From finding reliable tenants to handling maintenance requests promptly, they excel in every aspect of property management. Their transparent communication and personalized service make them stand out."
          />
        </Slider>
      </div>
      <hr />
    </>
  );
};

export default HomeSection3Carousel;

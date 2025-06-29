import React from 'react';
import { poojaDummyData } from '../assets/assets';
import Card from './Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from './Title';

const FeaturedPooja = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    appendDots: (dots) => (
      <div className="slick-dots-container">
        <ul>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="relative flex flex-wrap justify-center items-center gap-6 ">
      <Title 
        title="Featured Poojas" 
        subTitle="Explore a variety of sacred rituals, each designed to bring peace, prosperity, and divine blessings to your life."
      />
      <div className="w-full max-w-screen-xl px-9 relative">
        <Slider {...settings} className="featured-pooja-slider">
          {poojaDummyData.map((pooja) => (
            <div key={pooja._id} className="flex justify-center">
              <Card pooja={pooja} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedPooja;

import React from 'react';
import { useSelector } from 'react-redux';
import { RestCard } from '../Cards/index';
import { Slider, Container, Text, Navigate, Button } from './styels';
import { Link } from "react-router-dom";
import { icons_img } from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import { Restaurant_Card } from "../../constants/interfaces";

export default function PopularRestaurants() {
  const restaurants = useSelector((state: any) => state.popularRestaurants.value);
 
  return (
    <Container>
      <Text>popular restaurant in epicure:</Text>
      <Slider>
        <Swiper
        spaceBetween={24}
          breakpoints={{
            // when window width is >= 280px
            280: {
              width: 280,
              slidesPerView: 1,
            },
            // when window width is >= 360px
            360: {
              width: 360,
              slidesPerView: 1.4,
            },
            // when window width is >= 540px
            540: {
              width: 540,
              slidesPerView: 2,
            },
          }}
        >
          { restaurants && restaurants.map((res: Restaurant_Card, index: number) => (
            <SwiperSlide key={index}>
              <RestCard res={res} page={"home"} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Slider>
      <Navigate>
        <p> All Restaurants</p>
        <Button  > <Link to='/Restaurants'>
          <img src={icons_img.navigate} alt="res" />
        </Link></Button>
      </Navigate>
    </Container>
  )
}
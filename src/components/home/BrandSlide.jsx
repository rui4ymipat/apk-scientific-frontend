import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { ImageListItem } from '@mui/material';

function BrandSlide(props) {
  return (
    <Swiper 
    loop={true}
    slidesPerView={5}
    spaceBetween={10}
    modules={[Autoplay]} 
    autoplay={{
      delay: 4500
    }}
    breakpoints={{
    0: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 10,
    },
    1024: {
        slidesPerView: 5,
        spaceBetween: 10,
    },
    }}
    className="carousel-custom">
      {props.data.map((item, idx)=>{return (
        <SwiperSlide key={idx}>
          <ImageListItem sx={{height: {xs:'auto', xl:355}, width: '100%'}}>
              <img src={item.img} style={{width: '100%', maxHeight:'100%'}} alt='logo' loading='lazy' />
          </ImageListItem>
        </SwiperSlide>
      )})}
    </Swiper>
  )
}

export default BrandSlide
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { ImageListItem } from '@mui/material';


function ShelfSlide(props) {
  return (
    <Swiper 
    navigation={true}
    loop={true}
    slidesPerView={4}
    spaceBetween={20}
    modules={[Navigation, Pagination, Autoplay]} 
    hashNavigation={{
      watchState: true,
    }}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 3500
    }}
    breakpoints={{
    0: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 20,
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

export default ShelfSlide
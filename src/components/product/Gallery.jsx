import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  GlassMagnifier,
} from "react-image-magnifiers";

// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import useWindowSize from "../../hook/useWindowSize";

// ===================================== function main ===================================
function Gallery({data=[""]}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sizeWindow = useWindowSize();

  
  // ==================== Mode desktop ========================
  if(sizeWindow.width > 1370) {
  
    return data[0] !== "" ? (
      <>
        {/* Preview */}
        <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="t-thumbs-preview carousel-custom"
        >
          {data.map((img, idx)=>{
            return(
            <SwiperSlide key={"desk"+idx}>
                <Zoom>
                  <GlassMagnifier
                    square={true}
                    magnifierBorderSize={1}
                    magnifierSize={"40%"}
                    className="t-img-fluid t-img-detailproduct"
                    imageSrc={img} // รูปต้องขนาด 500*500^
                    largeImageSrc={img}// ไว้ใส่รูปใหญ่
                    imageAlt={"zoom_pre"+idx}
                  />
                </Zoom>
            </SwiperSlide>
            )
          })}
        </Swiper>
    
    
        {/* thumbs */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="t-thumbs-gallery"
        >
          {data.map((img, idx)=>{
            return (
              <SwiperSlide key={"thumb_desk"+idx}>
                <img className="t-img-fluid" src={img} alt={"thumbs"+idx} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </>
      ) : (<></>);


  // ==================== Mode Mobile ========================
  }else{
      
  return data[0] !== "" ? (
    <>
      {/* Preview */}
      <Swiper
      spaceBetween={10}
      navigation={true}
      thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
      modules={[FreeMode, Navigation, Thumbs]}
      className="t-thumbs-preview carousel-custom"
      >
        {data.map((img, idx)=>{
          return(
          <SwiperSlide key={"mobile_"+idx}>
              <Zoom>
                <img src={img} className={'t-img-fluid'} alt={"img_product"+idx} />
              </Zoom>
          </SwiperSlide>
          )
        })}
      </Swiper>
  
  
      {/* thumbs */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="t-thumbs-gallery"
      >
        {data.map((img, idx)=>{
          return (
            <SwiperSlide key={"thumb_mobile"+idx}>
              <img className="t-img-fluid" src={img} alt={"thumbs"+idx} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
    ) : (<></>)
  }

}

export default Gallery
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";
import { ImageListItem } from "@mui/material";
function HomeBanner(props) {
  return (
    <Swiper
      navigation={true}
      loop={true}
      modules={[Navigation, Pagination, Autoplay, EffectCreative]}
      hashNavigation={{
        watchState: true,
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
      }}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-120%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["120%", 0, -500],
        },
      }}
      className="banner-carousel carousel-custom"
    >
      {props.data.map((item, idx) => {
        return (
          <SwiperSlide key={idx}>
            <ImageListItem sx={{ height: { xs: "auto" } }}>
              <img
                src={item.img}
                style={{ width: "100%", maxHeight: "100%" }}
                alt="logo"
                loading="lazy"
              />
            </ImageListItem>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HomeBanner;

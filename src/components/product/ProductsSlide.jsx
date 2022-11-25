import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const styleCard = {
  // width: '100%',
  cursor: "pointer",
  transition: "all 0.35s",
  border: '1px solid #efefef',
  p: 2,
  height: {
    xs: 280,
    md: 300,
    lg: 350
  },
  ":hover": {
    transform: "translate(0px, -5px)",
    boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.05)",
  },
  '& .box-img > img':{
    width: '100%',
    height: {
      xs:180,
      lg:200
    },
    objectFit: 'contain'
  },
};
// const styleOtherCate = {
//   marginBottom: 1,
//   display: "block ruby",
//   textTransform: "uppercase",
//   whiteSpace: "nowrap",
//   overflow: "hidden",
//   textOverflow: "ellipsis",
// };



// ================================== function main =================================
function ProductsSlide(props) {
  return (
    <Swiper
      navigation={true}
      loop={true}
      slidesPerView={5}
      spaceBetween={10}
      modules={[Navigation, Autoplay]}
      hashNavigation={{
        watchState: true,
      }}
      autoplay={{
        delay: 11000,
      }}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1366: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      className="carousel-custom"
    >
      {props.productRelate.map((product, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Box sx={{ px: { xs: 0, md: 2 }, pt: 3 }}>
              {/*  */}
              <SlideHoverCard props={props} product={product}  />
              {/* <div
                onClick={() => {
                  props.handleNewProduct(product.id);
                  navigate(product.path);
                }}
              >
                <Paper elevation={0} sx={[styleCard]}>
                  <Box mb={2} className="box-img">
                    <img
                      src={product.img}
                      alt={`product ${product.id}`}
                    />
                  </Box>
                  <Box textAlign={"center"}>
                    <Box sx={[styleOtherCate]}>
                          {[
                            "กล้องจุลทรรศน์ (Microscope)",
                            "สินค้าขายดี (Best Seller)",
                            "เครื่องมือวิทยาศาสตร์ (Scientific instrument)",
                          ].map((objOther, idx) => (
                            <Typography
                              key={idx}
                              sx={[
                                {
                                  fontSize: 12,
                                  color: "gray",
                                  ":hover": { color: "#00005f" },
                                },
                              ]}
                            >
                              {objOther}{" "}
                            </Typography>
                          ))}
                        </Box>
                    <Typography
                      component={"p"}
                      sx={{
                        fontSize: 14,
                        color: "#444",
                        ":hover": { color: "#00005f" },
                      }}
                    >
                      {product.product_name}
                    </Typography>
                  </Box>
                </Paper>
              </div> */}
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};


// component card
const SlideHoverCard = ({props, product}) => {
  const navigate = useNavigate();
  const [controlEvent, setControlEvent] = useState(null);
  return(
    <div
    onClick={() => {
      props.handleNewProduct(product.id);
      navigate(product.path);
    }}
  >
    <Paper elevation={0} sx={[styleCard]} onMouseLeave={()=>controlEvent.autoplay.stop()} onMouseOver={()=>controlEvent.autoplay.start()}>
      <Swiper onSwiper={(swiper)=>{setControlEvent(swiper); swiper.autoplay.stop()}} loop={true} modules={[Autoplay]} autoplay={{delay:1000}} >
        {/* list image */}
        {[1,2,3,4].map((img, idx)=>(
          <SwiperSlide key={"slide_"+idx}>
            <Box mb={2} className="box-img">
              <img
                src={product.img}
                alt={`product ${product.id}`}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box>
        {/* <Box sx={[styleOtherCate]}>
              {[
                "กล้องจุลทรรศน์ (Microscope)",
                "สินค้าขายดี (Best Seller)",
                "เครื่องมือวิทยาศาสตร์ (Scientific instrument)",
              ].map((objOther, idx) => (
                <Typography
                  key={idx}
                  sx={[
                    {
                      fontSize: 12,
                      color: "gray",
                      ":hover": { color: "#00005f" },
                    },
                  ]}
                >
                  {objOther}{" "}
                </Typography>
              ))}
            </Box> */}
        <Box sx={{color:'#797979'}}>
          <small>Brand</small>
        </Box>
        <Typography
          component={"p"}
          className='t-text-wrap-3'
          sx={{
            fontSize: 14,
            color: "#444",
            ":hover": { color: "#00005f" },
          }}
        >
          {product.product_name}
        </Typography>
      </Box>
    </Paper>
  </div>
  )
}

export default ProductsSlide;

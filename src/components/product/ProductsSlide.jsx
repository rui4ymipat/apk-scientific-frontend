import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const styleCard = {
  // width: '100%',
  cursor: "pointer",
  transition: "all 0.35s",
  p: 2,
  ":hover": {
    transform: "translate(0px, -10px)",
    boxShadow: "2px 2px 15px 0px rgba(0,0,0,0.25)",
  },
  ":hover .box-img": {
    border: "none",
  },
};
const styleOtherCate = {
  marginBottom: 1,
  display: "block ruby",
  textTransform: "uppercase",
  lineHeight: 1.7,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
// ================================== function main =================================
function ProductsSlide(props) {
  const navigate = useNavigate();
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
          spaceBetween: 5,
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
              <div
                onClick={() => {
                  props.handleNewProduct(product.id);
                  navigate(product.path);
                }}
              >
                <Paper elevation={0} sx={[styleCard]}>
                  <Box mb={2} className="box-img" border={"1px solid #f0f0f0"}>
                    <img
                      src={product.img}
                      alt={`product ${product.id}`}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </Box>
                  <Box textAlign={"center"}>
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
              </div>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ProductsSlide;

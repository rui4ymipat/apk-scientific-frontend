import { Box, Link, Paper, Typography, Grid } from '@mui/material';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const styleCard = {
    // width: '100%',
    cursor: "pointer",
    transition: "all 0.35s",
    border: '1px solid #efefef',
    p: 2,
    height: {
      xs: 300,
      md: 350,
      lg: 380
    },
    ":hover": {
      transform: "translate(0px, -5px)",
      boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.05)",
    },
};

const styleCardList = {
    // width: '100%',
    cursor: "pointer",
    transition: "all 0.35s",
    border: '1px solid #efefef',
    p: 2,
    ":hover": {
      transform: "translate(0px, -5px)",
      boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.05)",
    },
};
const styleOtherCate = {
    marginBottom: 1,
    display: "block",
    textTransform: "uppercase",
    lineHeight: 1.7,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
};

export default function CardProduct({data={}, showGrid=true}) {
    const navigate = useNavigate();
    const [SwiperModule, setSwiperModule] = useState(null);
    // console.log(data);
    if(showGrid){
      return (
      <div
      onClick={() => {
          navigate(data.path);
      }}
      >
          <Paper elevation={0} sx={[styleCard]} onMouseLeave={()=>SwiperModule.autoplay.stop()} onMouseOver={()=>SwiperModule.autoplay.start()}>
            <Box mb={1}>
              <Swiper
              onSwiper={(swiper) => {setSwiperModule(swiper); swiper.autoplay.stop()}}
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              modules={[Autoplay]}
              autoplay={{
                  delay: 1000,
                  disableOnInteraction:false
              }}
              className="">
                  <SwiperSlide>
                      <img
                          src={data.img}
                          alt={data.product_name}
                          style={{ maxWidth: "100%" }}
                          className='t-img-product'
                      />
                  </SwiperSlide>
                  {/* ข้างล่าง mockup นะน้อง */}
                  {[1,2].map((row)=>{
                      return (
                          <SwiperSlide key={row}>
                              <img
                              src={'https://firebasestorage.googleapis.com/v0/b/apk-scientific.appspot.com/o/images%2FPicture1.png_1668174062232?alt=media&token=6e32f96f-424b-4ce6-b2a0-dfc00ce3ed75'}
                              alt={'product'}
                              style={{ maxWidth: "100%" }}
                              className='t-img-product'
                              />
                          </SwiperSlide>
                      )
                  })}
              </Swiper>
            </Box>
            <Box>
              <Box>
                <small style={{color:'#797979', textAlign:'start'}}>Brand</small>
              </Box>
              <Box sx={[styleOtherCate]} textAlign={"center"}>
                {data.categoryOther.map((objOther, idx) => (
                  <Link
                      key={idx}
                      sx={[
                          {
                          fontSize: 12,
                          color: "gray",
                          ":hover": { color: "#00005f" },
                          },
                      ]}
                  >
                    {objOther.title}{" "}
                  </Link>
                ))}
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
              {data.product_name}
              </Typography>
            </Box>
          </Paper>
        </div>
      )
    }else{
      return (
        <div
        onClick={() => {
            navigate(data.path);
        }}
        >
            <Paper elevation={0} sx={[styleCardList]} onMouseLeave={()=>SwiperModule.autoplay.stop()} onMouseOver={()=>SwiperModule.autoplay.start()}>
              <Grid container spacing={2}>
                <Grid item xs={5} lg={4} xl={3} >
                  <Box mb={2}>
                    <Swiper
                    onSwiper={(swiper) => {setSwiperModule(swiper); swiper.autoplay.stop()}}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction:false
                    }}
                    className="">
                        <SwiperSlide>
                            <img
                                src={data.img}
                                alt={data.product_name}
                                style={{ maxWidth: "100%" }}
                                className='t-img-product list'
                            />
                        </SwiperSlide>
                        {/* ข้างล่าง mockup นะน้อง */}
                        {[1,2].map((row)=>{
                            return (
                                <SwiperSlide key={row}>
                                    <img
                                    src={'https://firebasestorage.googleapis.com/v0/b/apk-scientific.appspot.com/o/images%2FPicture1.png_1668174062232?alt=media&token=6e32f96f-424b-4ce6-b2a0-dfc00ce3ed75'}
                                    alt={'product'}
                                    style={{ maxWidth: "100%" }}
                                    className='t-img-product'
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                  </Box>
                </Grid>
    
    
                <Grid item xs={7} lg={8} xl={9} >
                  <Box>
                    <Box>
                      <small style={{color:'#797979', textAlign:'start'}}>Brand</small>
                    </Box>
                    <Box sx={[styleOtherCate]}>
                      {data.categoryOther.map((objOther, idx) => (
                        <Link
                            key={idx}
                            sx={[
                                {
                                fontSize: 12,
                                color: "gray",
                                ":hover": { color: "#00005f" },
                                },
                            ]}
                        >
                          {objOther.title}{" "}
                        </Link>
                      ))}
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
                    {data.product_name}
                    </Typography>
                  </Box>
                </Grid>
    
    
              </Grid>
            </Paper>
          </div>
        )
    }
}

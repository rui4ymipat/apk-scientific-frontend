import React, {useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Box, ImageListItem, Link, Paper, Skeleton, Typography } from '@mui/material';
import ColorUse from '../../assets/theme/ColorUse';
import { getCategory } from '../../services/category_service'

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
    transform: "scale(1.015)",
    // border: '1px solid '+ColorUse.colorPrimary,
    boxShadow: "2px 5px 10px 0px rgba(0,0,0,0.05)",
    '& .t-text-wrap-3':{
      color: ColorUse.colorPrimary,
    },
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

function ShelfSlide({data=[]}) {
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
      {data.map((item, idx)=>{return (
        <SwiperSlide key={idx}>
          <ProductCard data={item} />
        </SwiperSlide>
      )})}
    </Swiper>
  )
}


const ProductCard = ({data=[], loader=false}) => {
  // const navigate = useNavigation();
  const [dataShow, setDataShow] = useState([]);
  const [SwiperModule, setSwiperModule] = useState(null);

  useEffect(() => {
    getCategory().then((row)=>{
      setDataShow(row)
    })
  }, []);
  return (
    <div
    onClick={(evt) => {
        if(evt.target.classList.contains("t-remove-click")) return false;
        // navigate("/product/"+data.id);
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
                {/* ข้างล่าง mockup นะน้อง */}
                {[data.image].map((row,idx)=>{
                    return (
                        <SwiperSlide key={"img_"+idx}>
                            <img
                              src={row}
                              alt={'product'}
                              style={{ maxWidth: "100%", transition:'all .35s' }}
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
              {loader ? <Skeleton variant="rounded" width={'100%'} height={25} />
              :
              data.category.map((objOther, idx) => {
                return dataShow.map(row=>{
                  // console.log("card=>", row);
                  if(row.id === objOther){
                    return (
                      <Link
                          key={idx}
                          sx={[
                              {
                              fontSize: 12,
                              color: "gray",
                              ":hover": { color: ColorUse.colorPrimary },
                              },
                          ]}
                          className='t-remove-click'
                          // onClick={()=>{handleChangeCategory(row.id, row.category_name)}}
                      >
                        {row.category_name}{idx !== data.length - 1 ? ", " : ""}
                      </Link>
                    )
                  }else{
                    return null
                  }
                })
              })
              }
       
            </Box>
            <Typography
              className='t-text-wrap-3'
              sx={{
                fontSize: 14,
                color: "#444",
                ":hover": { color: ColorUse.colorPrimary },
              }}
            >
            {data.name}
            </Typography>
          </Box>
        </Paper>
      </div>
  )
}


export default ShelfSlide
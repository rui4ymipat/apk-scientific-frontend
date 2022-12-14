import { Box, Link, Paper, Skeleton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ColorUse from "../../assets/theme/ColorUse";
import { getCategory } from "../../services/category_service";

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
    // transform: "translate(0px, -5px)",
    transform: "scale(1)",
    // border: '1px solid '+ColorUse.colorPrimary,
    boxShadow: "2px 5px 10px 0px rgba(0,0,0,0.05)",
    '& .t-text-wrap-3':{
      color: ColorUse.colorPrimary,
    }
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
const styleOtherCate = {
  marginBottom: 1,
  display: "block ruby",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};



// ================================== function main =================================
function ProductsSlide(props) {
  const [listCatege, setListCatege] = useState([]);
  const [loader, setLoader] = useState(false);
  React.useEffect(() => {
    setLoader(true)
    getCategory().then(row=>{
      setListCatege(row);
      setLoader(false)
    })
  }, []);
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
              <SlideHoverCard props={props} product={product} listCatege={listCatege} loader={loader} />
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};


// component card
const SlideHoverCard = ({props, product, listCatege, loader}) => {
  const navigate = useNavigate();
  const [controlEvent, setControlEvent] = useState(null);
  return !loader ?(
    <div
    onClick={(evt) => {
      if(evt.target.classList.contains("t-remove-click")) return false;
      props.handleNewProduct(product.id);
      navigate("/product/"+product.id);
    }}
  >
    <Paper elevation={0} sx={[styleCard]} onMouseLeave={()=>controlEvent.autoplay.stop()} onMouseOver={()=>controlEvent.autoplay.start()}>
      <Swiper onSwiper={(swiper)=>{setControlEvent(swiper); swiper.autoplay.stop()}} loop={true} modules={[Autoplay]} autoplay={{delay:1000}} >
        {/* list image */}
        {product.image.map((img, idx)=>(
          <SwiperSlide key={"slide_"+idx}>
            <Box mb={2} className="box-img">
              <img
                src={img}
                alt={`product ${product.id}`}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box>
        <Box sx={{color:'#797979'}}>
          <small>Brand</small>
        </Box>
        <Box sx={[styleOtherCate]} textAlign={"center"}>
          {product.category.map((objOther, idx) => {
            return listCatege.map(row=>{
              console.log(row);
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
                      onClick={()=>{navigate('/category/'+row.id)}}
                  >
                    {row.category_name}{idx !== product.category.length - 1 ? ", " : ""}
                  </Link>
                )
              }else{
                return null
              }
            })
          })}
        </Box>
        <Typography
          component={"p"}
          className='t-text-wrap-3'
          sx={{
            fontSize: 14,
            color: "#444",
            ":hover": { color: "#f1132a" },
          }}
        >
          {product.name}
        </Typography>
      </Box>
    </Paper>
  </div>
  ):(
    <div>
    <Paper elevation={0} sx={[styleCard, {'&:hover':{borderColor:'#efefef', boxShadow:'none'}}]}>
      <Box mb={6}>
        <Skeleton variant="rounded" width={'100%'} height={180} />
      </Box>
      <Box>
        <Box marginBottom={1}>
          <Skeleton variant="rounded" width={'100%'} height={20} />
        </Box>
        <Box sx={[styleOtherCate]} textAlign={"center"}>
          <Skeleton variant="rounded" width={'100%'} height={20} />
        </Box>
        <Skeleton variant="rounded" width={'100%'} height={60} />
      </Box>
    </Paper>
  </div>
  )
}

export default ProductsSlide;

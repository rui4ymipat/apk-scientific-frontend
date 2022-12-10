import { Box, Link, Paper, Typography, Grid, Skeleton } from '@mui/material';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ColorUse from '../../assets/theme/ColorUse';


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
      // transform: "translate(0px, -5px)",
      transform: "scale(1.015)",
      border: '1px solid '+ColorUse.colorPrimary,
      boxShadow: "2px 15px 10px 0px rgba(0,0,0,0.1)",
      '& .t-text-wrap-3':{
        color: ColorUse.colorPrimary,
      }
    },
};

const styleCardList = {
    // width: '100%',
    cursor: "pointer",
    transition: "all 0.35s",
    border: '1px solid #efefef',
    p: 2,
    ":hover": {
      // transform: "translate(0px, -5px)",
      transform: "scale(1.015)",
      border: '1px solid '+ColorUse.colorPrimary,
      boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.05)",
      '& .t-text-wrap-3':{
        color: ColorUse.colorPrimary,
      }
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

export default function CardProduct({
  data={
    category:[],
    created_at: 0,
    description: "",
    id: "",
    image: [],
    name: "",
    price: "",
    tableColumn: [],
    tableRow: []
  }, 
showGrid=true,
dataShow=[],
handleChangeCategory=()=>{},
loader=false
}) {
    const navigate = useNavigate();
    const [SwiperModule, setSwiperModule] = useState(null);
    if(showGrid){
      return loader ? (
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
      ):(
      <div
      onClick={(evt) => {
          if(evt.target.classList.contains("t-remove-click")) return false;
          navigate("/product/"+data.id);
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
                {loader ? <Skeleton variant="rounded" width={'100%'} height={25} />
                :
                data.category.map((objOther, idx) => {
                  return dataShow.category.map(row=>{
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
                            onClick={()=>{handleChangeCategory(row.id, row.name)}}
                        >
                          {row.name}{idx !== data.category.length - 1 ? ", " : ""}
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
    }else{
      return loader ? (
        <div>
            <Paper elevation={0} sx={[styleCardList, {'&:hover':{borderColor:'#efefef', boxShadow:'none'}}]}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={5} lg={4} xl={3} >
                  <Box mb={0}>
                    <Skeleton variant="rounded" width={'100%'} height={200} />
                  </Box>
                </Grid>
    
    
                <Grid item xs={12} md={7} lg={8} xl={9} >
                  <Box>
                    <Box marginBottom={1}>
                      <Skeleton variant="rounded" width={'100%'} height={20} />
                    </Box>
                    <Box sx={[styleOtherCate]}>
                    <Skeleton variant="rounded" width={'100%'} height={20} />
                    </Box>
                    <Skeleton variant="rounded" width={'100%'} height={50} />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </div>

        ):(
        <div
        onClick={(evt) => {
          if(evt.target.classList.contains("t-remove-click")) return false;
          navigate("/product/"+data.id);
        }}
        >
            <Paper elevation={0} sx={[styleCardList]} onMouseLeave={()=>SwiperModule.autoplay.stop()} onMouseOver={()=>SwiperModule.autoplay.start()}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={5} lg={4} xl={3} >
                  <Box mb={0}>
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
                        {[data.image].map((row, idx)=>{
                            return (
                                <SwiperSlide key={"imgMobile_"+idx}>
                                    <img
                                    src={row}
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
    
    
                <Grid item xs={12} md={7} lg={8} xl={9} >
                  <Box>
                    <Box>
                      <small style={{color:'#797979', textAlign:'start'}}>Brand</small>
                    </Box>
                    <Box sx={[styleOtherCate]}>
                    {loader ? <Skeleton variant="rounded" width={'100%'} height={25} />
                      :
                      data.category.map((objOther, idx) => {
                        return dataShow.category.map(row=>{
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
                                  onClick={()=>{handleChangeCategory(row.id, row.name)}}
                              >
                                {row.name}{idx !== data.category.length - 1 ? ", " : ""}
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
                        ":hover": { color: "#f1132a" },
                      }}
                    >
                    {data.name}
                    </Typography>
                  </Box>
                </Grid>
    
    
              </Grid>
            </Paper>
          </div>
        )
    }
}

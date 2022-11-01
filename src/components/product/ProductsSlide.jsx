import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const styleCard = {
    // width: '100%',
    cursor:'pointer',
    transition: 'all 0.35s', 
    p:2,
    ':hover':{
        transform: "translate(0px, -10px)",
        boxShadow: "2px 2px 15px 0px rgba(0,0,0,0.25)",
    },
    ':hover .box-img':{
        border:'none'
    },
};
const styleOtherCate = {
    marginBottom: 1,
    display: 'block ruby',
    textTransform: 'uppercase',
    lineHeight: 1.7,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
};
// ================================== function main =================================
function ProductsSlide() {
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
          delay: 11000
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
            slidesPerView: 5,
            spaceBetween: 10,
        },
        }}
        className="carousel-custom">
            {[1,2,3,4,5,6].map((obj)=>{
                return(
                <SwiperSlide>
                    <Box sx={{px:{xs:0, md:2}, pt:3}}>
                        <div onClick={()=>{navigate('/product')}}>
                            <Paper elevation={0} sx={[styleCard]} >
                                <Box mb={2} className="box-img" border={'1px solid #f0f0f0'} >
                                    <img src={'https://snp-scientific.com/wp-content/uploads/2021/02/SZM-LED2-300x300.jpg'} alt={"product"} style={{maxWidth:'100%', height: 'auto'}} />
                                </Box>
                                <Box textAlign={'center'}>
                                    <Box sx={[styleOtherCate]}>
                                        {["กล้องจุลทรรศน์ (Microscope)","สินค้าขายดี (Best Seller)","เครื่องมือวิทยาศาสตร์ (Scientific instrument)"].map((objOther, idx)=>(
                                            <Typography key={idx} sx={[{fontSize: 12,color:'gray', ':hover':{color:'#00005f'},}]} >{objOther} </Typography>
                                        ))}
                                    </Box>
                                    <Typography component={'p'} sx={{fontSize:14, color:'#444', ':hover':{color:'#00005f'}}} >
                                        {'กล้องสเตอริโอ ชนิด 2 กระบอกตา (Binocular stereozoom microscope) รุ่น SZM-LED1 '}
                                    </Typography>
                                </Box>
                            </Paper>
                        </div>
                    </Box>
                </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ProductsSlide
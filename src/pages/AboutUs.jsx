import { Box, Grid, Slide, Typography } from '@mui/material'
import React from 'react'
import ColorUse from '../assets/theme/ColorUse'

const styles = {
    boxImageSlide:{
        '& .box-img-slide':{
            height:'100%',
        },
        '& .box-img-slide img':{
            maxWidth:'100%',
            height:'auto',
            objectFit:'cover',
            objectPosition:'center',
            transition:'all 1s',
            // animation: 'fadeLeftShow 1s ease-in forwards'
        }
    },
    boxTextShow:{
        marginBottom: 4,
        '& .text-title':{
            fontSize:22,
            fontWeight:600,
            color:ColorUse.colorPrimary,
            marginBottom:1.5
        },
        '& .text-info':{
            color: ColorUse.colorGray
        }
    }
}

export default function AboutUs() {
    const [fadeSlide, setFadeSlide] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setFadeSlide(true);
        }, 400);
    }, []);
    
    return (
        <Box className="container-main" sx={{ paddingX: { xs: 3, xl: 5 }, paddingY: { xs: 3, xl: 5 } }}>
            <Grid container spacing={5}>
                <Grid item xs={12} lg={5} sx={styles.boxImageSlide}>
                    <Box className='box-img-slide' display='flex'alignItems={'center'}>
                        <Slide appear={true} direction="right" in={fadeSlide} timeout={1000} >
                            <img src="assets/images/logos/logo.png" alt="image_slide" />
                        </Slide>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={7} >
                    <Box sx={{paddingTop:{xs:3, md:7, lg:10}}}>
                        <Box sx={styles.boxTextShow}>
                            <Typography className='text-title'>
                                บริษัท APK Scientific
                            </Typography>
                            <Typography className='text-info'>
                                บริษัทก่อตั้งขึ้นเมื่อปี 2564 โดยบริษัทประกอบธุรกิจหลักคือการ จัดจำหน่าย
                                เครื่องมือวัด เครื่องมือวิทยาศาสตร์ เครื่องมือและอุปกรณ์ที่เกี่ยวข้องกับการงาน IOT และขายส่งสินค้า
                                ผ่านระบบออนไลน์ นอกจากนี้ยังประกอบธุรกิจเกี่ยวกับรับเหมาติดตั้งระบบโซลาเซลล์
                                วางระบบติดตั้งโรงเรือนปลูกพืช Smart farm เครื่องมือและอุปกรณ์ที่เกี่ยวกับงาน IOT
                                รวมถึงบริการให้คำปรึกษาระบบจัดการระบบโซลาเซลล์และโรงเรือนปลูกพืช Smart farm อีกด้วย
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

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
        <Box sx={{ paddingX: { xs: 3, xl: 5 }, paddingY: { xs: 3, xl: 5 } }}>
            <Grid container spacing={5}>
                <Grid item xs={12} lg={5} sx={styles.boxImageSlide}>
                    <Box className='box-img-slide' display='flex'alignItems={'center'}>
                        <Slide appear={true} direction="right" in={fadeSlide} timeout={1000} >
                            <img src="https://snp-scientific.com/wp-content/uploads/2021/02/about-us.jpg" alt="image_slide" />
                        </Slide>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={7} >
                    <Box sx={{paddingTop:{xs:3, md:7, lg:10}}}>
                        <Box sx={styles.boxTextShow}>
                            <Typography className='text-title'>
                                บริษัท เอสเอ็นพี ไซเเอนติฟิค จำกัด
                            </Typography>
                            <Typography className='text-info'>
                            เป็นผู้นำเข้าและเป็นตัวแทนจำหน่าย เครื่องมือวิทยาศาสตร์ , อุปกรณ์/วัสดุวิทยาศาสตร์ , เครื่องแก้ววิทยาศาสตร์ และสารเคมี ที่ใช้ในงานวิเคราะห์ วิจัยทางวิทยาศาสตร์ สำหรับห้องปฏิบัติการ โดยได้เปิดทำการตั้งแต่ ปี พ.ศ. 2546 จนถึงปัจจุบัน
                            <br /><br />
                            นอกจากนี้ บริษัท ฯ รับออกแบบห้องปฏิบัติการวิทยาศาสตร์ ด้วยทีมงานที่มีคุณภาพและพร้อมบริการลูกค้าทุกท่าน
                            <br /><br />
                            บริษัท เอสเอ็นพี ไซเเอนติฟิค จำกัด ได้รับการรับรองมาตรฐาน ISO9001:2015
                            </Typography>
                        </Box>
                        <Box sx={styles.boxTextShow}>
                            <Typography className='text-title'>
                                บริษัท เอสเอ็นพี ไซเเอนติฟิค จำกัด
                            </Typography>
                            <Typography className='text-info'>
                            เป็นผู้นำเข้าและเป็นตัวแทนจำหน่าย เครื่องมือวิทยาศาสตร์ , อุปกรณ์/วัสดุวิทยาศาสตร์ , เครื่องแก้ววิทยาศาสตร์ และสารเคมี ที่ใช้ในงานวิเคราะห์ วิจัยทางวิทยาศาสตร์ สำหรับห้องปฏิบัติการ โดยได้เปิดทำการตั้งแต่ ปี พ.ศ. 2546 จนถึงปัจจุบัน
                            <br /><br />
                            นอกจากนี้ บริษัท ฯ รับออกแบบห้องปฏิบัติการวิทยาศาสตร์ ด้วยทีมงานที่มีคุณภาพและพร้อมบริการลูกค้าทุกท่าน
                            <br /><br />
                            บริษัท เอสเอ็นพี ไซเเอนติฟิค จำกัด ได้รับการรับรองมาตรฐาน ISO9001:2015
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

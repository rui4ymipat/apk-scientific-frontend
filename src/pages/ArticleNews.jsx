
import { Box, Grid, Link } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react'
import ColorUse from '../assets/theme/ColorUse';

const styleUse = {
    boxCard:{
        cursor:'pointer',
        '&:hover':{
            '& .box-text .MuiLink-root':{
                color:ColorUse.colorPrimary
            },
            '& .box-img > img':{
                transform:'scale(1.1)'
            }
        },
        '& .box-img > img':{
            width: '100%',
            transition:'all 0.25s',
            height: {
                xs:150,
                md:190,
            }
        },
        '& .box-text .MuiLink-root':{
            color: blue,
            fontWeight: 500,
            textDecoration: 'none',
        }
    }
}

export default function ArticleNews() {
    return (
        <Box sx={{ paddingX: { xs: 3, xl: 5 }, paddingY: { xs: 3, xl: 5 } }}>
            <Grid container spacing={7} >
                {[1,2,3,4,5,7,8,9,14,12,41].map((row, idx)=>(
                <Grid key={"article_"+idx} item sx={12} md={6} lg={3}>
                    <Box sx={styleUse.boxCard}>
                        <Box className='box-img' sx={{marginBottom:1}}>
                            <img src="https://snp-scientific.com/wp-content/uploads/2022/03/18.jpg" alt="articles" />
                        </Box>
                        <Box className='box-text' sx={{textAlign:'center'}}>
                            <Link className='t-text-wrap-3'>
                            {'A journey of a thousand Miles Must begin with a single step.'}
                            {'A journey of a thousand Miles Must begin with a single step.'}
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                ))}
            </Grid>
        </Box>
    )
}

import { AccessTime, Call, MailOutline, Star } from "@mui/icons-material";
import { Box, Grid, Typography,
  ImageListItem,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from "@mui/material";
import React from "react";
import HomeCate from "../components/home/HomeCate";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HomeBanner from "../components/home/HomeBanner";
import ShelfSlide from "../components/home/ShelfSlide";
import BrandSlide from "../components/home/BrandSlide";

const dataContact = {
  name: 'APK Scientific',
  address_th: '88/20 หมู่ 2 ตำบลไร่ขิง อำเภอสามพราน จังหวัดนครปฐม 73210',
  address_en: '88/20 Moo 2, Rai Khing , Sam Phran , Nakhon Pathom 73210',
  tel: '034-103-314 , 099-421-6688',
  line: '@apkscien',
  email: 'marketing@apk-scientific.com',
}

function Home() { // === function main ===
  const dataCateHome = [
    {
      title: 'สินค้าใหม่ (NEW PRODUCTS)',
      icon: <Star color="inherit" sx={{color:'inherit'}} />,
      action: "#",
    },
    {
      title: 'สินค้าใหม่ (NEW PRODUCTS)',
      icon: <Star />,
      action: "#",
    },
    {
      title: 'สินค้าใหม่ (NEW PRODUCTS)',
      icon: <Star />,
      action: "#",
    },
    {
      title: 'สินค้าใหม่ (NEW PRODUCTS)',
      icon: <Star />,
      action: "#",
    },
    {
      title: 'สินค้าใหม่ (NEW PRODUCTS)',
      icon: <Star />,
      action: "#",
    },
    {
      title: 'สินค้าใหม่ (NEW PRODUCTS)',
      icon: <Star />,
      action: "#",
    },
    {
      title: 'สินค้าใหม่ (NEW PRODUCTS)',
      icon: <Star />,
      action: "#",
    },
    {
      title: 'สินค้าใหม่ (NEW PRODUCTS)',
      icon: <Star />,
      action: "#",
    },
  ];
  // Data banner
  const banner = [
    {id:1, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2022/05/slide-trefflab.jpg'},
    {id:2, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2022/03/slide05.jpg'},
    {id:3, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2022/03/slide08.jpg'},
    {id:4, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2022/05/slide-trefflab.jpg'},
    {id:5, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2022/03/slide09.jpg'},
  ];
  // Data Product best seller
  const best_Seller = [
    {id:1, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2022/02/best-seller06.jpg'},
    {id:2, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2022/02/best-seller06.jpg'},
    {id:3, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2022/02/best-seller06.jpg'},
    {id:4, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2022/02/best-seller06.jpg'},
  ];

  // News
  const data_News = [
    {id: 1, action: '#', img:'https://snp-scientific.com/wp-content/uploads/2022/05/18B050B2-0200-4B6C-A461-FC738DEBE542-scaled.jpg', detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species.'},
    {id: 1, action: '#', img:'https://snp-scientific.com/wp-content/uploads/2022/05/18B050B2-0200-4B6C-A461-FC738DEBE542-scaled.jpg', detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species.'},
    {id: 1, action: '#', img:'https://snp-scientific.com/wp-content/uploads/2022/05/18B050B2-0200-4B6C-A461-FC738DEBE542-scaled.jpg', detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species.'},
    {id: 1, action: '#', img:'https://snp-scientific.com/wp-content/uploads/2022/05/18B050B2-0200-4B6C-A461-FC738DEBE542-scaled.jpg', detail: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species.'},
  ];

  // Brand
  const brand_products = [
    {id:1, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2021/03/ajaxfinechem.png'},
    {id:2, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2021/02/aijirenlogo.png'},
    {id:3, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2021/03/carloerba.png'},
    {id:4, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2021/02/centuriun.png'},
    {id:5, route:'#', img:'https://snp-scientific.com/wp-content/uploads/2021/02/Biotools-Swiss-logo.png'},
  ];

  return (
    <Box sx={{paddingX:{xs:3, xl: 5}, paddingY:{xs:3, xl:5}}}>

      {/* phase 1 */}
      <Grid container spacing={5} sx={{marginBottom:8}} >

        <Grid item xs={12} md={4} xl={3} sx={{borderRadius: 1, overflow: 'hidden'}}>
          <Typography variant="h6" component={'h1'} sx={{background:'#f1132a', color:'white', px:2, py:1}} >
            หมวดหมู่สินค้า
          </Typography>
          <Box sx={{
            border:'0.75px solid #d0d0d0',
          }} >
            {/* list Menu */}
            <HomeCate data={dataCateHome}  />

          </Box>
        </Grid>

        <Grid item xs={12} md={8} xl={9}>
          {/* Carousel */}
          <HomeBanner data={banner} />
        </Grid>

        <Grid item xs={12}>
          <Box>
            <Grid container>
              <Grid item xs={12} sm={6} lg={3} sx={{marginBottom: 2}}>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:{xs: 'start', xl: 'center'}}}>
                  <Call sx={{fontSize: 48, color:'#1e73be'}} />
                  <Box sx={{ml:1}}>
                    <Typography component={'p'} sx={{fontSize:{xs:18, md:18, color:'#1e73be', fontWeight: 600}}} >โทรสั่งซื้อสินค้า</Typography>
                    <Typography component={'p'} sx={{fontSize:{xs:14, md:14}}} >{ dataContact.tel }</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={3} sx={{marginBottom: 2}}>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:{xs: 'start', xl: 'center'}}}>
                  <ImageListItem>
                    <img src="https://snp-scientific.com/wp-content/uploads/2022/02/icon-line.png" style={{width: 48, height: 48}} alt="icon" />
                  </ImageListItem>
                  <Box sx={{ml:1}}>
                    <Typography component={'p'} sx={{fontSize:{xs:18, md:18, color:'#39cd00', fontWeight: 600}}} >LINE OFFICIAL</Typography>
                    <Typography component={'p'} sx={{fontSize:{xs:14, md:14}}} >{ dataContact.line }</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={3} sx={{marginBottom: 2}}>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:{xs: 'start', xl: 'center'}}}>
                  <MailOutline sx={{fontSize: 48, color:'#dd8833'}} />
                  <Box sx={{ml:1}}>
                    <Typography component={'p'} sx={{fontSize:{xs:18, md:18, color:'#dd8833', fontWeight: 600}}} >อีเมล์</Typography>
                    <Typography component={'p'} sx={{fontSize:{xs:14, md:14}}} >{ dataContact.email }</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={3} sx={{marginBottom: 2}}>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:{xs: 'start', xl: 'center'}}}>
                  <AccessTime sx={{fontSize: 48, color:'#010a75'}} />
                  <Box sx={{ml:1}}>
                    <Typography component={'p'} sx={{fontSize:{xs:18, md:18, color:'#010a75', fontWeight: 600}}} >เวลาทำการ</Typography>
                    <Typography component={'p'} sx={{fontSize:{xs:14, md:14}}} >จ.-ศ. 8.00-17.00</Typography>
                  </Box>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Grid>

      </Grid>


      {/* phase 2 */}
      <Grid container spacing={5} >

        <Grid item xs={12} sm={8} xl={9}>
          {/* Best Seller */}
          <Box sx={{mb:4}}>
            <Typography component={'h3'} variant={'h3'} sx={{fontSize:{xs:18, md:22, xl: 26}, color:'#39cd00', borderBottom:'0.75px solid #d0d0d0', pb:2, mb:2}} >
              สินค้าขายดี
            </Typography>
            <ShelfSlide data={best_Seller} />
          </Box>

          {/* Promotion */}
          <Box sx={{mb:4}}>
            <Typography component={'h3'} variant={'h3'} sx={{fontSize:{xs:18, md:22, xl: 26}, color:'#d4001a', borderBottom:'0.75px solid #d0d0d0', pb:2, mb:2}} >
              สินค้า โปรโมชัน
            </Typography>
            <ShelfSlide data={best_Seller} />
          </Box>
    
          {/* News */}
          <Box sx={{mb:4}}>
            <Typography component={'h3'} variant={'h3'} sx={{fontSize:{xs:18, md:22, xl: 26}, color:'#d4001a', borderBottom:'0.75px solid #d0d0d0', pb:2, mb:2}} >
              ข่าวสาร
            </Typography>
            <Grid container spacing={4} >
              {data_News.map((item, idx)=>{return(

              <Grid key={item.id} item xs={6} md={4} xl={3} >
                <Card sx={{ boxShadow:'none' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">{item.detail}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              )})}

            </Grid>
          </Box>

          {/* Brand Products */}
          <Box sx={{mb:4}}>
            <Typography component={'h3'} variant={'h3'} sx={{fontSize:{xs:18, md:22, xl: 26}, color:'#f1132a', borderBottom:'0.75px solid #d0d0d0', pb:2, mb:2}} >
              แบรนด์สินค้า
            </Typography>
            <BrandSlide data={brand_products} />
          </Box>

        </Grid>


        <Grid item xs={12} sm={4} xl={3} sx={{borderRadius: 1, overflow: 'hidden'}}>
          <Box>
            <ImageListItem sx={{width: '100%', height: 485}}>
              <img src="https://snp-scientific.com/wp-content/uploads/2022/02/catalog-2022.jpg" style={{width: '100%', maxHeight: '100%'}} alt="" />
            </ImageListItem>
          </Box>
          <Box>
            <ImageListItem sx={{display:'flex', justifyContent:'center'}}>
              <img src="https://snp-scientific.com/wp-content/uploads/2022/02/catalog-qr-150x150.png" style={{width:'auto', height: 'auto'}} alt="" />
            </ImageListItem>
          </Box>
          <Box>
            <ImageListItem sx={{width: '100%', height: 485}}>
              <img src="https://snp-scientific.com/wp-content/uploads/2022/02/Calendar2022-SNP-1.jpg" style={{width: '100%', maxHeight: '100%'}} alt="" />
            </ImageListItem>
          </Box>
        </Grid>

      </Grid>
    </Box>
  )
}
export default Home;

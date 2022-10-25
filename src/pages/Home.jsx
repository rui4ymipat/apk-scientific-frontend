import { InsertEmoticon, Star } from "@mui/icons-material";
import { Box, Grid, ListItemIcon, MenuItem, MenuList, Typography } from "@mui/material";
import React from "react";
import HomeCate from "../components/home/HomeCate";

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
  ];
  return (
    <Box sx={{paddingX:{xs:3, xl: 5}}}>
      <Grid container spacing={10} >
        <Grid item xs={12} xl={3} sx={{borderRadius: 1, overflow: 'hidden'}}>
          <Typography variant="h6" component={'h1'} sx={{background:'#00005f', color:'white', px:2, py:1}} >
            หมวดหมู่สินค้า
          </Typography>
          <Box sx={{
            border:'0.75px solid #d0d0d0',
          }} >
            {/* list Menu */}
            <HomeCate data={dataCateHome}  />
          </Box>
        </Grid>
        <Grid item xs={12} xl={9}>
          
        </Grid>
      </Grid>
    </Box>
  )
}
export default Home;

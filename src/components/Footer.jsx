import {
  Call,
  Mail,
  Room,
} from "@mui/icons-material";
import {
  Grid,
  Typography,
  ListItem,
  List,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ImageListItem,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";



const dataContact = {
  name: 'APK Scientific',
  address_th: '88/20 หมู่ 2 ตำบลไร่ขิง อำเภอสามพราน จังหวัดนครปฐม 73210',
  address_en: '88/20 Moo 2, Rai Khing , Sam Phran , Nakhon Pathom 73210',
  tel: '034-103-314 , 099-421-6688',
  email: 'marketing@apk-scientific.com',
}

function Footer() {
  const path = window.location.pathname;

  if (path.search("admin") === 1) return null;
  return (
    <footer style={{minHeight:210}}>
      <Box sx={{}}>
        <Grid
          container
          sx={{
            // minHeight: { xl: 260 },
            py: 3,
            px: 3,
            background:
              "url(https://snp-scientific.com/wp-content/uploads/2021/02/footer-bg.jpg) center ",
            color: "white",
          }}
        >
          <Grid item xs={12} lg={4} sx={{ mb: { xs: 2, sm: 0 } }}>
            <Typography component={"p"} sx={{ fontWeight: 1000 }}>
              {dataContact.name}
            </Typography>
            <List sx={{ width: "100%" }} dense={true}>
              <ListItem sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar sx={{ background: "none" }}>
                    <Room />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={dataContact.address_th} />
              </ListItem>
              <ListItem sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar sx={{ background: "none" }}>
                    <Call />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={dataContact.tel} />
              </ListItem>
              <ListItem sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar sx={{ background: "none" }}>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={"Email: "+dataContact.email} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mb: { xs: 2, sm: 0 }, px:3 }}>
            <ImageListItem>
              <img
                src="assets/images/lineQR.png"
                style={{ width: 150 }}
                alt="logo"
                loading="lazy"
              />
            </ImageListItem>
          </Grid>
        </Grid>

        {/* copyright */}
        {/* <Grid container sx={{ py: 1, px: 3 }}>
          <Grid item xs={12}>
            <Typography component={"p"}>
              © Copyright 2021. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid> */}
      </Box>
    </footer>
  );
}

export default Footer;

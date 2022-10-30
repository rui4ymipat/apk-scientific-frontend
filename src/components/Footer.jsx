import {
  Call,
  Facebook,
  ImportContactsOutlined,
  Instagram,
  Mail,
  Room,
  Twitter,
  YouTube,
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
  Tooltip,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Footer() {
  const path = window.location.pathname;

  if (path.search("admin") === 1) return null;
  return (
    <footer>
      <Box sx={{}}>
        <Grid
          container
          sx={{
            minHeight: { xl: 260 },
            py: 3,
            px: 3,
            background:
              "url(https://snp-scientific.com/wp-content/uploads/2021/02/footer-bg.jpg) center ",
            color: "white",
          }}
        >
          <Grid item xs={12} xl={3} sx={{ mb: { xs: 2, sm: 0 } }}>
            <Typography component={"p"} sx={{ fontWeight: 1000 }}>
              บริษัท เอสเอ็นพี ไซเเอนติฟิค จำกัด
            </Typography>
            <List sx={{ width: "100%" }} dense={true}>
              <ListItem sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar sx={{ background: "none" }}>
                    <Room />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="ที่อยู่: 22,22/1-22/2-22/3 ซอยสายไหม 58 แขวงสายไหม เขตสายไหม กทม 10220" />
              </ListItem>
              <ListItem sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar sx={{ background: "none" }}>
                    <Call />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Phone: 02-5636196-99" />
              </ListItem>
              <ListItem sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar sx={{ background: "none" }}>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Email: snp@snp-scientific.com" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} xl={4} sx={{ mb: { xs: 2, sm: 0 } }}>
            <Typography component={"p"} sx={{ fontWeight: 1000 }}>
              สนใจสินค้ากรุณาติดต่อ ฝ่ายขาย (please contact)
            </Typography>
            <List sx={{ width: "100%" }} dense={true}>
              <ListItem sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar sx={{ background: "none" }}>
                    <Call />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Phone: Tel: 02-5636196-99 ext.101-106,113-115" />
              </ListItem>
            </List>
            <ImageListItem>
              <img
                src="https://snp-scientific.com/wp-content/uploads/2021/02/iso-300x115.png"
                style={{ width: 150 }}
                alt="logo"
                loading="lazy"
              />
            </ImageListItem>
          </Grid>
          <Grid item xs={12} xl={3} sx={{ mb: { xs: 2, sm: 0 } }}>
            <Typography component={"p"} mb={1}>
              Follow Us
            </Typography>
            <Box>
              <Tooltip title="Facebook">
                <IconButton
                  size={"small"}
                  sx={{ mx: 0.5, color: "white", backgroundColor: "#3b5a9a" }}
                >
                  <Facebook />
                </IconButton>
              </Tooltip>
              <Tooltip title="Twitter">
                <IconButton
                  size={"small"}
                  sx={{ mx: 0.5, color: "white", backgroundColor: "#1aa9e1" }}
                >
                  <Twitter />
                </IconButton>
              </Tooltip>
              <Tooltip title="YouTube">
                <IconButton
                  size={"small"}
                  sx={{ mx: 0.5, color: "white", backgroundColor: "#c3191e" }}
                >
                  <YouTube />
                </IconButton>
              </Tooltip>
              <Tooltip title="Instagram">
                <IconButton
                  size={"small"}
                  sx={{ mx: 0.5, color: "white", backgroundColor: "#7c4a3a" }}
                >
                  <Instagram />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>
          <Grid item xs={12} xl={2} sx={{ mb: { xs: 2, sm: 0 } }}>
            <ImageListItem>
              <img
                src="https://snp-scientific.com/wp-content/uploads/2021/02/line-238x300.jpg"
                style={{ width: 150 }}
                alt="logo"
                loading="lazy"
              />
            </ImageListItem>
          </Grid>
        </Grid>

        {/* copyright */}
        <Grid container sx={{ py: 3, px: 3 }}>
          <Grid item xs={12}>
            <Typography component={"p"}>
              © Copyright 2021. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}

export default Footer;

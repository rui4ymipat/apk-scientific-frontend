import { Call, Facebook, Search } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  ImageListItem,
  TextField,
  FormControl,
  Button,
  Modal,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";



const options = [
    'จานเพาะเชื้อ (Petri Dish) / กระจกนาฬิกา (Watch Glass)',
    'อุปกรณ์พลาสติกสำหรับห้องปฏิบัติการ (Plasticware)',
    'วัสดุสิ้นเปลือง (Consumable Products)',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'อุปกรณ์พลาสติกสำหรับห้องปฏิบัติการ (Plasticware)',
    'วัสดุสิ้นเปลือง (Consumable Products)',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'จานเพาะเชื้อ (Petri Dish) / กระจกนาฬิกา (Watch Glass)',
    'อุปกรณ์พลาสติกสำหรับห้องปฏิบัติการ (Plasticware)',
    'วัสดุสิ้นเปลือง (Consumable Products)',
    'Umbriel',
  ];
  
function Header() {// ============= function main
  const [modalToggle, setModalToggle] = useState(false);
  const [textSearchList, setTextSearchList] = useState("allCategory");
  const path = window.location.pathname;

  if (path.search("admin") === 1) return null;
  return (
    <Box>
      {/*  mobile */}
      {/* <Grid
        container
        alignItems={"center"}
        paddingY={1}
        sx={{ paddingX: { xs: 3, xl: 5 } }}
      >
        <Grid item xs={6}>
          <Typography
            variant="h1"
            color={"#00005f"}
            sx={{ fontSize: 14, fontWeight: 1000 }}
          >
            บริษัท กขคง จำกัด
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          textAlign={"end"}
          display="flex"
          justifyContent={"end"}
        >
          <IconButton
            sx={{
              p: 0,
              display: { xs: "none", lg: "flex" },
              "&:hover": {
                background: "#00005f",
                color: "#fff",
              },
            }}
          >
            <Facebook sx={{ padding: "2px", fontSize: 24 }} />
          </IconButton>
          <IconButton
            onClick={() => setModalToggle(true)}
            sx={{ p: 0, display: { xs: "", lg: "none" } }}
          >
            <Search sx={{ padding: "2px", fontSize: 24 }} />
          </IconButton>
        </Grid>
        <Modal
          open={modalToggle}
          onClose={() => setModalToggle(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              background: "#f4f4f4",
              borderRadius: 3,
              px: 3,
              py: 1,
              mt: 2,
              mx: 2,
            }}
          >
              <FormControl className="input-cut-line" fullWidth size={'small'} >
                  <Select
                    id="select-dd-custom-mobile"
                    sx={{color:'#707070'}}
                    value={textSearchList}
                    onChange={evt=>setTextSearchList(evt.target.value)}
                    onFocus={()=>{}}
                  >
                    <MenuItem value="allCategory">
                        All Category
                    </MenuItem>
                    {options.map((option, idx)=>(
                        <MenuItem key={idx} value={option} >{option}</MenuItem>
                    ))}
                  </Select>
              </FormControl>
            <Grid container sx={{ my: 1 }}>
              <Grid item xs={8} md={10}>
              <TextField
                    id="input-with-sx-mobile"
                    fullWidth
                    className="input-cut-line"
                    variant='outlined'
                    size={'small'}
                    placeholder="Search..."
                    sx={{
                        border:'none',
                        boxShadow: 'none',
                        height:'100%',
                    }}
                />
              </Grid>
              <Grid item xs={4} md={2} paddingLeft={1} >
                <Button
                  sx={{
                    width: "100%",
                    height: '100%',
                    color: "white",
                    backgroundColor: "#00005f",
                    my: 0,
                    p: 0,
                  }}
                >
                  <Search sx={{ fontSize: 30 }} />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Grid> */}

      {/* NavBanner */}
      <Grid
        container
        alignItems={"center"}
        paddingX={4}
        paddingY={5}
        sx={{ display: { xs: "none", lg: "flex" } }}
      >
        <Grid item xs={12} lg={4}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography component={"a"} href={"/"}>
              <ImageListItem>
                <img
                  src="https://snp-scientific.com/wp-content/uploads/2022/02/snp-logo04.png"
                  style={{ width: 250 }}
                  alt="logo"
                  loading="lazy"
                />
              </ImageListItem>
            </Typography>
          </Box>
        </Grid>
        {/* <Grid
          item
          xs={12}
          lg={4}
        >
            <Box
            sx={{
                display: "flex",
                alignItems: "center",
                alignSelf:'stretch',
                background: "#f4f4f4",
                borderRadius: 15,
                overflow:'hidden'
            }}
            >
                <TextField
                    id="input-with-sx"
                    fullWidth
                    className="input-cut-line"
                    variant='outlined'
                    size={'small'}
                    placeholder="Search..."
                    sx={{
                        border:'none',
                        boxShadow: 'none',
                        height:'100%',
                        'fieldset':{
                            border:'none'
                        },
                        borderRight: '0.5px solid #e6e6e6'
                    }}
                />
                <FormControl className="input-cut-line" sx={{width: 250, 'fieldset': {border:'none'},borderRight: '0.5px solid #e6e6e6'}} size={'small'} >
                    <Select
                      id="select-dd-custom-des"
                      className="select-dd-custom"
                      value={textSearchList}
                      onChange={evt=>setTextSearchList(evt.target.value)}
                    >
                      <MenuItem className="custom-search-haed" value="allCategory">
                          All Category
                      </MenuItem>
                      {options.map((option, idx)=>(
                          <MenuItem key={idx} value={option} >{option}</MenuItem>
                      ))}
                    </Select>
                </FormControl>
                <IconButton sx={{ color: "gray", my: 0, p: 1, height:'100%' }}>
                    <Search sx={{ fontSize: 24 }} />
                </IconButton>
            </Box>
        </Grid> */}
        <Grid item sm={12} lg={8} sx={{display:'flex', justifyContent:'end'}}>
          <Box>
            <Typography
              component={"p"}
              color={"#d54500"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
            >
              สอบถามรายละเอียด
            </Typography>
            <Typography
              component={"p"}
              color={"#d54500"}
              fontWeight={1000}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
            >
              <Call sx={{ mr: 1 }} /> 02-1235678-90
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;

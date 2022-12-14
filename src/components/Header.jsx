import { Search } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  ImageListItem,
  TextField,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import ColorUse from "../assets/theme/ColorUse";



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
  // const [modalToggle, setModalToggle] = React.useState(false);
  const [textSearchList, setTextSearchList] = React.useState("allCategory");
  const path = window.location.pathname;

  if (path.search("admin") === 1) return null;
  return (
    <Box className="" >

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
            color={"#f1132a"}
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
                background: "#f1132a",
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
                    backgroundColor: "#f1132a",
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
        justifyContent={'space-between'}
        paddingX={4}
        paddingY={0.5}
        sx={{ display: { xs: "none", lg: "flex" }, backgroundColor:ColorUse.colorPrimary }}
      >
      <Box sx={{display:'flex', justifyContent:'end', width:"100%"}}>
        <Typography fontSize={12} fontWeight={600} color="#fff">Tel. 034-103-314 , 099-421-6688</Typography>
      </Box>
      </Grid>
    </Box>
  );
}

export default Header;

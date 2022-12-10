import { ExpandLess, ExpandMore, Logout, PersonAdd, Search, Settings } from "@mui/icons-material";
import MenuHam from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Modal,
  Select,
  FormControl,
  Grid,
  TextField,
  Tooltip,
  Avatar,
  ListItemIcon,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import DrawerMenu from "./DrawerMenu";
import { useNavigate } from "react-router-dom";
import ColorUse from "../assets/theme/ColorUse";
import { useRef } from "react";

const btnLinkAction = {'&:hover':{color:'#fff', backgroundColor:ColorUse.colorPrimary}};

const DropdownCusMenu = ({
  data = { id: 0, title: "", path: "", list: [{ listTitle: "", listUrl: "" }] },
}) => {
    const navigate = useNavigate();
  const [actionMunuProducts, setActionMunuProducts] = React.useState(null);
  return (
    <>
      <Button
        sx={{
          color: Boolean(actionMunuProducts) ? "white" : ColorUse.colorGray,
          borderRadius: 0,
          py: 2,
          px: 3,
          backgroundColor: Boolean(actionMunuProducts) ? "#f1132a" : "white",
          "&:hover": {
            background: "#f1132a",
            color: "white",
          },
        }}
        id={"button_products" + data.id}
        aria-controls={
          Boolean(actionMunuProducts) ? "menu_products" + data.id : undefined
        }
        aria-haspopup="true"
        aria-expanded={Boolean(actionMunuProducts) ? "true" : undefined}
        onClick={(event) => setActionMunuProducts(event.currentTarget)}
        endIcon={Boolean(actionMunuProducts) ? <ExpandLess /> : <ExpandMore />}
      >
        {data.title}
      </Button>
      {/* List popupmenu */}
      <Menu
        id={"menu_products" + data.id}
        anchorEl={actionMunuProducts}
        open={Boolean(actionMunuProducts)}
        onClose={() => setActionMunuProducts(null)}
        MenuListProps={{
          "aria-labelledby": "button_products" + data.id,
        }}
      >
        {data.list.map((item, idx) => (
          <MenuItem key={idx} onClick={() => {setActionMunuProducts(null);navigate(data.path)}}>
            {item.listTitle}
              {data.path}
              {item.listUrl}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

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


// *************************************** function main
export default function Navbar() {
  const [modalToggle, setModalToggle] = useState(false);
  const [textSearchList, setTextSearchList] = useState("allCategory");
  const [actionHamburger, setActionHamburger] = useState(false);
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const refElmAccount = useRef(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  useEffect(() => {
    setData([
      {
        id: 1,
        title: "หน้าหลัก (HOME)",
        path: "/",
        list: [],
      },
      {
        id: 2,
        title: "สินค้าใหม่ (NEW PRODUCTS)",
        path: "/category",
        list: [],
      },
      {
        id: 4,
        title: "ข่าวสาร/บทความ (NEWS/ARTICLES)",
        path: "/new-articles",
        list: [],
      },
      {
        id: 5,
        title: "เกี่ยวกับเรา",
        path: "/about-us",
        list: [],
      },
      {
        id: 6,
        title: "ติดต่อเรา (CONTACT US)",
        path: "/contact-us",
        list: [],
      },
    ]);
  }, []);
  const path = window.location.pathname;

  if (path.search("admin") === 1) return null;
  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{
        boxShadow: "none",
        borderTop: "0.75px solid #e0e0e0",
        borderBottom: "0.75px solid #e0e0e0",
        height:60,
      }}
    >
      <Container
        maxWidth={"100%"}
        sx={{
          borderRight: "none",
          borderLeft: "none",
          paddingX: { xs: 3, xl: 5 },
        }}
      >
        <Box sx={{ display: { xs: "none", lg: "block" }}}>
          <Grid container>
            <Grid item xs={12} md={10}>
              <Box sx={{overflowX:'auto', maxWidth: '100%' }}>
                {data.map((obj) => {
                  return obj.list.length < 1 ? (
                    <Button
                      onClick={() => navigate(obj.path)}
                      className={'t-button-navbar'}
                      key={obj.id}
                      sx={{
                        color: ColorUse.colorGray,
                        borderRadius: 0,
                        height:60,
                        py: 2,
                        px: 3,
                        "&:hover": {
                          background: "#f1132a",
                          color: "white",
                        },
                      }}
                    >
                      {obj.title}
                    </Button>
                  ) : (
                    <DropdownCusMenu key={obj.id} data={obj} />
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={12} md={2} sx={{py:1}}>
              <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center', height:'100%', borderLeft:'1px solid #efefef'}}>
                <React.Fragment>
                  <Box id="elm_box_userAccount" ref={refElmAccount} sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2, backgroundColor: open ? ColorUse.colorPrimary : 'initial'}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                      >
                        <Avatar sx={{width:35, height:35}} src={""} alt="U" />
                      </IconButton>
                    </Tooltip>
                    <Typography sx={{ minWidth: 100, color: open ? ColorUse.colorPrimary : ColorUse.colorGray }} className='t-button-navbar'>Username</Typography>
                  </Box>
                  <Menu
                    anchorEl={ Boolean(refElmAccount) ? refElmAccount.current : null}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      sx:{ mt:1 }
                    }}
                    transformOrigin={{ horizontal: "center", vertical: 'top' }}
                    anchorOrigin={{ horizontal: "center", vertical: 'bottom' }}
                  >
                    <MenuItem sx={btnLinkAction}>
                      <ListItemIcon sx={{color:'inherit'}}>
                        <PersonAdd sx={{color:'inherit'}} fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem sx={btnLinkAction}>
                      <ListItemIcon sx={{color:'inherit'}}>
                        <Settings sx={{color:'inherit'}} fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem sx={btnLinkAction}>
                      <ListItemIcon sx={{color:'inherit'}}>
                        <Logout sx={{color:'inherit'}} fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Mobile Mode */}
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            justifyContent: "space-between",
            alignItems: "center",
            paddingY: 1,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={2} sx={{display:'flex', justifyContent:'start'}} ></Grid>
            <Grid item xs={8}>
              <Typography component={"a"} href={"/"} sx={{display:'flex', justifyContent:'center'}}>
                <Box sx={{ width: {xs:100, lg:250} }}>
                  <img
                    src="assets/images/logos/logo-mobile.png"
                    style={{ width:'100%'}}
                    alt="logo"
                    loading="lazy"
                  />
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{display:'flex', justifyContent:'end', alignItems:'center'}}>
              <IconButton
                onClick={() => setActionHamburger(true)}
                sx={{
                  background: "#f1132a",
                  color: "white",
                  height: 'fit-content',
                  borderRadius: 2,
                  ":hover": { color: "#f1132a", boxShadow: "0 0 0 1px #f1132a" },
                }}
              >
                <MenuHam sx={{ fontSize: 25 }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>

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
                    MenuProps={{
                      transformOrigin:{ horizontal: "center", vertical: 'top' },
                      anchorOrigin:{ horizontal: "center", vertical: 'bottom' },
                      PaperProps:{
                          sx:{
                            maxHeight:400, 
                            mt:1,
                            '& .MuiButtonBase-root.Mui-selected':{
                            backgroundColor: ColorUse.colorPrimary,
                            color: '#fff'
                          }
                        }
                      }
                    }}
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
      </Container>
      {/* mobile mode menu */}
      <DrawerMenu
        anchor={"left"}
        open={actionHamburger}
        close={setActionHamburger}
        items={data}
        setModalToggle={setModalToggle}
      />
    </AppBar>
  );
}

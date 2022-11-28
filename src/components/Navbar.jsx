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
  Divider,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import DrawerMenu from "./DrawerMenu";
import { useNavigate } from "react-router-dom";

const paperstyle = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}

const DropdownCusMenu = ({
  data = { id: 0, title: "", path: "", list: [{ listTitle: "", listUrl: "" }] },
}) => {
    const navigate = useNavigate();
  const [actionMunuProducts, setActionMunuProducts] = React.useState(null);
  return (
    <>
      <Button
        sx={{
          color: Boolean(actionMunuProducts) ? "white" : "#00005f",
          borderRadius: 0,
          py: 2,
          px: 3,
          backgroundColor: Boolean(actionMunuProducts) ? "#00005f" : "white",
          "&:hover": {
            background: "#00005f",
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
        id: 3,
        title: "สินค้า",
        path: "/category",
        list: [{ listTitle: "เครื่องมือทางการใช้ 1", listUrl: "/tools1" }],
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
                        color: "#00005f",
                        borderRadius: 0,
                        height:60,
                        py: 2,
                        px: 3,
                        "&:hover": {
                          background: "#00005f",
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
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                      >
                        <Avatar sx={{width:35, height:35}} src={"data:image/jpeg;base64,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"} alt="m" />
                      </IconButton>
                    </Tooltip>
                    <Typography sx={{ minWidth: 100 }} className='t-text-primary t-button-navbar'>Username</Typography>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={paperstyle}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <MenuItem>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <Logout fontSize="small" />
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
            paddingY: 2,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={2} sx={{display:'flex', justifyContent:'start'}} ></Grid>
            <Grid item xs={8}>
              <Typography component={"a"} href={"/"} sx={{display:'flex', justifyContent:'center'}}>
                <Box sx={{ width: {xs:160, lg:250} }}>
                  <img
                    src="https://snp-scientific.com/wp-content/uploads/2022/02/snp-logo04.png"
                    style={{ width:'100%'}}
                    alt="logo"
                    loading="lazy"
                  />
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{display:'flex', justifyContent:'end'}}>
              <IconButton
                onClick={() => setActionHamburger(true)}
                sx={{
                  background: "#00005f",
                  color: "white",
                  borderRadius: 2,
                  ":hover": { color: "#00005f", boxShadow: "0 0 0 1px #00005f" },
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

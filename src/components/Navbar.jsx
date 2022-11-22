import { ExpandLess, ExpandMore, Search } from "@mui/icons-material";
import MenuHam from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Typography,
  Menu,
  MenuItem,
  ImageListItem,
  IconButton,
  Link,
  ListItemButton,
  Modal,
  Select,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import DrawerMenu from "./DrawerMenu";
import { useNavigate } from "react-router-dom";

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
        <Box sx={{ display: { xs: "none", lg: "block" }, overflowX:'auto', maxWidth: '100%' }}>
          {data.map((obj) => {
            return obj.list.length < 1 ? (
              <Button
                onClick={() => navigate(obj.path)}
                // href={obj.path}
                key={obj.id}
                sx={{
                  color: "#00005f",
                  borderRadius: 0,
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

        {/* Mobile Mode */}
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            justifyContent: "space-between",
            alignItems: "center",
            paddingY: 2,
          }}
        >
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
          <Box>
            <IconButton
              onClick={() => setModalToggle(true)}
              sx={{
                display: { xs: "", lg: "none" },
                marginRight: 1,
                background: "#00005f",
                color: "white",
                borderRadius: 2,
                ":hover": { color: "#00005f", boxShadow: "0 0 0 1px #00005f" },
              }}
            >
              <Search sx={{ fontSize: 25 }} />
            </IconButton>
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
          </Box>
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
        anchor={"right"}
        open={actionHamburger}
        close={setActionHamburger}
        items={data}
      />
    </AppBar>
  );
}

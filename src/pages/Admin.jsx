import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Container,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
  IconButton,
  Typography,
  Button,
  Stack,
  Table,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ModalProduct from "../components/ModalProduct";
import ModalCategory from "../components/ModalCategory";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Admin(props) {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();
  const auth = getAuth(props.app);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalCategory, setOpenModalCategory] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (window.localStorage.getItem("user")) {
      const user = auth.currentUser;
      if (!user) {
        navigate("/admin-login");
      }
    }
  });
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Product" {...a11yProps(0)} />
            <Tab label="Category" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container mx="auto">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Button variant="contained">
                <Typography
                  variant="button"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Add Product
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mt={2}>
              <TableContainer component={Paper}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Product Name</TableCell>
                    <TableCell align="center">Category</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell align="center" sx={{ width: "10%" }}>
                    Id
                  </TableCell>
                  <TableCell align="center" sx={{ width: "30%" }}>
                    Product Name
                  </TableCell>
                  <TableCell align="center" sx={{ width: "30%" }}>
                    Category
                  </TableCell>
                  <TableCell align="center" sx={{ width: "20%" }}>
                    Price
                  </TableCell>
                  <TableCell align="center" sx={{ width: "10%" }}>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      // PaperProps={{
                      //   style: {
                      //     maxHeight: ITEM_HEIGHT * 4.5,
                      //     width: "20ch",
                      //   },
                      // }}
                    >
                      <MenuItem
                        onClick={() => {
                          setOpenModal(true);
                        }}
                      >
                        Edit
                      </MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </Menu>
                  </TableCell>
                </TableBody>
              </TableContainer>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container mx="auto">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Button variant="contained">
                <Typography
                  variant="button"
                  onClick={() => {
                    setOpenModalCategory(true);
                  }}
                >
                  Add Category
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} mt={2}>
              <TableContainer component={Paper}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Product Name</TableCell>
                    <TableCell align="center">Category</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell align="center" sx={{ width: "10%" }}>
                    Id
                  </TableCell>
                  <TableCell align="center" sx={{ width: "30%" }}>
                    Product Name
                  </TableCell>
                  <TableCell align="center" sx={{ width: "30%" }}>
                    Category
                  </TableCell>
                  <TableCell align="center" sx={{ width: "20%" }}>
                    Price
                  </TableCell>
                  <TableCell align="center" sx={{ width: "10%" }}>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      // PaperProps={{
                      //   style: {
                      //     maxHeight: ITEM_HEIGHT * 4.5,
                      //     width: "20ch",
                      //   },
                      // }}
                    >
                      <MenuItem
                        onClick={() => {
                          setOpenModal(true);
                        }}
                      >
                        Edit
                      </MenuItem>
                      <MenuItem>Delete</MenuItem>
                    </Menu>
                  </TableCell>
                </TableBody>
              </TableContainer>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>

      <ModalProduct open={openModal} handleClose={() => setOpenModal(false)} />
      <ModalCategory
        open={openModalCategory}
        handleClose={() => setOpenModalCategory(false)}
      />
    </Container>
  );
}

export default Admin;

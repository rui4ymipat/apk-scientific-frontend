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
import {
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../services/category_service";
import { getProducts, deleteProduct } from "../services/product_service";
import Chip from "@mui/material/Chip";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CategoryList from "../components/CategoryList";
import Brand from "../components/Brand";
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
  const [indexCategory, setIndexCategory] = React.useState(0);
  const [categoryEditName, setOnEditCategoryName] = React.useState("");
  const [onEditCategory, setOnEditCategory] = React.useState(false);
  const [categoryName, setCategoryName] = React.useState("");
  const [category, setCategory] = React.useState([]);

  const [products, setProducts] = React.useState([]);
  const [productValue, setProductValue] = React.useState();
  const [editMode, setEditMode] = React.useState(false);

  const [fetchDataFirst, setFetchDataFirst] = React.useState(true);
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

  React.useEffect(() => {
    if (fetchDataFirst) {
      getCategory().then((res) => {
        setCategory(res);
      });
      getProducts().then((res) => {
        setProducts(res);
      });
      setFetchDataFirst(false);
    }
  }, []);

  const onClickCreateCategory = async () => {
    await addCategory({
      category_name: categoryName,
    });
    getCategory().then((res) => {
      setCategory(res);
    });
    setCategoryName("");
  };

  const onClickUpdateCategory = async (index) => {
    setOnEditCategory(true);
    setOnEditCategoryName(category[index].category_name);
    setIndexCategory(index);
  };

  const onClickEditCategory = async () => {
    console.log(category[indexCategory]);
    await updateCategory({
      category_name: categoryEditName,
      id: category[indexCategory].id,
    });
    getCategory().then((res) => {
      setCategory(res);
    });
    setOnEditCategory(false);
    setOnEditCategoryName("");
  };

  const onClickDeleteCategory = async (index) => {
    await deleteCategory(category[index].id);

    getCategory().then((res) => {
      setCategory(res);
    });
  };

  const editProduct = async (index) => {
    setProductValue(products[index]);
    setOpenModal(true);
    setEditMode(true);
  };

  const deleteProducts = async (index) => {
    console.log(products[index].id);
    await deleteProduct(products[index].id);
    getProducts().then((res) => {
      setProducts(res);
    });
  };

  if (fetchDataFirst) return <div>Loading...</div>;

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Product" {...a11yProps(0)} />
            <Tab label="Category" {...a11yProps(1)} />
            <Tab label="Category list" {...a11yProps(2)} />
            <Tab label="Brand" {...a11yProps(2)} />
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
                    <TableCell align="center">Product Name</TableCell>
                    <TableCell align="center">Category</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell align="center" sx={{ width: "30%" }}>
                        {product.name}
                      </TableCell>
                      <TableCell align="center" sx={{ width: "30%" }}>
                        <Stack direction="row" spacing={1}>
                          {product.category.map((cat) => {
                            const findData = category.find((c) => c.id === cat);
                            return <Chip label={findData.category_name} />;
                          })}
                        </Stack>
                      </TableCell>
                      <TableCell align="center" sx={{ width: "20%" }}>
                        {product.price}
                      </TableCell>
                      <TableCell align="center" sx={{ width: "10%" }}>
                        <Stack direction="row" spacing={1}>
                          <IconButton onClick={() => editProduct(index)}>
                            <EditRoundedIcon />
                          </IconButton>
                          <IconButton>
                            <DeleteRoundedIcon
                              onClick={() => deleteProducts(index)}
                            />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TableContainer>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container mx="auto" alignItems="center">
            <Grid item xs={5}>
              <TextField
                variant="outlined"
                label="Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} ml={2}>
              <Button variant="contained">
                <Typography variant="button" onClick={onClickCreateCategory}>
                  Add Category
                </Typography>
              </Button>
            </Grid>
            {onEditCategory && (
              <>
                <Grid item xs={5} mt={2}>
                  <TextField
                    variant="outlined"
                    label="Category Name"
                    value={categoryEditName}
                    onChange={(e) => setOnEditCategoryName(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} ml={2}>
                  <Button variant="contained">
                    <Typography variant="button" onClick={onClickEditCategory}>
                      Edit
                    </Typography>
                  </Button>
                </Grid>
              </>
            )}
            <Grid item xs={7} mt={2}>
              <TableContainer component={Paper}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center"> Category Name</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                {category.map((item, idx) => {
                  return (
                    <TableBody key={idx}>
                      <TableCell align="center" sx={{ width: "30%" }}>
                        {item.category_name}
                      </TableCell>
                      <TableCell align="center" sx={{ width: "5%" }}>
                        <Button
                          onClick={() => {
                            onClickUpdateCategory(idx);
                          }}
                          variant="contained"
                          fullWidth
                        >
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell align="center" sx={{ width: "5%" }}>
                        <Button
                          variant="contained"
                          onClick={() => {
                            onClickDeleteCategory(idx);
                          }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableBody>
                  );
                })}
              </TableContainer>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CategoryList category={category} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Brand category={category} />
        </TabPanel>
      </Box>

      <ModalProduct
        open={openModal}
        app={props.app}
        handleClose={() => {
          setOpenModal(false);
          setProductValue({});
          getProducts().then((res) => {
            setProducts(res);
          });
        }}
        category={category}
        editValue={productValue}
        edit={editMode}
      />
      <ModalCategory
        open={openModalCategory}
        handleClose={() => setOpenModalCategory(false)}
      />
    </Container>
  );
}

export default Admin;

import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Details from "../components/product/Details";
import Gallery from "../components/product/Gallery";
import ProductsSlide from "../components/product/ProductsSlide";
import { getProductById, getProducts } from "../services/product_service";
import { getCategory } from "../services/category_service";

function Product() {
  const [product, setProduct] = React.useState({});
  const [imgList, setImgList] = React.useState([]);
  const [productRelate, setProductRelate] = React.useState([]);

  React.useEffect(() => {
    const pathname = window.location.pathname.split("/product/");
    getProductById(pathname[1]).then((res) => {
      getCategory().then((cates) => {
        setProduct({
          title: res.name,
          price: res.price,
          details: res.description,
          column: res.tableColumn,
          list: res.tableRow,
          category: res.category.map((cate, idx) => {
            return cates.find((obj) => obj.id === cate);
          }),
        });
        setImgList(res.image);
      });
    });
    getProducts().then((res) => {
      setProductRelate(
        res.map((product, idx) => {
          return {
            id: product.id,
            product_name: product.name,
            price: product.price,
            img: product.image[0],
            path: "/product/" + product.id,
          };
        })
      );
    });
  }, []);

  const handleNewProduct = (id) => {
    getProductById(id).then((res) => {
      getCategory().then((cates) => {
        setProduct({
          title: res.name,
          price: res.price,
          details: res.description,
          column: res.tableColumn,
          list: res.tableRow,
          category: res.category.map((cate, idx) => {
            return cates.find((obj) => obj.id === cate);
          }),
        });
        setImgList(res.image);
      });
    });
  };
  return (
    <Box sx={{ paddingX: { xs: 3, xl: 5 }, paddingY: { xs: 3, xl: 5 } }}>
      <Grid container justifyContent={"center"}>
        <Grid
          item
          xs={12}
          sm={7}
          lg={6}
          xl={5}
          sx={{ px: { xs: 2, md: 4 }, mb: { xs: 5, xl: 3 } }}
        >
          <Gallery data={imgList} />
        </Grid>
        <Grid item xs={12} lg={6} xl={7} sx={{ px: { xs: 2, md: 4 } }}>
          <Details
            title={product.title}
            tableHead={product.column}
            list={product.list}
            details={product.details}
            category={product.category}
          />
        </Grid>
        <Grid item xs={12} mt={5}>
          <Typography
            sx={{
              fontSize: 14,
              textTransform: "uppercase",
              fontWeight: "600",
              color: "#444",
              borderBottom: "1px solid #e0e0e0",
              pb: 1,
            }}
          >
            Related products
          </Typography>
          <ProductsSlide
            productRelate={productRelate}
            handleNewProduct={handleNewProduct}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Product;

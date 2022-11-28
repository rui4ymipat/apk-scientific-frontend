import { FormatListBulleted, Widgets } from "@mui/icons-material";
import { Grid, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryMenu from "../components/category/CategoryMenu";
import ListCateItem from "../components/category/ListCateItem";
import { getCategoryList } from "../services/list_category_service";
import { getCategory } from "../services/category_service";
import { getProducts } from "../services/product_service";

function Category() {
  // ================================= function main
  const [sortBy, setSortBy] = useState("popularity");
  const [countProductShow, setcountProductShow] = useState(10);
  const [showDataGrid, setShowDataGrid] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [productCategory, setProductCategory] = useState([]);

  const [products, setproducts] = useState([]);
  const [menuCategory, setMenuCategory] = useState([]);

  const loopSetMenu = (data, idx) => {
    return data.map((sub, idx_sub) => {
      return {
        id_node: `${idx}-${idx_sub}`,
        node_parent: idx,
        id: idx_sub,
        title: sub.name,
        path: "/category/" + sub.name,
        sub_menu: [],
      };
    });
  };

  useEffect(() => {
    getCategory().then((res) => {
      const cates = res;
      setCategoryList(res);
      getProducts().then((res) => {
        setproducts(
          res.map((product, idx) => {
            return {
              id: idx + 1,
              product_name: product.name,
              price: product.price,
              img: product.image[0],
              path: "/product/" + product.id,
              categoryOther: product.category.map((cate, idx) => {
                return cates.find((obj) => obj.id === cate);
              }),
            };
          })
        );
      });
    });
    getCategoryList().then((res) => {
      let newData = [];
      res.map((item, idx) => {
        newData.push({
          id_node: `${idx}`,
          node_parent: null,
          id: idx + 1,
          title: item.name,
          path: "/category/" + item.name,
          sub_menu: item.sub_list.map((sub, idx_sub) => {
            return {
              id_node: `${idx}-${idx_sub}`,
              node_parent: `${idx}`,
              id: idx_sub + 1,
              title: sub.name,
              path: "/category/" + sub.name,
              sub_menu: loopSetMenu(sub.sub_list, `${idx}-${idx_sub}`),
            };
          }),
        });
      }); setProductCategory(newData);
      
      // console.log(res);
      setMenuCategory(
        res.map((list, idx) => {
          return {
            id: idx + 1,
            title: list.name,
            main_path: "/category/" + list.name,
            list: list.sub_list.map((sub) => {
              return {
                listTitle: sub.name,
                path: "/category/" + sub.name,
              };
            }),
          };
        })
      );
      // setMenuCategory(
      //   res.map((list, idx) => {
      //     return {
      //       id: idx + 1,
      //       title: list.name,
      //       main_path: "/category/" + list.name,
      //       list: list.sub_list.map((sub) => {
      //         return {
      //           listTitle: sub.name,
      //           path: "/category/" + sub.name,
      //         };
      //       }),
      //     };
      //   })
      // );
    });
  }, []);

  return (
    <Box sx={{ paddingX: { xs: 3, xl: 5 }, paddingY: { xs: 3, xl: 5 } }}>
      {/* phase 1 */}
      <Grid
        container
        flexDirection={{ xs: "column-reverse", lg: "row" }}
        spacing={5}
        sx={{ marginBottom: 8 }}
      >
        {/* Category Menu */}
        <Grid item xs={12} lg={3}>
          <Box>
            {/* <Box p={2} border={'0.5px solid #e0e0e0'} borderBottom={'none'} >
                        <Typography sx={{fontSize:18, fontWeight: 600, mb:1}}>ค้นหาสินค้า</Typography>
                        <TextField 
                        sx={{
                            width:'100%',
                            marginBottom: 2
                        }}
                        id="search_input" label="Search" variant="standard" />
                        <Button sx={{backgroundColor:'#00005f', color:'#fff', ':hover': {backgroundColor:'#00009f'}}}>
                            <Typography>ค้าหา</Typography>
                        </Button>
                    </Box> */}
            <Box>
              {menuCategory.length > 0 ? (
                <CategoryMenu brand={products} data={productCategory} />
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </Grid>

        {/* Content Products Show */}
        <Grid item xs={12} lg={9}>
          <Box>
            <Grid container>
              {/* filter */}
              <Grid item xs={12} mb={5}>
                <Box
                  sx={{
                    pb: 2,
                    display: { xs: "block", sm: "flex" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "0.5px solid #e0e0e0",
                  }}
                >
                  {/* <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 8,
                    }}
                  >
                    <label htmlFor="seleted-sort" style={{ marginRight: 5 }}>
                      Sort by :
                    </label>
                    <TextField
                      id="seleted-sort"
                      select
                      // label="Sort"
                      value={sortBy}
                      onChange={(evt) => setSortBy(evt.target.value)}
                      SelectProps={{
                        native: true,
                      }}
                      variant="standard"
                      sx={{
                        border: "1px solid #e0e0e0",
                        borderRadius: 1,
                        "::before": { borderBottom: "none" },
                        "::after": { borderBottom: "none" },
                      }}
                    >
                      <option value="popularity" selected>
                        Sort by popularity
                      </option>
                      {[
                        { value: "1", label: "Title" },
                        { value: "2", label: "Title" },
                      ].map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div> */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 8,
                    }}
                  >
                    <label htmlFor="seleted-sort" style={{ marginRight: 5 }}>
                      Display :
                    </label>
                    {/* <TextField
                      id="seleted-sort"
                      select
                      // label="Sort"
                      value={countProductShow}
                      onChange={(evt) => setcountProductShow(evt.target.value)}
                      SelectProps={{
                        native: true,
                      }}
                      variant="standard"
                      sx={{
                        border: "1px solid #e0e0e0",
                        borderRadius: 1,
                        "&::before": { borderBottom: "none" },
                      }}
                    >
                      <option value="10" selected>
                        10
                      </option>
                      {[
                        { value: "1", label: "20" },
                        { value: "2", label: "35" },
                      ].map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField> */}
                    <Button onClick={() => setShowDataGrid(!showDataGrid)}>
                      {showDataGrid ? <FormatListBulleted /> : <Widgets />}
                    </Button>
                  </div>
                </Box>
              </Grid>

              {/* list product */}
              <Grid item xs={12}>
                {products.length > 0 ? (
                  <ListCateItem data={products} showGrid={showDataGrid} />
                ) : (
                  <></>
                )}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Category;

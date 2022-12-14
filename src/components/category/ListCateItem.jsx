import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { WarningAmber } from "@mui/icons-material";
import CardProduct from "./CardProduct";

// ======================== function main
function ListCateItem({
  data = [{
    category:[],
    created_at: 0,
    description: "",
    id: "",
    image: [],
    name: "",
    price: "",
    tableColumn: [],
    tableRow: []
  }],
  showGrid = true,
  dataShow = [],
  handleChangeCategory=()=>{},
  loader=false
}) {
  return data.length > 0 ? (
    <Box>
      {showGrid ? (
        //  **************************** show data to Grid
        <Grid container spacing={3}>
          {data.map((obj) => {
            return (
              <Grid key={obj.id} item xs={6} md={4} lg={3} mb={3}>
                <CardProduct loader={loader} showGrid={true} data={obj} dataShow={dataShow} handleChangeCategory={(id, name)=>{handleChangeCategory(id, name)}} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        //  **************************** show data to list
        <Grid container spacing={3}>
          {data.map((obj) => {
            return (
              <Grid key={obj.id} item xs={12} mb={3}>
                <CardProduct loader={loader} showGrid={false} data={obj} dataShow={dataShow} handleChangeCategory={(id, name)=>{handleChangeCategory(id, name)}} />
                {/* <div
                  onClick={() => {
                    navigate(obj.path);
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={[styleCard, { borderBottom: "0.5px solid #e0e0e0" }]}
                  >
                    <Grid container>
                      <Grid item xs={12} lg={4} xl={3}>
                        <Box mb={2}>
                          <img
                            src={obj.img}
                            alt={obj.product_name}
                            style={{ maxWidth: "100%" }}
                            className='t-img-product'
                          />
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        lg={8}
                        xl={9}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Box>
                          <Box sx={[styleOtherCate]}>
                            {obj.categoryOther.map((objOther, idx) => (
                              <Link
                                key={idx}
                                sx={[
                                  {
                                    fontSize: 12,
                                    color: "gray",
                                    ":hover": { color: "#f1132a" },
                                  },
                                ]}
                              >
                                {objOther.title}{" "}
                              </Link>
                            ))}
                          </Box>
                          <Typography
                            component={"p"}
                            className='t-text-wrap-3'
                            sx={{
                              fontSize: 14,
                              color: "#444",
                              ":hover": { color: "#f1132a" },
                            }}
                          >
                            {obj.product_name}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </div> */}
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  ) : (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ textAlign: "center", color: "#595959" }}>
            <Box mb={2}>
              <WarningAmber sx={{ fontSize: 60 }} />
            </Box>
            <Box>
              <Typography component={"span"} sx={{ fontSize: 28 }}>
                ??????????????????????????????????????????????????????????????? !
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ListCateItem;

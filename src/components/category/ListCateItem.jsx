import React from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import { WarningAmber } from "@mui/icons-material";
import CardProduct from "./CardProduct";

// ======================== function main
function ListCateItem({
  data = [
    { id: 0, product_name: "", img: "", categoryOther: [{ id: 0, title: "" }] },
  ],
  showGrid = true,
}) {

  return data.length > 0 ? (
    <Box>
      {showGrid ? (
        //  **************************** show data to Grid
        <Grid container spacing={3}>
          {data.map((obj) => {
            return (
              <Grid key={obj.id} item xs={6} md={4} lg={3} mb={3}>
                <CardProduct showGrid={true} data={obj} />
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
                <CardProduct showGrid={false} data={obj} />
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
                                    ":hover": { color: "#00005f" },
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
                              ":hover": { color: "#00005f" },
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
              <Typography component={"p"} sx={{ fontSize: 28 }}>
                ไม่พบข้อมูลที่ต้องการ !
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ListCateItem;

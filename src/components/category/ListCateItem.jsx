import React from "react";
import { Grid, Typography, Box, Paper, Link } from "@mui/material";
import { WarningAmber } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const styleCard = {
  // width: '100%',
  cursor: "pointer",
  transition: "all 0.35s",
  p: 2,
  height: {
    xs: 320,
    md: 350,
    lg: 380
  },
  ":hover": {
    transform: "translate(0px, -25px)",
    boxShadow: "2px 2px 15px 0px rgba(0,0,0,0.25)",
  },
};
const styleOtherCate = {
  marginBottom: 2,
  display: "block",
  textTransform: "uppercase",
  lineHeight: 1.7,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
function ListCateItem({
  data = [
    { id: 0, product_name: "", img: "", categoryOther: [{ id: 0, title: "" }] },
  ],
  showGrid = true,
}) {
  // ======================== function main
  // coding......
  const navigate = useNavigate();

  return data.length > 0 ? (
    <Box>
      {showGrid ? (
        //  **************************** show data to Grid
        <Grid container spacing={3}>
          {data.map((obj) => {
            return (
              <Grid key={obj.id} item xs={6} md={4} lg={3} mb={3}>
                <div
                  onClick={() => {
                    navigate(obj.path);
                  }}
                >
                  <Paper elevation={0} sx={[styleCard]}>
                    <Box mb={2}>
                      <img
                        src={obj.img}
                        alt={obj.product_name}
                        style={{ maxWidth: "100%" }}
                        className='t-img-product'
                      />
                    </Box>
                    <Box textAlign={"center"}>
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
                  </Paper>
                </div>
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
                <div
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
                </div>
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

import {
  Box,
  Grid,
  ImageListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ColorUse from "../../assets/theme/ColorUse";

// ======================== function main
function Details({
  title = "",
  list = [{ id: "", name: "", size: "" }],
  details = "",
  tableHead = [],
  category = [],
}) {

  const navigate = useNavigate();

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} mb={6}>
          <Typography
            variant={"h1"}
            sx={{ color: ColorUse.colorPrimary, fontSize: 20, marginBottom: 1 }}
          >
            {title}
          </Typography>
          {/* <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {tableHead.map((item, index) => (
                    <TableCell
                      key={index}
                      sx={{ border: "1px solid #e0e0e0", fontSize: 16 }}
                    >
                      {item}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((row, idx) => {
                  if (row.length > 0) {
                    const splitData = row.split(",");
                    return (
                      <TableRow>
                        {splitData.map((item, index) => (
                          <TableCell
                            sx={{
                              border: "1px solid #e0e0e0",
                              color: ColorUse.colorGray,
                            }}
                          >
                            {row}
                          </TableCell>
                        ))}
                      </TableRow>
                    );
                  } else {
                    return <></>;
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer> */}
        </Grid>

        {/* details */}
        <Grid item xs={12} mb={3}>
          <Typography>{details} Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, et reprehenderit neque culpa sit officia dolorem quis nobis laborum beatae repudiandae dolore asperiores libero a enim hic deleniti eius atque odio, ad autem aut ducimus. Animi hic dolorum vero similique, mollitia provident error voluptate deserunt iste quisquam, laborum debitis nostrum libero labore nisi ipsa. Dolorem, impedit perspiciatis exercitationem et repellat rem earum id corrupti illum fuga dicta eum ex magnam quia laboriosam placeat voluptate at. Rerum odio, atque quisquam harum quia et ex cum natus iure non ratione repellendus ad veritatis voluptatibus tempora culpa adipisci repudiandae explicabo dignissimos? Veritatis, cum. </Typography>
        </Grid>

        {/* categories */}
        <Grid item xs={12} mb={3}>
          <Typography sx={{ fontSize: 13 }}>
            CATEGORIES :
            {category.map((obj, idx) => {
              return (
                <Typography
                  className="t-btn-link-category"
                  key={idx}
                  component={"span"}
                  onClick={()=>{navigate('/category/'+obj.id)}}
                >
                  {obj.category_name}
                  {idx === 2 ? "" : ", "}
                </Typography>
              );
            })}
          </Typography>
        </Grid>
        {/* image brand */}
        {/* <Grid item xs={12} mb={3}>
          <ImageListItem>
            <img
              src={
                "https://snp-scientific.com/wp-content/uploads/2021/02/Hirschmann-lOGO-1.png"
              }
              style={{ width: 180 }}
              className={"t-img-fluid"}
              alt="brand"
            />
          </ImageListItem>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default Details;

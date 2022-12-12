import { ExpandMore, Add, Remove, Search } from "@mui/icons-material";
import { TreeItem, TreeView } from "@mui/lab";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuItem,
  Autocomplete,
  TextField,
  Button,
  Skeleton,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ColorUse from "../../assets/theme/ColorUse";
// import $ from 'jquery';

const style = {
  callapseHead: {
    backgroundColor: "rgba(0,0,0,0)",
    boxShadow: "none",
  },
  linkMenu: {
    color: "#696969",
    ":hover": { color: ColorUse.colorPrimary },
    textDecoration: "none",
    width: "100%",
    height: "100%",
  },
  badegeBrand: {
    width: "100%",
  },
};

// ================ function main
function CategoryMenu({
  data = [
    {
      id_node: "",
      node_parent: null,
      id: 0,
      title: "",
      path: "",
      sub_menu: [],
    },
  ],
  brand = [
    {
      id_brand: 1,
      name: "",
      amount: 0,
    },
  ],
  onChangeCategory = () => {},
  dataShow = [],
  loader = false,
  allCategory = [],
}) {
  const { categoryId } = useParams();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  // function stack list path Treeview
  const createHandler = async (item, idNode, nodeParent) => {
    // console.log(`node: ${id} parent: ${nodeParent}`);
    if (selected === idNode) {
      setSelected([]);
    } else {
      setSelected(idNode);
    }
    if (!expanded.includes(idNode)) {
      const last_ar = expanded.filter(
        (row, idx) => idx === expanded.length - 1
      );
      if (last_ar[0] === nodeParent) {
        if (item.sub_menu.length > 0) setExpanded([...expanded, idNode]);
      } else if (last_ar.length === 0) {
        if (item.sub_menu.length > 0) setExpanded([...expanded, idNode]);
      } else {
        if (nodeParent === null) {
          setExpanded([idNode]);
        } else {
          setExpanded([nodeParent, idNode]);
        }
      }
    } else {
      setExpanded(
        expanded.filter((i) => i !== idNode && !i.startsWith(`${idNode}.`))
      );
    }
  };

  const [expandCate, setExpandCate] = useState(true);
  const [expandBrand, setExpandBrand] = useState(true);

  const TreeCusItem = (nodes) => {
    return (
      <TreeItem
        key={nodes.id_node}
        className="t-custom-listmenu"
        onClick={() => {
          createHandler(nodes, nodes.id_node, nodes.node_parent, nodes.path);
        }}
        nodeId={nodes.id_node}
        label={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 0.5,
              pr: 0,
            }}
          >
            <Typography className="t-text-listmenu">{nodes.title}</Typography>
          </Box>
        }
      >
        {Array.isArray(nodes.sub_menu)
          ? nodes.sub_menu.map((node) => TreeCusItem(node))
          : null}
      </TreeItem>
    );
  };

  return data.length > 0 ? (
    <Box className="content-menu-category " sx={{ height: "100%" }}>
      {loader ? (
        <Skeleton variant="rounded" width={"100%"} height={"100%"} />
      ) : (
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: 3 }}>
            <Box display={"flex"} alignItems="center" flexDirection={"row"}>
              <Box sx={{ width: "80%" }}>
                <Autocomplete
                  multiple
                  limitTags={1}
                  id="multiple-search-category"
                  className="t-multiselect"
                  options={allCategory}
                  getOptionLabel={(option) => option.category_name}
                  defaultValue={[]}
                  size={"small"}
                  sx={{
                    maxWidth: "100%",
                    "& input.Mui-focused + .MuiOutlinedInput-notchedOutline": {
                      borderColor: "red",
                    },
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="" placeholder="Seach...." />
                  )}
                />
              </Box>
              <Button
                variant="contained"
                sx={{
                  width: "20%",
                  height: "100%",
                  m: 0,
                  color: "#fff",
                  backgroundColor: ColorUse.colorPrimary + " !important",
                  ml: 1,
                  border: "2px solid " + ColorUse.colorPrimary,
                }}
              >
                <Search />
              </Button>
            </Box>
          </Grid>

          {/* products */}
          <Grid item xs={12}>
            <TreeView
              //   aria-label="controlled"
              defaultCollapseIcon={<Remove />}
              defaultExpandIcon={<Add />}
              //   expanded={expanded}
              expanded={expanded}
              selected={selected}
              //   onNodeToggle={(e, nodeIds)=>{}}
              //   onNodeSelect={handleSelect}
            >
              {data.map((row) => TreeCusItem(row))}
            </TreeView>
            <Box
              component={"div"}
              sx={{
                height: 3,
                width: { xs: "100%", lg: "100%" },
                background: "#efefef",
                maxWidth: "100%",
                marginBottom: 2,
              }}
            ></Box>
          </Grid>

          {/* Brand */}
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <Accordion
              sx={style.callapseHead}
              expanded={expandBrand}
              onChange={() => setExpandBrand(!expandBrand)}
            >
              <AccordionSummary
                sx={{
                  "&.MuiButtonBase-root": { minHeight: "auto" },
                  ".MuiAccordionSummary-content.Mui-expanded": {
                    color: ColorUse.colorPrimary,
                    margin: 0,
                  },
                }}
                id="brand_header"
                expandIcon={<ExpandMore />}
                aria-controls="brand_header_content"
              >
                <Typography sx={{ textTransform: "uppercase" }}>
                  Brand
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  component={"div"}
                  sx={{
                    height: 4,
                    width: { xs: "100%", lg: 100 },
                    background: "#efefef",
                    maxWidth: "100%",
                    marginBottom: 1,
                  }}
                ></Box>
                {dataShow.brand.map((listBrand, idx) => {
                  return (
                    <MenuItem
                      key={"brand_" + idx}
                      onClick={() => {
                        onChangeCategory(listBrand.id, listBrand.name);
                      }}
                      className="t-brand-link"
                    >
                      <Box sx={{ maxWidth: "100%", display: "flex" }}>
                        <Typography noWrap={true}>{listBrand.name} </Typography>
                        <span style={{ marginLeft: 5 }}>
                          ({listBrand.total})
                        </span>
                      </Box>
                    </MenuItem>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Categry */}
          <Grid item xs={12} sx={{ marginBottom: 2 }}>
            <Accordion
              sx={style.callapseHead}
              expanded={expandCate}
              onChange={() => setExpandCate(!expandCate)}
            >
              <AccordionSummary
                sx={{
                  "&.MuiButtonBase-root": { minHeight: "auto" },
                  ".MuiAccordionSummary-content.Mui-expanded": {
                    color: ColorUse.colorPrimary,
                    margin: 0,
                  },
                }}
                id="cate_header"
                expandIcon={<ExpandMore />}
                aria-controls="cate_header_content"
              >
                <Typography sx={{ textTransform: "uppercase" }}>
                  Category
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  component={"div"}
                  sx={{
                    height: 4,
                    width: { xs: "100%", lg: 100 },
                    background: "#efefef",
                    maxWidth: "100%",
                    marginBottom: 1,
                  }}
                ></Box>
                {dataShow.category.map((listproduct, idx) => {
                  // console.log(listproduct);
                  return (
                    <MenuItem
                      key={"brand_" + idx}
                      onClick={() =>
                        onChangeCategory(listproduct.id, listproduct.name)
                      }
                      className="t-brand-link"
                    >
                      <Box sx={{ maxWidth: "100%", display: "flex" }}>
                        <Typography noWrap={true}>
                          {listproduct.name}{" "}
                        </Typography>
                        <span style={{ marginLeft: 5 }}>
                          ({listproduct.total})
                        </span>
                      </Box>
                    </MenuItem>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      )}
    </Box>
  ) : (
    <Box></Box>
  );
}

export default CategoryMenu;

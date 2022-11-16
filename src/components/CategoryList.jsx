import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconButton, Stack, Autocomplete, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { getCategoryList, addCategory } from "../services/list_category_service";


function CategoryList(props) {
  const [list, setList] = React.useState([]);
  const [openAddList, setOpenAddList] = React.useState(false);
  const [value, setValue] = React.useState();
  const [selectCategory, setSelectCategory] = React.useState([]);
  const [ft, setFt] = React.useState(true);

  React.useEffect(() => {
    getCategoryList().then((res) => {
      setList(res);
    });
  }, [ft]);

  const onDeleteList = (position, idx1, idx2, idx3) => {
    let newList = [...list];
    if (position === 1) {
      newList.splice(idx1, 1);
    } else if (position === 2) {
      newList[idx1].sub_list.splice(idx2, 1);
    } else if (position === 3) {
      newList[idx1].sub_list[idx2].sub_list.splice(idx3, 1);
    }
    setList(newList);
  };

  const onAddList = (position, idx1, idx2, idx3) => {
    console.log(position, idx1, idx2, idx3);
    let newList = list;
    if (position == 0) {
      setList([...newList, { name: value, sub_list: [] }]);
    } else if (position == 1) {
      newList[idx1].sub_list = selectCategory.map((select) => {
        return {
          name: select,
          sub_list: [],
        };
      });
      setList([...newList]);
    } else if (position == 2) {
      newList[idx1].sub_list[idx2].sub_list = selectCategory.map((select) => {
        return {
          name: select,
          sub_list: [],
        };
      });
      setList([...newList]);
    } else if (position == 3) {
      newList[idx1].sub_list[idx2].sub_list[idx3].sub_list = selectCategory.map(
        (select) => {
          return {
            name: select,
            sub_list: [],
          };
        }
      );
      // setList([...newList]);
    }
    console.log(newList);
  };

  const onSelectList = (data) => {
    setSelectCategory(data);
  };

  const saveData = async () => {
    await addCategory(list);
  };

  return (
    <Grid container spacing={1}>
      <TransferList
        selectList={selectCategory}
        unselectList={props.category
          .filter((data) => !selectCategory.includes(data.category_name))
          .map((item) => item.category_name)}
        onSelectList={onSelectList}
        ft={ft}
        setFt={setFt}
      />
      {openAddList && (
        <Grid item xs={12}>
          <TransferList />
        </Grid>
      )}
      <Grid item xs={6}>
        <Autocomplete
          fullWidth
          disablePortal
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          id="combo-box-demo"
          options={props.category.map((item) => item.category_name)}
          renderInput={(params) => (
            <TextField fullWidth {...params} label="Movie" />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAddList(0, 0, 0, 0)}
        >
          Add
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="primary" onClick={saveData}>
          Save
        </Button>
      </Grid>
      {list.map((item, idx1) => (
        <>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={7.5}
            >
              <Typography variant="h6" component="h2">
                {item.name}
              </Typography>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}
              >
                <IconButton
                  size="small"
                  onClick={() => onAddList(1, idx1, 0, 0)}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <DeleteIcon
                    fontSize="small"
                    onClick={() => onDeleteList(1, idx1, 0, 0)}
                  />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {item.sub_list.map((sub_item, idx2) => (
            <Grid item xs={12} ml={2}>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={6}
              >
                <Typography variant="subtitle1" component="p">
                  - {sub_item.name}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  <IconButton
                    size="small"
                    onClick={() => onAddList(2, idx1, idx2, 0)}
                  >
                    <AddIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteIcon
                      fontSize="small"
                      onClick={() => onDeleteList(2, idx1, idx2, 0)}
                    />
                  </IconButton>
                </Stack>
              </Stack>

              {sub_item.sub_list.map((sub_sub_item, idx3) => (
                <Grid item xs={12} ml={2}>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={9.9}
                  >
                    <Typography variant="subtitle2" component="p">
                      - {sub_sub_item.name}
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={1}
                    >
                      <IconButton size="small">
                        <DeleteIcon
                          fontSize="small"
                          onClick={() => onDeleteList(3, idx1, idx2, idx3)}
                        />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          ))}
        </>
      ))}
    </Grid>
  );
  function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }

  function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }

  function TransferList(props) {
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState(props.unselectList);
    const [right, setRight] = React.useState(props.selectList);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    const handleAllRight = () => {
      setRight(right.concat(left));
      props.onSelectList(right.concat(left));
      setLeft([]);
    };

    const handleCheckedRight = () => {
      setRight(right.concat(leftChecked));
      props.onSelectList(right.concat(leftChecked));
      setLeft(not(left, leftChecked));
      setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
      setLeft(left.concat(rightChecked));
      setRight(not(right, rightChecked));
      props.onSelectList(not(right, rightChecked));
      setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
      setLeft(left.concat(right));
      props.onSelectList([]);
      setRight([]);
    };

    const customList = (items) => (
      <Paper sx={{ width: 500, height: 230, overflow: "auto" }}>
        <List dense component="div" role="list">
          {items.map((value) => {
            const labelId = `transfer-list-item-${value}-label`;

            return (
              <ListItem
                key={value}
                role="listitem"
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      "aria-labelledby": labelId,
                    }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value}`} />
              </ListItem>
            );
          })}
          <ListItem />
        </List>
      </Paper>
    );

    return (
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>{customList(left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllRight}
              disabled={left.length === 0}
              aria-label="move all right"
            >
              ≫
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllLeft}
              disabled={right.length === 0}
              aria-label="move all left"
            >
              ≪
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(right)}</Grid>
      </Grid>
    );
  }
}

export default CategoryList;

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCategory(props) {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const [option, setOption] = React.useState([
    { id: 1, name: "test1" },
    { id: 2, name: "test2" },
    { id: 3, name: "test3" },
  ]);

 
  return (
    <Dialog
    fullScreen
    open={props.open}
    onClose={props.handleClose}
    TransitionComponent={Transition}
  >
    <AppBar sx={{ position: "relative" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={props.handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
          Add Product
        </Typography>
        <Button autoFocus color="inherit" onClick={props.handleClose}>
          save
        </Button>
      </Toolbar>
    </AppBar>
    <Grid container spacing={2} m={3}>
      <Grid item xs={12}>
        <TextField label="Product name" />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Price" />
      </Grid>
      <Grid item xs={6}>
        <Autocomplete
          multiple
          options={option}
          getOptionLabel={(option) => option.name}
        //   defaultValue={option.value}
        //   onChange={(event, newValue) => {
        //     setOption(newValue);
        //   }}
          renderInput={(params) => (
            <TextField {...params} label="Categories" />
          )}
        />
      </Grid>
    </Grid>
  </Dialog>
  );
}

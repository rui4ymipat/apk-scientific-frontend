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
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addProduct, updateProduct } from "../services/product_service";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalProduct(props) {
  const { app, category, editValue, edit } = props;
  const storage = getStorage(app);

  const [values, setValues] = React.useState({
    name: "",
    price: "",
    category: [],
    description: "",
    image: [],
    table: [],
  });
  const [imageList, setImageList] = React.useState([]);
  const [columnName, setColumnName] = React.useState("");
  const [columns, setColumns] = React.useState([]);
  const [isAddTableRow, setIsAddTableRow] = React.useState(false);
  const [rowInput, setRowInput] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [defaultCatValue, setDefaultCatValue] = React.useState([]);
  const [ft, setFt] = React.useState(true);

  React.useEffect(() => {
    if (edit) {
      if (ft) {
        console.log(editValue.category);
        setDefaultCatValue(
          editValue.category
            .map((cat) => {
              const dataCategory = category.find((item) => item.id === cat);
              return dataCategory;
            })
            .sort((a, b) => a.id - b.id)
        );
        setImageList(editValue.image);
        setValues({
          name: editValue.name,
          price: editValue.price,
          category: editValue.category,
          description: editValue.description,
          image: editValue.image,
        });
        setColumns(editValue.tableColumn);
        setRows(editValue.tableRow.map((row) => row.split(",")));
        console.log(category);
        setFt(false);
      }
    }
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleUploadFile = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      const d = new Date();
      const file = event.target.files[i];
      const storageRef = ref(storage, `images/${file.name}_${d.getTime()}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageList([...imageList, url]);
          setValues({ ...values, image: [...values.image, url] });
        });
      });
    }
  };

  const handleChangeAddRow = (text, index) => {
    let row = [...rowInput];
    row[index] = text;
    setRowInput(row);
  };

  const addRowData = () => {
    setRows([...rows, rowInput]);
    setRowInput([]);
    setValues({ ...values, table: [...values.table, rowInput] });
    setIsAddTableRow(false);
  };

  const onClickSave = async () => {
    let newData = {
      name: values.name,
      price: values.price,
      category: values.category,
      description: values.description,
      image: values.image,
      tableColumn: columns,
      tableRow: rows.map((data) => {
        return data.join(",");
      }),
    };
    if (edit) {
      await updateProduct(editValue.id, newData);
      setValues({
        name: "",
        price: "",
        category: [],
        description: "",
        image: [],
        table: [],
      });
      setImageList([]);
      setColumns([]);
      setRows([]);
      setRowInput([]);
      props.handleClose();
    } else {
      await addProduct(newData);
      setValues({
        name: "",
        price: "",
        category: [],
        description: "",
        image: [],
        table: [],
      });
      setImageList([]);
      setColumns([]);
      setRows([]);
      setRowInput([]);
      props.handleClose();
    }
  };

  return (
    <Dialog
    fullScreen
    open={props.open}
    onClose={props.handleClose}
    TransitionComponent={Transition}
    sx={{ overflowY: "hidden" }}
  >
    <AppBar sx={{ position: "sticky" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={props.handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          {edit ? "Edit" : "Add"} Product
        </Typography>
        <Button autoFocus color="inherit" onClick={onClickSave}>
          save
        </Button>
      </Toolbar>
    </AppBar>
    <Grid container spacing={2} m={3}>
      <Grid item xs={6}>
        <Carousel
          autoPlay
          stopOnHover
          dynamicHeight
          width={500}
          thumbWidth={100}
        >
          {imageList.map((item, index) => (
            <div key={index}>
              <img src={item} alt="image" />
            </div>
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={7}>
        <Button variant="contained" component="label">
          Upload
          <input
            hidden
            onChange={handleUploadFile}
            accept="image/*"
            multiple
            type="file"
          />
        </Button>
      </Grid>
      <Grid item xs={7}>
        <TextField
          label="Product name"
          value={values.name}
          onChange={handleChange("name")}
        />
      </Grid>
      <Grid item xs={7}>
        <TextField
          label="Price"
          value={values.price}
          onChange={handleChange("price")}
        />
      </Grid>
      <Grid item xs={7}>
        <Autocomplete
          multiple
          options={category}
          disableCloseOnSelect
          getOptionLabel={(option) => option.category_name}
          onChange={(event, newValue) => {
            setValues({
              ...values,
              category: newValue.map((item) => item.id),
            });
          }}
          defaultValue={defaultCatValue}
          renderInput={(params) => (
            <TextField {...params} label="Categories" />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="div">
          Table Detail
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <TextField
          value={columnName}
          onChange={(event) => {
            setColumnName(event.target.value);
          }}
          variant="outlined"
          label="Column Name"
          fullWidth
        />
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained" disabled={isAddTableRow}>
          <Typography
            variant="button"
            onClick={() => {
              setColumns([...columns, columnName]);
              setColumnName("");
            }}
          >
            Add Column
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" disabled={columns.length === 0}>
          <Typography
            variant="button"
            onClick={() => {
              setIsAddTableRow(true);
            }}
          >
            Add Row
          </Typography>
        </Button>
      </Grid>

      <Grid item xs={9}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((item, index) => (
                  <TableCell align="center" key={index}>
                    {item}
                  </TableCell>
                ))}
                {isAddTableRow && (
                  <TableCell align="center">Action</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {isAddTableRow && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {columns.map((item, index) => (
                    <TableCell key={index}>
                      <TextField
                        onChange={(e) =>
                          handleChangeAddRow(e.target.value, index)
                        }
                        variant="outlined"
                        fullWidth
                      />
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button variant="contained">
                      <Typography variant="button" onClick={addRowData}>
                        Add
                      </Typography>
                    </Button>
                  </TableCell>
                </TableRow>
              )}
              {rows.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {columns.map((item, index) => (
                    <TableCell align="center" key={index}>
                      {row[index]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={7}>
        <Typography variant="h6" component="div">
          Text Detail
        </Typography>
      </Grid>
      <Grid item xs={7}>
        <TextField
          label="Description"
          multiline
          value={values.description}
          // rows={4}
          onChange={handleChange("description")}
          fullWidth
          variant="outlined"
        />
      </Grid>
    </Grid>
  </Dialog>
  );
}

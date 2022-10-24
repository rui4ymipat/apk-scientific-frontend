import React from "react";
import {
  Grid,
  Box,
  Container,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function AdminLogin(props) {
  const navigate = useNavigate();
  const auth = getAuth(props.app);
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    signInWithEmailAndPassword(auth, values.username, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.localStorage.setItem("user", JSON.stringify(user));
        window.localStorage.setItem("accessToken", user.accessToken);
        navigate("/admin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Username or password is incorrect");
        console.log(errorCode, errorMessage);
      });
  };

  React.useEffect(() => {
    if (window.localStorage.getItem("user")) {
      const user = auth.currentUser;
      if (user) {
        navigate("/admin");
      }
    }
  });
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          height: {
            xs: "100vh",
            sm: "100vh",
          },
        }}
        mx="auto"
        mt={{
          xs: 10,
          sm: 10,
        }}
        spacing={3}
        maxWidth="sm"
      >
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" align="center">
            Admin Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Username"
            value={values.username}
            onChange={handleChange("username")}
            fullWidth
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminLogin;

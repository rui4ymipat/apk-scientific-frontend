import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
function Navbar() {
  const [styling, setStyling] = React.useState("static");
  const [hideNavebar, setHideNavebar] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = function () {
      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;
      if (window.pageYOffset >= sticky) {
        setStyling("sticky");
      } else {
        setStyling("static");
      }
    };
  });

  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === "/admin" || path === "/admin-login") {
      setHideNavebar(true);
    }
  });
  if (hideNavebar) return null;

  return (
    <>
      <Box className="header"></Box>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
      <AppBar id="navbar" position={styling} sx={{ marginBottom: "2%" }}>
        <Toolbar disableGutters></Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;

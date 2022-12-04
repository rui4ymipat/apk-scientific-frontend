import { ShoppingBasket } from "@mui/icons-material";
import { Badge, Fab } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Basket() {
  const path = window.location.pathname;

  if (path.search("admin") === 1) return null;
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        left: 20,
        zIndex: 99,
      }}
    >
      <Fab
        sx={{
          color: "white",
          background: "#f1132a",
          ":hover": { color: "#f1132a" },
        }}
      >
        <Badge badgeContent={10} max={9}>
          <ShoppingBasket />
        </Badge>
      </Fab>
    </Box>
  );
}

export default Basket;

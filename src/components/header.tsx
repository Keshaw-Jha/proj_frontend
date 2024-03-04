import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="static" className="!bg-orange-500 h-20">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}} >
          PRAVESH
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
